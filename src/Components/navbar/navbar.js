import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import React from "react";

export default function Navbar() {


  return (
    <>
      <nav className={`${styles.myNav}  navbar navbar-dark  navbar-expand-lg`}>
        <div className="container mb-4 mt-3 ">
          <Link className={`${styles.title} tilte `} to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.links_style}  `}
            >
              <li className={`${styles.linksLinks} nav-item`}>
                <Link
                  onClick={``}
                  className={`${styles.linksLinks} nav-link active `}
                  id="link"
                  aria-current="page"
                  to="about"
                >
                  {" "}
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={``}
                  className={`${styles.linksLinks}  nav-link `}
                  aria-current="page"
                  to="PORTFOLIO"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={``}
                  className={`${styles.linksLinks}  nav-link `}
                  aria-current="page"
                  to="CONTACT"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
