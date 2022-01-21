import { render, screen, fireEvent } from "@testing-library/react";
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

  const menuToggle = screen.getByRole(/menuToggle/);
  const menuList = screen.getByText(/Przegladaj/).parentElement?.parentElement;

  fireEvent.click(menuToggle);

  expect(menuList).toHaveClass("is-expanded");
});
