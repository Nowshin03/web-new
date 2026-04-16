import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const value = props.page;
  const navigate = useNavigate();

  // FRONTEND ONLY AUTH STATE (no backend token logic)
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    // frontend session clear only
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("id");

    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo1">
        <h1> StudyHub </h1>
      </div>

      <div className="navigation">
        <div id="menu-btn">
          <div className="menu-dash" onClick={toggleMobileMenu}>
            &#9776;
          </div>
        </div>

        <ul className={isMobileMenuOpen ? "active" : ""}>
          {isMobileMenuOpen && (
            <li>
              <button onClick={closeMobileMenu}>X</button>
            </li>
          )}

          <li className={value === "home" ? "active-link" : ""}>
            <Link to="/">Home</Link>
          </li>

          <li className={value === "courses" ? "active-link" : ""}>
            <Link to="/courses">Courses</Link>
          </li>

          {isLoggedIn && (
            <>
              <li className={value === "profile" ? "active-link" : ""}>
                <Link to="/profile">
                  Profile <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>

              <li className={value === "learnings" ? "active-link" : ""}>
                <Link to="/learnings">
                  Learnings <FontAwesomeIcon icon={faChalkboardUser} />
                </Link>
              </li>

              <li>
                <button onClick={handleLogOut}>Sign Out</button>
              </li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li>
                <button onClick={() => navigate("/login")}>
                  Login / SignUp
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/adminlogin")}>
                  Teacher Login
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;