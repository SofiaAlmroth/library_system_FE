import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 mb-6">
      <div className="flex-1">
        <NavLink to="/books" className="btn btn-ghost text-3xl">
          Intensive Library
        </NavLink>
      </div>

      <div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/books"}>Books</NavLink>
            </li>
            <li>
              <NavLink to={"/categories"}>Categories</NavLink>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
