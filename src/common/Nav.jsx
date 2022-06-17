import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export class Nav extends Component {
  state = {
    logout: "",
  };

  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

  render() {
    let buttons;
    let profile;

    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={this.logout}>
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      );

      profile = (
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      );
    } else {
      buttons = (
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Logo
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">{profile}</li>
              </ul>
              <span className="navbar-text"></span>

              {buttons}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
