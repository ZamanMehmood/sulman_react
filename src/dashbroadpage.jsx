import React from "react";

const DashBroadPage =()=>{
    return(
        <div className="container-fluid bg-light">
        <div className="row">
            <div className="col-6">
                <h1 className="text-primary" style={{
                    fontSize:"54px"
                }}>facebook</h1>
               <p className="fs-3 ">Facebook helps you connect and share <br/> 
                with the people in your life.</p> 
            </div>
            <div className="col-6">
            <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="p-4 shadow bg-white rounded" style={{ width: "400px" }}>
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
          <button className="btn btn-success">Create new account</button>
        </div>
      </div>
      <div className="position-absolute bottom-0 text-center w-100 p-3">
        <p>
          <strong>Create a Page</strong> for a celebrity, brand or business.
        </p>
      </div>
    </div>
            </div>
            </div>        
        </div>
    )
}

export default DashBroadPage