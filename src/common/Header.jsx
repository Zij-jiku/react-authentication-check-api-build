import React, { Component } from "react";
import Nav from "./Nav";
import Home from "../components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Login from "../components/Login";
import Profile from "../components/Profile";
import axios from "axios";
import Reset from "../components/Reset";

export class Header extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    axios
      .get("/user")
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <Router>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />

          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/login"
                element={
                  <Login user={this.state.user} setUser={this.setUser} />
                }
              />
              <Route
                exact
                path="/register"
                element={
                  <Register user={this.state.user} setUser={this.setUser} />
                }
              />
              <Route exact path="/forget" element={<Forget />} />

              <Route exact path="/reset/:id" element={<Reset />} />
              <Route
                exact
                path="/profile"
                element={<Profile user={this.state.user} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Header;
