import { NavLink } from "react-router-dom";
import "./HomePage.css"; // Import the HomePage CSS file

function HomePage() {
  return (
    <div className="home-container">
      <div className="frosted-box">
        <div className="content">
          <img
            src="logo.svg" // Reference the SVG file in the public folder
            alt="The Library Logo"
            className="h-44 mb-12" // Adjust height/width as needed
          />
          <h2 className="title"> Streamlining Your Library Operations</h2>

          <div className="button-container">
            <NavLink to="/login" className="btn-custom btn-primary-custom">
              Login
            </NavLink>
            <NavLink to="/register" className="btn-custom btn-secondary-custom">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
