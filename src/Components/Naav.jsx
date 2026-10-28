import React from "react";
import Navbar from "../data/Navbar.json";

const Naav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Offcanvas navbar large"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {Navbar.brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex={-1}
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {Navbar.links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${link.active ? "active" : ""}`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {Navbar.dropdown && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {navbarData.dropdown.label}
                  </a>
                  <ul className="dropdown-menu">
                    {navbarData.dropdown.items.map((item, i) =>
                      item === "divider" ? (
                        <li key={i}>
                          <hr className="dropdown-divider" />
                        </li>
                      ) : (
                        <li key={i}>
                          <a className="dropdown-item" href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              )}
            </ul>

            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Naav;
