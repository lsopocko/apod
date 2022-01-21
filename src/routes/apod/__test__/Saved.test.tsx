import { render, screen, act, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import Saved from "../Saved";

const fakeStoredApods = [
    {
      "date": "1997-01-24",
      "explanation": "Fake apod description 1",
      "hdurl": "fakehdurl1.jpg",
      "title": "Fake title 1",
      "url": "fakeurl1.jpg"
    },
    {
        "date": "1997-01-25",
        "explanation": "Fake apod description 2",
        "hdurl": "fakehdurl2.jpg",
        "title": "Fake title2",
        "url": "fakeurl2.jpg"
      }
  ];

beforeAll(() => {
    localStorage.setItem("apod", JSON.stringify(fakeStoredApods))
}) 

test("Saved route renders gallery with saved pictures", async () => {

  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/zapisane"]}>
        <Routes>
            <Route path="/zapisane" element={<Saved />} />
        </Routes>
      </MemoryRouter>
    );
  });

  const apods = screen.queryAllByAltText(/Thumbnail/);

  expect(apods[0]).toHaveAttribute("src", "fakeurl1.jpg");
  expect(apods[1]).toHaveAttribute("src", "fakeurl2.jpg");
});

