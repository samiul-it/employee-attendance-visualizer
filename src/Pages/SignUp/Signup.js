import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigateToLogin = () => {
    navigate(`/login/`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password, lastName, firstName);

    axios({
      method: "post",
      url: "https://api.dvt.theyolostudio.com/auth/registration",
      data: {
        username: userName,
        password: password,
        first_name: firstName,
        last_name: lastName,
      },
    }).then(function (response) {
      if (response.status == 200) {
        navigateToLogin();
        toast("Registration Completed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Failed to Register", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
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
                  Welcome! Please Register Here
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">FistName*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Please Enter Your Username"
                    className="input input-bordered rounded-none input-success"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">LastName*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Please Enter Your Username"
                    className="input input-bordered rounded-none input-success"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    required
                  />
                </div>
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
                      to={"/login"}
                    >
                      Navigate to Login
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-none bg-red-600 hover:bg-red-800 ">
                    SignUp
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

export default Signup;
