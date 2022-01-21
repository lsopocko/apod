import { render, screen, fireEvent } from "@testing-library/react";
import Browser from "../Browser";

const nextSpy = jest.fn();
const saveSpy = jest.fn();

test("Renders astronomic picture of the day", () => {

  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} />
  );

  const saveBtn = screen.getByRole(/saveBtn/);
  const nextBtn = screen.getByRole(/nextBtn/);

  expect(saveBtn).toBeInTheDocument();
  expect(nextBtn).toBeInTheDocument();
});

test("Triggers save action", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} />
  );

  const saveBtn = screen.getByRole(/saveBtn/);
  fireEvent.click(saveBtn);
  expect(saveSpy).toHaveBeenCalled();
})

test("Triggers next action", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} />
  );

  const nextBtn = screen.getByRole(/nextBtn/);
  fireEvent.click(nextBtn);
  expect(nextSpy).toHaveBeenCalled();
})

test("Shows spinner when loading", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={true} />
  );

  const loader = screen.getByRole(/progressbar/);
  expect(loader).toBeInTheDocument();
})

test("Shows infobox when info is avaiable", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} title="Infobox title" description="Description" date="22.12.2022" />
  );

  const infobox = screen.getByText(/Infobox title/);
  expect(infobox).toBeInTheDocument();
})

test("Shows APOD when url is avaiable", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} url="/apod.jpg" />
  );

  const apodImage = screen.getByAltText(/Nasa APOD/);
  expect(apodImage).toBeInTheDocument();
})