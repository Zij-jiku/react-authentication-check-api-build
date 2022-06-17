import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
export class Profile extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" replace={true} />;
    }

    return (
      <div>
        <div className="row justify-content-center ">
          <div className="col-lg-8 text-center">
            <h2>Profile Account</h2>
          </div>
          <div className="col-lg-6">
            <div className="card text-center">
              <div className="card-header">Name: {name} </div>
              <div className="card-body">
                <h5 className="card-title">Email: {email} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
