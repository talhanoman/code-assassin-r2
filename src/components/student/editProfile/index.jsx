import React, { useState, useEffect } from "react";
import StudentHeader from "../header";
import Footer from "../../footer";
import { User11 } from "../../imagepath";
import { Link } from "react-router-dom";
import StudentSideBar from "../sidebar";
import Select from "react-select";
import Cookies  from 'universal-cookie'
import { useNavigate } from "react-router-dom";
import { ViewProfileData } from "../../../api/get";
import { UpdateProfileData } from "../../../api/put";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function StudentEditProfile() {
  const [setCountry] = useState(null);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [skill, setSkill] = useState('')
  const [bio, setBio] = useState('')
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [address, setAddress] = useState('');
  const cookie = new Cookies()
  const token = cookie.get('token')

  useEffect(() => {
    GetProfile()
  }, [])

  const navigate = useNavigate()

  const GetProfile = async () => {

    let response = await ViewProfileData(token)

    if (response?.status === 200)
    {
      setFirstName(response?.data[0].first_name)
      setLastName(response?.data[0].last_name)
      setEmail(response?.data[0].email)
      setPhone(response?.data[0].phone)
      setUsername(response?.data[0].username)
      setSkill(response?.data[0].skill)
      setBio(response?.data[0].biography)
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

  const UpdateProfile = async () => {

    const studentData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Username: username,
      Skill: skill,
      Bio: bio
    }

    let response = await UpdateProfileData(token, studentData)

      if (response?.status === 200)
      {
        toast('Profile Updated!')
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
  
  const options = [
    { label: "Select Country", value: "Country" },
    { label: "India", value: "India" },
    { label: "America", value: "America" },
    { label: "London", value: "London" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      border: "1px solid #e9ecef",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      color: "black",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Profile"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <StudentSideBar activeMenu="EditProfile" />
            {/* Sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Profile Details</h3>
                    <p>
                      You have full control to manage your own account setting.
                    </p>
                  </div>
                  <div className="course-group mb-0 d-flex">
                    <div className="course-group-img d-flex align-items-center">
                      <Link to="/students-profile">
                        <img src={User11} alt="" className="img-fluid" />
                      </Link>
                      <div className="course-name">
                        <h4>
                          <Link to="/students-profile">Your avatar</Link>
                        </h4>
                        <p>PNG or JPG no bigger than 800px wide and tall.</p>
                      </div>
                    </div>
                    <div className="profile-share d-flex align-items-center justify-content-center">
                      <Link to="#;" className="btn btn-success">
                        Update
                      </Link>
                      <Link to="#;" className="btn btn-danger">
                        Delete
                      </Link>
                    </div>
                  </div>
                  <div className="checkout-form personal-address add-course-info ">
                    <div className="personal-info-head">
                      <h4>Personal Details</h4>
                      <p>Edit your personal information and address.</p>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your first Name"
                              value={firstName}
                              onChange={(e) => {setFirstName(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your last Name"
                              value={lastName}
                              onChange={(e) => {setLastName(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Phone"
                              value={phone}
                              onChange={(e) => {setPhone(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Email"
                              disabled
                              value={email}
                              onChange={(e) => {setEmail(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your username"
                              value={username}
                              onChange={(e) => {setUsername(e.target.value)}}
                            />
                          </div>
                        </div>
          
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              College Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter college name"
                              value={college}
                              onChange={(e) => {setCollege(e.target.value)}}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Address"
                              value={address}
                              onChange={(e) => {setAddress(e.target.value)}}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Branch / Stream
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Branch"
                              value={branch}
                              onChange={(e) => {setBranch(e.target.value)}}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Biography
                            </label>
                            <textarea
                              rows={8}
                              type="text"
                              className="form-control"
                              placeholder="Enter your biography"
                              value={bio}
                              onChange={(e) => {setBio(e.target.value)}}
                            />
                          </div>
                        </div>

                        <div className="update-profile">
                          <button onClick={() => {UpdateProfile()}} type="button" className="btn btn-primary">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
        <ToastContainer />
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
