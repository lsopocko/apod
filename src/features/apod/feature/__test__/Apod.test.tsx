import { render, screen } from "@testing-library/react";
import Apod from "../Apod";

const pictureUrl = "/image.jpg";

test("Renders astronomic picture of the day", () => {
  render(
    <Apod url="/image.jpg" isLoading={false}/>
  );

  const crispImage = screen.getByAltText(/Nasa APOD/);
  const bluredBackground = screen.getByAltText(/Blured background/);

  expect(crispImage).toBeInTheDocument();
  expect(bluredBackground).toBeInTheDocument();
  expect(crispImage).toHaveAttribute("src", pictureUrl)
});

test("Fades picture of the day if isLoading", () => {
  render(
    <Apod url={pictureUrl} isLoading={true}/>
  );

  const crispImage = screen.getByAltText(/Nasa APOD/);

  expect(crispImage).toHaveClass("crisp fade");
});
