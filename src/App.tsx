import "@fortawesome/fontawesome-free/css/all.css";
import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {!isHomePage && <NavBar />}
      <Outlet />
    </>
  );
}

export default App;
