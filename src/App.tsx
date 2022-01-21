import { Outlet } from "react-router";
import { HamburgerMenu } from "./ui";

function App() {
  return (
    <>
      <HamburgerMenu />
      <Outlet />
    </>
  );
}

export default App;
