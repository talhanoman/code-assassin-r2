import React, { useState } from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { UpdateStudentPassword } from "../../../api/put";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Cookies  from 'universal-cookie'

export default function StudentSecurity() {

  const navigate = useNavigate()
  const cookie = new Cookies()
  const token = cookie.get('token')

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const UpdatePassword = async (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword)
    {

      const studentData = {
        OldPassword: oldPassword,
        NewPassword: newPassword
      }
  
      let response = await UpdateStudentPassword(token, studentData)
  
        if (response?.status === 200)
        {
          toast('Password Updated!')
        }
        else if (response?.status === 400)
        {
          toast(response?.message)
        }
        else
        {
          navigate('/login')
        }
    }
    else
    {
      toast('Passwords does not match!')
    }
  }

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Security"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <StudentSideBar activeMenu={"Security"} />
            {/* Sidebar */}

            {/* Student Security */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Security</h3>
                    <p>
                      Edit your account settings and change your password here.
                    </p>
                  </div>
                  {/* <div className="checkout-form personal-address border-line">
                    <div className="personal-info-head">
                      <h4>Email Address</h4>
                      <p>
                        Your current email address is{" "}
                        <span>maxwell@example.com</span>
                      </p>
                    </div>
                    <form action="#">
                      <div className="new-address">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                New email address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your New email address"
                              />
                            </div>
                          </div>
                          <div className="profile-share d-flex ">
                            <button type="button" className="btn btn-success">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div> */}
                  <div className="checkout-form personal-address">
                    <div className="personal-info-head">
                      <h4>Change Password</h4>
                      <p>
                        We will email you a confirmation when changing your
                        password, so please expect that email after submitting.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <form onSubmit={UpdatePassword}>
                          <div className="form-group">
                            <label className="form-control-label">
                              Current password
                            </label>
                            <input value={oldPassword} onChange={(e) => {setOldPassword(e.target.value)}} required type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label className="form-control-label">
                              Password
                            </label>
                            <div className="pass-group" id="passwordInput">
                              <input
                                value={newPassword} 
                                onChange={(e) => {setNewPassword(e.target.value)}}
                                required
                                type="password"
                                className="form-control pass-input"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div
                              className="password-strength"
                              id="passwordStrength"
                            >
                              <span id="poor"></span>
                              <span id="weak"></span>
                              <span id="strong"></span>
                              <span id="heavy"></span>
                            </div>
                            <div id="passwordInfo"></div>
                          </div>
                          <div className="form-group">
                            <label className="form-control-label">
                              Confirm New Password
                            </label>
                            <input value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} required type="password" className="form-control" />
                          </div>
                          <div className="update-profile save-password">
                            <button type="submit" className="btn btn-primary">
                              Save Password
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Student Security */}
          </div>
        </div>
        <ToastContainer />
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
