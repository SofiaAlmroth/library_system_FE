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
    <div className="navbar bg-base-100 my-6">
      <div className="flex-1">
        <NavLink to="/books">
          <img
            src="/logo.svg" // Reference the SVG file in the public folder
            alt="The Library Logo"
            className="h-24" // Adjust height/width as needed
          />
        </NavLink>
      </div>

      <div>
        <div className="flex-none">
          <div className="flex gap-x-6 text-2xl font-medium">
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
                <span className="font-bold uppercase">{user.name}</span>
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
