import React from "react";
import {  useNavigate } from "react-router-dom";



const DashBoardPage = () => {
    const navigate = useNavigate()
  return (
    <div className="container-fluid bg-light vh-100">
      <div className="row h-100">
        {/* Left Side */}
        <div className="col-md-6  d-flex flex-column justify-content-center align-items-start text-start ps-5 ">
          <h1 className="text-primary ps-5" style={{ fontSize: "54px" }}>
            facebook
          </h1>
          <p className="fs-4 text-dark ps-5">
            Facebook helps you connect and share <br /> with the people in your life.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="p-5 shadow bg-white rounded" style={{ width: "400px" }}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
            />
            <button className="btn btn-primary w-100 mb-3">Log in</button>
            <div className="text-center">
              <a href="#" className="text-primary">
                Forgotten password?
              </a>
            </div>
            <hr />
            <div className="text-center">
              <button className="btn btn-success"  onClick={() =>navigate("/signUp")}>Create new account</button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="position-absolute bottom-0 w-100 text-center ps-5">
          <p>
            <strong>Create a Page</strong> for a celebrity, brand, or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
