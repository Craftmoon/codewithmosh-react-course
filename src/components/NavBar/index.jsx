import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { key: "1", label: "Movies", path: "/movies" },
    {
      key: "2",
      label: "Customers",
      path: "/customers"
    },
    { key: "3", label: "Rentals", path: "/rentals" },
    { key: "4", label: "Login", path: "/login" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Vidly
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {navItems.map(navItem => (
            <li className="nav-item" key={navItem.key}>
              <NavLink
                className="nav-link"
                to={navItem.path}
                activeClassName="active"
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
