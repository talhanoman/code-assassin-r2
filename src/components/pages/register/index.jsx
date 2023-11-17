import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo } from "../../imagepath";
import { useState } from "react";
import { HandleRegistration } from "../../../api/post";
// import "../../../assets/js/jquery-3.6.0.min.js"

const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};
const hasMixed = (value) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};
const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};

const strengthColor = (count) => {
  if (count < 1) return "poor";
  if (count < 2) return "weak";
  if (count < 3) return "strong";
  if (count < 4) return "heavy";
};


const Register = () => {

  const [eye, seteye] = useState(true)
  // Form States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [strength, setStrength] = useState("");
  // const [pwdError, setPwdError] = useState("Use 8 or more characters with a mix of letters, numbers & symbols.")

  const onEyeClick = () => {
    seteye(!eye)
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (value) => {
    if (!value) {
      setValidationError(1);
    }
    else if (value.length < 8) {
      setValidationError(2);
    }
    else if (!/[0-9]/.test(value)) {
      setValidationError(3);
    }
    else if (!/[!@#$%^&*()]/.test(value)) {
      setValidationError(4);
    }
    else {
      setValidationError(5);
    }
  };

  const messages = () => {
    if (validationError == 1) {
      return ""
    }
    else if (validationError == 2) {
      return <span id="poor" className="active" style={{ fontSize: 12, color: '#DC3545' }}>☹️ Weak. Must contain at least 8 characters</span>
    }
    else if (validationError == 3) {
      return <span id="weak" className="active" style={{ fontSize: 12, color: '#FFC107' }}>🙄 Average. Must contain at least 1 letter or number</span>
    }
    else if (validationError == 4) {
      return <span id="strong" className="active" style={{ fontSize: 12, color: '#0D6EFD' }}>🙂 Almost. Must contain special symbol</span>
    }
    else if (validationError == 5) {
      return <span id="heavy" className="active" style={{ fontSize: 12, color: '#4BB543' }}>😊 Awesome! You have a secure password.</span>
    }

  }



  const strengthIndicator = (value) => {
    let strengths = 0;

    if (value.length >= 8)
      strengths = 1;
    if (hasNumber(value) && value.length >= 8)
      strengths = 2;
    if (hasSpecial(value) && value.length >= 8 && hasNumber(value))
      strengths = 3;
    if (hasMixed(value) && hasSpecial(value) && value.length >= 8 && hasNumber(value))
      strengths = 3;
    return strengths;
  };



  var settings = {
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };


  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }
  useEffect(() => {
    if (password) {
      if (password !== '') {
        let strength = strengthIndicator(password);
        let color = strengthColor(strength);
        setStrength(color);
      } else {
        setStrength('');
      }
    }
  }, [password])


  const handleRegistration = (e)=>{
    e.preventDefault();
    
    if(password === confirmPassword)
    {
      HandleRegistration({
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword
      })
    }
  }
  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Code Assassin.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Code Assassin.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Code Assassin.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <form onSubmit={handleRegistration}>
                  <div className="form-group">
                    <label className="form-control-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your First Name"
                      required
                      value={firstName}
                      onChange={(e)=>setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Last Name"
                      required
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Username"
                      required
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      required
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group" id="passwordInput">
                      <input required className="form-control pass-input" placeholder="Enter your password" type={eye ? "password" : "text"} onChange={handlePasswordChange} />
                      {/* <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/> */}
                      <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash"}`} />
                      <span className="toggle-password feather-eye"></span>
                      <span className="pass-checked"><i className="feather-check"></i></span>
                    </div>
                    <div id="passwordStrength" style={{ display: "flex" }}
                      className={`password-strength ${strength === 'poor' ? "poor-active" : strength === 'weak' ? 'avg-active' :
                        strength === 'strong' ? "strong-active" : strength === 'heavy' ? 'heavy-active' : ''}`}>
                      <span id="poor" className="active"></span>
                      <span id="weak" className="active"></span>
                      <span id="strong" className="active"></span>
                      <span id="heavy" className="active"></span>
                    </div>
                    <div id="passwordInfo">{messages()}</div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password confirmation</label>
                    <div className="pass-group" id="confirmpasswordInput">
                      <input required value={confirmPassword} className="form-control pass-input" placeholder="Enter your password" type={eye ? "password" : "text"} onChange={handleConfirmPassword} />
                      {/* <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/> */}
                      <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash"}`} />
                      <span className="toggle-password feather-eye"></span>
                      <span className="pass-checked"><i className="feather-check"></i></span>
                    </div>

                    {/* Confirm Password Validation */}
                    {
                      (password.length > 0 && confirmPassword.length > 0)
                      &&
                      password !== confirmPassword
                      &&
                      <div className="text-[#DC3545]" id="passwordInfo">Password doesn't match </div>
                    }
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" type="submit">Register</button>
                  </div>
                </form>
              </div>
              <div className="google-bg text-center">
                <p className="mb-0">
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;