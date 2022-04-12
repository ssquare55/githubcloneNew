import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navstyle = { color: "#fff", fontSize: "1rem" };

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        {/* <NavLink className="navbar-brand" href="#">
          Navbar
        </NavLink> */}
        <FaGithub color="white" size={40} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={Navstyle}
                aria-current="page"
                to="#"
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={Navstyle}
                aria-current="page"
                to="#"
              >
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={Navstyle}
                aria-current="page"
                to="#"
              >
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="#" style={Navstyle}>
                Marketplace
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="#" style={Navstyle}>
                Pricing
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <NavLink className="nav-link active" to="/" style={Navstyle}>
              Sign in
            </NavLink>

            <NavLink className="nav-link active" to="/signup" style={Navstyle}>
              Sign up
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
