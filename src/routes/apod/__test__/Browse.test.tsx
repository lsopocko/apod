import { render, screen, act, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import Browse from "../Browse";

jest.mock("../../../util/loadImageAsync", () => {
  return jest.fn().mockResolvedValue(true);
})

const fakeApodResponse = [
  {
    "date": "1997-01-24",
    "explanation": "Ten years ago the most notable supernova\r of modern times was observed. In February 1987, light reached\r Earth from a star which exploded in the nearby Large Magellanic Cloud\r galaxy. Supernova 1987a\r remains the closest supernova\r since the invention of the telescope.  The explosion\r catapulted a tremendous amount of gas,\r light,\r and neutrinos\r into interstellar space. When observed by the Hubble Space Telescope\r (HST) in 1994, large strange rings\r were discovered whose origin is still mysterious, although thought\r to have been expelled even before the main explosion. More recent HST observations\r shown in the inset, however, have uncovered something actually predicted:\r the expanding fireball from the exploding star. The above high resolution images\r resolve two blobs flung out from the central explosion.\r",
    "hdurl": "https://apod.nasa.gov/apod/image/9701/sn1987ares_hst_big.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Supernova 1987a Fireball Resolved\r\nCredit:",
    "url": "https://apod.nasa.gov/apod/image/9701/sn1987ares_hst.jpg"
  }
];

test("Browse route renders browser with random apod", async () => {
  fetchMock.resetMocks();
  fetchMock.mockResponseOnce(JSON.stringify(fakeApodResponse));

  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
            <Route path="/" element={<Browse />} />
        </Routes>
      </MemoryRouter>
    );
  });

  const apod = screen.getByAltText(/Nasa APOD/);

  expect(apod).toBeInTheDocument();
  expect(apod).toHaveAttribute("src", "https://apod.nasa.gov/apod/image/9701/sn1987ares_hst.jpg");
});


test("Gets next random image when next button is clicked", async () => {
  fetchMock.resetMocks();
  fetchMock.mockResponseOnce(JSON.stringify(fakeApodResponse));

  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
            <Route path="/" element={<Browse />} />
        </Routes>
      </MemoryRouter>
    );
  });

  fetchMock.resetMocks();
  fetchMock.mockResponseOnce(JSON.stringify([{ ...fakeApodResponse[0], url: "https://apod.nasa.gov/apod/image/100/sn1987ares_hst.jpg"}]));

  const nextBtn = screen.getByRole(/nextBtn/);

  await act(async () => {
    await fireEvent.click(nextBtn);
  });

  const apod = screen.getByAltText(/Nasa APOD/);

  expect(apod).toBeInTheDocument();
  expect(apod).toHaveAttribute("src", "https://apod.nasa.gov/apod/image/100/sn1987ares_hst.jpg");
});

test("Stores image in favorites when save button is clicked", async () => {
  fetchMock.resetMocks();
  fetchMock.mockResponseOnce(JSON.stringify(fakeApodResponse));

  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
            <Route path="/" element={<Browse />} />
        </Routes>
      </MemoryRouter>
    );
  });

  const saveBtn = screen.getByRole(/saveBtn/);
  fireEvent.click(saveBtn);

  const savedPictures = localStorage.getItem("apod");
  const savedPicturesJSON = savedPictures && JSON.parse(savedPictures)

  expect(savedPicturesJSON[0].url).toEqual("https://apod.nasa.gov/apod/image/9701/sn1987ares_hst.jpg");
});

test("Shows error if no response from backend", async () => {
  fetchMock.resetMocks();
  fetchMock.mockResponseOnce("", { status: 500 });

  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
            <Route path="/" element={<Browse />} />
        </Routes>
      </MemoryRouter>
    );
  });

  const error = screen.getByText(/Error/);
  expect(error).toBeInTheDocument();
});
