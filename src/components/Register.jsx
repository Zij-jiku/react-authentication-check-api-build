import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    message: "",
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post("/register", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.user);
      })

      .catch((error) => {
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/profile" replace={true} />;
    }

    let error = "";
    if (this.state.message) {
      error = (
        <div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>{this.state.message}</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="row justify-content-center ">
          <div className="col-lg-8 text-center">
            <h2>Register Account</h2>
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.formSubmit}>
              {error}

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password_confirmation"
                  required
                  onChange={(e) => {
                    this.setState({ password_confirmation: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  <Link to="/login">Login </Link>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
