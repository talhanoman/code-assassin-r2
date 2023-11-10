import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Error2, logo } from "../../../imagepath";

const Error500 = () => {

    useEffect(() => {
		document.body.classList.add("error-page");
		return () => document.body.classList.remove("error-page");
		}, []);

  return (
    <>
      <div className="main-wrapper">
        <div className="error-box">
          <div className="error-logo">
            <Link to="/">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="error-box-img">
            <img src={Error2} alt="" className="img-fluid" />
          </div>
          <h3 className="h2 mb-3"> Oops! 500 Internal Server Error</h3>
          <p className="h4 font-weight-normal">
            We are working on fixing the problem. We back soon
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error500;
