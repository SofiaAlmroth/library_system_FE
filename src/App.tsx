import "@fortawesome/fontawesome-free/css/all.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
