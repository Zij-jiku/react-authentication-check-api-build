import axios from "axios";
import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/login", data)
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
            <h2>Login Account</h2>
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.formSubmit}>
              {error}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
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
                  name="password"
                  className="form-control"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  <Link to="/forget">Forget Password </Link>
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

export default Login;
