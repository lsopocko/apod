import { render, screen, fireEvent } from "@testing-library/react";
import Browser from "../Browser";

const nextSpy = jest.fn();
const saveSpy = jest.fn();

test("renders astronomic picture of the day", () => {

  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} />
  );

  const saveBtn = screen.getByRole(/saveBtn/);
  const nextBtn = screen.getByRole(/nextBtn/);

  expect(saveBtn).toBeInTheDocument();
  expect(nextBtn).toBeInTheDocument();
});

test("triggers save action", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} />
  );

  const saveBtn = screen.getByRole(/saveBtn/);
  fireEvent.click(saveBtn);
  expect(saveSpy).toHaveBeenCalled();
})

test("triggers next action", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} />
  );

  const nextBtn = screen.getByRole(/nextBtn/);
  fireEvent.click(nextBtn);
  expect(nextSpy).toHaveBeenCalled();
})

test("shows spinner when loading", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={true} />
  );

  const loader = screen.getByRole(/spinner/);
  expect(loader).toBeInTheDocument();
})

test("shows infobox when info is avaiable", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} title="Infobox title" description="Description" date="22.12.2022" />
  );

  const infobox = screen.getByRole(/infobox/);
  expect(infobox).toBeInTheDocument();
})

test("shows APOD when url is avaiable", () => {
  render(
    <Browser onNext={nextSpy} onSave={saveSpy} isLoading={false} url="/apod.jpg" />
  );

  const apod = screen.getByRole(/astronomicPicture/);
  expect(apod).toBeInTheDocument();
})