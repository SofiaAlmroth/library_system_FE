import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 mb-6">
      <div className="navbar-start">
        <NavLink to={"/books"} className="btn btn-ghost text-3xl">
          Intensive Library
        </NavLink>
      </div>
      <div className="navbar lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink to={"/books"}>Books</NavLink>
          </li>
          <li>
            <NavLink to={"/categories"}>Categories</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
