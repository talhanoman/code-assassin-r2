import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Chapter,
  Course11,
  Timer2,
  User1,
  Users,
  Video2,
} from "../../../imagepath";
import OverView from "./overView";
import Footer from "../../../footer";
import StudentHeader from "../../../student/header";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { ViewSectionsAndLecturesOfCourses, IsCoursePurchased } from "../../../../api/get";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../../../store/cartStore";

const CourseDetails1 = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cookie = new Cookies()
  const token = cookie.get('token')

  const location = useLocation()
  const course_guid = location?.state?.course_guid

  const navigate = useNavigate()

  const [courseDetails, setCourseDetails] = useState([])
  console.log('Course Details', courseDetails);
  const [purchaseStatus, setPurchaseStatus] = useState(false)

  useEffect(() => {
    isCoursePurchased()
    viewLecturesAnsSections()
  }, [])

  const isCoursePurchased = async () => {
    let response = await IsCoursePurchased(token, course_guid)
    if (response.status === 200) {
      setPurchaseStatus(response.data)
    }
    else {
      navigate("/login")
    }
  }

  const viewLecturesAnsSections = async () => {
    let response = await ViewSectionsAndLecturesOfCourses(token, course_guid)
    if (response.status === 200) {
      console.log(response.data)
      setCourseDetails(response.data)
    }
    else {
      navigate('/login')
    }

  }

  return (
    <>
      <div className="main-wrapper">
        <StudentHeader />
        <section className="course-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card complete-sec">
                  <div className="card-body">
                    <div className="com-info">
                      <div>
                        <h2>{courseDetails ? courseDetails[0]?.course_title : ' '}</h2>
                        <div className="instructor-wrap border-bottom-0 m-0">
                          <div className="about-instructor align-items-center">
                            <div className="abt-instructor-img">
                              <Link to="/instructor-profile">
                                <img
                                  src={User1}
                                  alt="img"
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                            <div className="instructor-detail">
                              <h5>
                                <Link to="/instructor-profile">
                                  Nicole Brown
                                </Link>
                              </h5>
                              <p>UX/UI Designer</p>
                            </div>
                            <div className="rating mb-0 ms-3">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                <span>4.5</span> (15)
                              </span>
                            </div>
                          </div>
                          <span className="web-badge text-dark">
                            WEB DEVELPMENT
                          </span>
                        </div>
                        {/* <div className="course-info d-flex align-items-center border-bottom-0 p-0 m-0">
                          <div className="cou-info">
                            <img src={Icon1} alt="" />
                            <p>12+ Lesson</p>
                          </div>
                          <div className="cou-info">
                            <img src={Timer} alt="" />
                            <p>9hr 30min</p>
                          </div>
                          <div className="cou-info">
                            <img src={People} alt="" />
                            <p>32 students enrolled</p>
                          </div>
                        </div> */}
                      </div>
                      <Link
                        to="https://www.youtube.com/embed/1trvO6dqQUI"
                        className="video-thumbnail ms-auto"
                        data-fancybox=""
                      >
                        <div className="play-icon">
                          <i className="fa-solid fa-play" />
                        </div>
                        <img className="img-fluid" src={Course11} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <OverView courseDetails={courseDetails} />

              <div className="col-lg-4">
                {/* Video */}
                <div className="video-secs vid-bg no-video">
                  <div className="card">
                    <div className="card-body">
                      <div className="video-details">
                        <div className="course-fee">
                          <h2>${courseDetails ? courseDetails[0]?.course_price : ' '}</h2>
                          <p>
                            <span>$999.00</span> 50% off
                          </p>
                        </div>
                        <div className="row gx-2">

                          <div className="col-sm-12">
                            {
                              purchaseStatus ?
                                ' Already purchased '
                                :
                                <button
                                  onClick={() => {
                                    addToCart(courseDetails[0])
                                  }}
                                  className="btn btn-enroll w-100"
                                >
                                  Add To Cart
                                </button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Video */}
                {/* Include */}
                <div className="card include-sec">
                </div>
                {/* /Include */}
                {/* Features */}
                <div className="card feature-sec">
                  <div className="card-body">
                    <div className="cat-title">
                      <h4>Includes</h4>
                      <span>
                        <i className="fas fa-angle-down" />
                      </span>
                    </div>
                    <ul>
                      <li>
                        <img src={Users} className="me-2" alt="" /> Difficult level:{" "}
                        <span>{courseDetails ? courseDetails[0]?.course_level : ' '}</span>
                      </li>
                      <li>
                        <img src={Timer2} className="me-2" alt="" /> Course category:{" "}
                        <span>{courseDetails ? courseDetails[0]?.course_category : ' '}</span>
                      </li>
                      <li>
                        <img src={Chapter} className="me-2" alt="" /> Chapters:{" "}
                        <span>15</span>
                      </li>
                      <li>
                        <img src={Video2} className="me-2" alt="" /> Course type:
                        <span> Web development</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Features */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CourseDetails1;
