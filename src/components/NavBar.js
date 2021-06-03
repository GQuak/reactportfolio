import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        {/* <a class="navbar-brand">Gabe Quakkelaar</a> */}
        <Link
          to="/"
          className={
            window.location.pathname === "/"
              ? "navbar-brand"
              : "navbar-brand"
          }
        >
          Gabe Quakkelaar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <a
                class="nav-link active"
                href="index.html"
                title="Go to the Homepage"
              >
                Home
              </a> */}
              <Link
                to="/home"
                className={
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              {/* <a
                class="nav-link active"
                href="about.html"
                title="Go to the About page"
              >
                About
              </a> */}
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              {/* <a
                class="nav-link active"
                href="contact.html"
                title="Go to the Contact page"
              >
                Contact
              </a> */}
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li class="nav-item">
              {/* <a
                class="nav-link"
                aria-current="page"
                href="#"
                title="Go to Gabe Quakkelaar's Portfolio"
              >
                Portfolio
              </a> */}
              <Link
                to="/portfolio"
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <a
            href="./assets/uploads/Gabe Quakkelaar Resume.pdf"
            target="blank"
            class="navbar-brand"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
