import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <h3 className="navbar-brand">
            24/7 News
          </h3>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#"  to="/">
                 General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#"  to="/technology">
                Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#"   to="/entertainment">
                Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#" to="/business">
                Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#" to="/health">
                Health
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
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
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
