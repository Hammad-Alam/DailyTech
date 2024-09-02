import React from "react";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark order-sm-first"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="#">
            <img
              src={logo}
              alt=""
              srcset=""
              style={{ width: "60px", height: "auto", borderRadius: "50px" }}
              className="order-sm-2"
            />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Articles
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link className="dropdown-item" to="/ai">
                      AI
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/programming">
                      Programming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blockchain">
                      Blockchain
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/iot">
                      IOT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cybersecurity">
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/softwaredevelopment">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gamedevelopment">
                      Game Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/vr-ar">
                      VR / AR
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/datascience">
                      Data Science
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
