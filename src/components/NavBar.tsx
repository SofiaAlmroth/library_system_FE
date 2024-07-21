import { auth } from "@services";
import { User } from "@types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = auth.getCurrentUser();

    setUser(user);
  }, []);

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
            {!user && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>

                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}

            {user && (
              <>
                <li>
                  <a>{user.name}</a>
                </li>

                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
