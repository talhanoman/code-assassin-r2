import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Chapter,
    Chart,
    Cloud,
    Course11,
    Icon1,
    Import,
    Key,
    Mobile,
    People,
    Play,
    Teacher,
    Timer,
    Timer2,
    User1,
    Users,
    Video2,
    Video1
} from "../../../imagepath";
import OverViewEnrolled from "../courseDetails1/OverviewEnrolled";
import FeatherIcon from "feather-icons-react";
import Footer from "../../../footer";
import StudentHeader from "../../../student/header";
import Cookies from "universal-cookie";
import { ViewSectionsAndLecturesOfCoursesForStudent } from "../../../../api/get";
import { useLocation, useNavigate } from "react-router-dom";
import VideoModal from "../../../VideoModal/VideoModal";

const CourseEnrolled = () => {
    const videoModalRef = useRef(null);
    const cookie = new Cookies()
    const token = cookie.get('token')

    const location = useLocation()
    const course_guid = location.state.course_guid
    const course_title = location.state.course_title
    const course_description = location.state.course_description
    const course_level = location.state.course_level
    const course_category = location.state.course_category

    const navigate = useNavigate()

    const [courseDetails, setCourseDetails] = useState([])

    useEffect(() => {
        viewLecturesAnsSections()
    }, [])

    const viewLecturesAnsSections = async () => {
        let response = await ViewSectionsAndLecturesOfCoursesForStudent(token, course_guid)
        if (response.status === 200) {
            console.log(response.data)
            setCourseDetails(response.data)
        }
        else {
            navigate('/login')
        }

    }

    const [currentVideo, setCurrentVideo] = useState(null);
    const handleVideoModal = (lecture_url, title, is_completed, course_guid, lecture_guid)=>{
        setCurrentVideo({
            lecture_url,
            title,
            is_completed,
            course_guid,
            lecture_guid
        })
        videoModalRef.current.click();
    }
    return (
        <>
            <div className="main-wrapper">
                <StudentHeader />
                {/* <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Courses
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        All Courses
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        The Complete Web Developer Course 2.0
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}

                <section className="course-content course-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card complete-sec">
                                    <div className="card-body">
                                        <div className="com-info">
                                            <div>
                                                <h2>{course_title}</h2>

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

                            <OverViewEnrolled courseDetails={courseDetails} course_description={course_description} handleVideoModal={handleVideoModal} />

                            <div className="col-lg-4">
                                {/* Video */}
                                <div className="video-secs vid-bg no-video">

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
                                                <span>{course_level}</span>
                                            </li>
                                            <li>
                                                <img src={Timer2} className="me-2" alt="" /> Course category:{" "}
                                                <span>{course_category}</span>
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
                        <button type="button" ref={videoModalRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                        <VideoModal currentVideo={currentVideo} />
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default CourseEnrolled;
