import "@fortawesome/fontawesome-free/css/all.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
