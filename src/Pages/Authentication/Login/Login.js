import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import google from "../../../img/google-1088004_960_720.png";
import left from "../../../img/left.png";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, loginUser, googleLoginUser, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handelOnBlur = (e) => {
    const felid = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginData };
    newUser[felid] = value;
    setLoginData(newUser);
  };
  const handelSubmitBtn = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const googleLogin = (location, navigate) => {
    googleLoginUser(location, navigate);
  };
  return (
    <div>
      <div className="container mt-5 p-5 signInBox">
        <div>
          <Link to="/"><img className="left" src={left} alt=""/></Link>
          <h4>Login</h4>
          <small>See your growth and get consulting support!</small>

          <h5 className="google mt-3" onClick={googleLogin}>
            <img src={google} alt="" />
            Sign in With Google
          </h5>
          <p className="text-center">
            <small>Or Sign in with Email</small>
          </p>
          {user?.email && (
            <div className="alert alert-success" role="alert">
              Logged in correctly!
            </div>
          )}
          {!isLoading && (
            <form onSubmit={handelSubmitBtn}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onBlur={handelOnBlur}
                  className="form-control"
                  id="exampleInputEmail1"
                />
                <div id="emailHelp" className="form-text">
                  <small>We'll never share your email with anyone else.</small>
                </div>
              </div>
              <label htmlFor="inputPassword5" className="form-label">
                Password*
              </label>
              <input
                type="password"
                name="password"
                placeholder="Min. 8 character"
                onBlur={handelOnBlur}
                id="inputPassword5"
                className="form-control"
              />
              <div className="mb-3 form-check text-end mt-3">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Forget Password?
                </label>
              </div>
              <input
                className="text-decoration-none fw-bold bg-danger text-center text-light px-4 py-2 rounded-3 border-3 border border-light w-100 mb-2"
                type="submit"
                value="Login"
              />
            </form>
          )}
          {isLoading && (
            <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          )}
          <p>
            Not registered yet?<Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
