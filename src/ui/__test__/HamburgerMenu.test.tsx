import { render, screen, fireEvent,  } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import HamburgerMenu from "../HamburgerMenu";

test("Expands when toggle is clicked", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
        <Routes>
            <Route path="/" element={
            <>
                <HamburgerMenu />
            </>} />
        </Routes>
      </MemoryRouter>
  );

  const menuToggle = screen.getByRole(/menu/);
  const menuItem = screen.getByText(/Przegladaj/);

  fireEvent.click(menuToggle);

  expect(menuItem).toBeVisible();
});
