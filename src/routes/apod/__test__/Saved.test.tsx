import { render, screen } from "@testing-library/react";
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
  render(
    <Saved />
  );

  const apods = await screen.findAllByAltText(/Thumbnail/);

  expect(apods[0]).toHaveAttribute("src", "fakeurl1.jpg");
  expect(apods[1]).toHaveAttribute("src", "fakeurl2.jpg");
});

