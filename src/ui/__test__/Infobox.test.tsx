import { render, screen, fireEvent } from "@testing-library/react";
import Infobox from "../Infobox";

test("Expands when title is clicked", () => {
  render(
    <Infobox title="Test title" description="Test description" date="22.12.2100" />
  );

  const title = screen.getByText(/Test title/);
  const description = screen.getByText(/Test description/);

  fireEvent.click(title);

  expect(description).toHaveClass("description is-expanded");
});
