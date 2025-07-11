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
    <div className="navbar bg-base-100 m-3">
      <div className="flex-1">
        <NavLink to="/books">
          <img src="/logo.svg" alt="The Library Logo" className="h-16" />
        </NavLink>
      </div>

      <div className="pr-12">
        <div className="flex-none">
          <div className="flex gap-x-6">
            <NavLink to="/books" className="hover-effect">
              Books
            </NavLink>

            <NavLink to="/categories" className="hover-effect">
              Categories
            </NavLink>

            {!user && (
              <>
                <NavLink to="/login" className="hover-effect">
                  Login
                </NavLink>

                <NavLink to="/register" className="hover-effect">
                  Register
                </NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink to="/profile" className="hover-effect">
                  {user.name}
                </NavLink>
                <NavLink to="/logout" className="hover-effect">
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
