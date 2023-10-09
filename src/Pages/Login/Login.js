import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);

    axios({
      method: "post",
      url: "https://api.dvt.theyolostudio.com/auth/login",
      data: {
        username: userName,
        password: password,
      },
    }).then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="card flex-shrink-0 lg:w-96 max-w-md shadow-2xl bg-base-100">
              <form onSubmit={handleFormSubmit} className="card-body">
                <h2 className="text-2xl text-center text-lime-600">
                  Welcome! Please Login
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Please Enter Your Username"
                    className="input input-bordered rounded-none input-success"
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered rounded-none input-success"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    required
                  />
                  <label className="label">
                    <Link
                      className="label-text-alt link link-hover text-red-700"
                      to={"/signup"}
                    >
                      New User? Please Signup
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-none bg-lime-600 hover:bg-lime-800 hover:text-red-500">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
