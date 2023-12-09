import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Chapter,
    Course11,
    Timer2,
    User1,
    Users,
    Video2,
} from "../../../imagepath";
import CourseContentCardEnrolled from "../courseDetails1/CourseContentCardEnrolled";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../../../footer";
import StudentHeader from "../../../student/header";
import Cookies from "universal-cookie";
import { ViewSectionsAndLecturesOfCoursesForStudent } from "../../../../api/get";
import { useLocation, useNavigate } from "react-router-dom";
import VideoModal from "../../../VideoModal/VideoModal";
import QuestionModal from "../../../QuestionModal/QuestionModal";

const CourseEnrolled = () => {


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
            .then(() => {
                if (courseDetails.length !== 0 && courseDetails[0].lectures.length !== 0) {
                    const c_details = courseDetails[0];                    
                    const firstLecture = c_details?.lectures[0];
                    console.clear();
                    console.log("First lecture", firstLecture);

                    const { lecture_url, title, is_completed, lecture_guid, lecture_duration, video_progress, course_guid } = firstLecture;
                    let updated_video_progress = video_progress == null ? 0 : video_progress
                    handleVideoModal(lecture_url, title, is_completed, course_guid, lecture_guid, lecture_duration, updated_video_progress)
                }
            })
    }, [courseDetails.length])

    const viewLecturesAnsSections = async () => {
        let response = await ViewSectionsAndLecturesOfCoursesForStudent(token, course_guid)
        if (response.status === 200) {
            console.log("View Lectures", response.data);
            setCourseDetails(response.data)

        }
        else {
            navigate('/login')
        }

    }

    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const handleVideoModal = (lecture_url, title, is_completed, course_guid, lecture_guid, lecture_duration, video_progress) => {
        setCurrentVideo({
            lecture_url,
            title,
            is_completed,
            course_guid,
            lecture_guid,
            lecture_duration,
            video_progress
        })
    }

    const handleQuestionModal = (course_guid, sample_question_guid, is_completed, question_title, question_description, question_difficulty) => {
        setCurrentQuestion({
            course_guid,
            sample_question_guid,
            is_completed,
            question_title,
            question_description,
            question_difficulty
        })
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
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                {/* Overview */}
                                <div className="card overview-sec">
                                    <div className="card-body">
                                        <h5 className="subs-title">Overview</h5>
                                        <h6>Course Description</h6>
                                        <p>
                                            {course_description}
                                        </p>

                                    </div>
                                </div>
                                {/* /Overview */}
                            </div>
                            <div className="col-lg-4">
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
                            {/* Video */}
                            <div className="col-lg-8">
                                <div className="card content-sec">
                                    <div className="card-body">
                                        <VideoModal currentVideo={currentVideo} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card content-sec">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h5 className="subs-title">Course Content</h5>
                                            </div>
                                            <div className="col-sm-6 text-sm-end">
                                                <h6>All Lectures</h6>
                                            </div>
                                        </div>
                                        {courseDetails?.map((obj, index) => {
                                            return (
                                                index != courseDetails.length - 1 ?
                                                    <CourseContentCardEnrolled sectionLength={obj.lectures.length} toast={toast} title={obj.section_title} lectures={obj.lectures} sample_problems={false} handleVideoModal={handleVideoModal} handleQuestionModal={handleQuestionModal} viewLecturesAnsSections={viewLecturesAnsSections} index={index} />
                                                    :
                                                    <CourseContentCardEnrolled sectionLength={obj.questions.length} toast={toast} title={'Sample Problems'} lectures={obj.questions} sample_problems={true} handleVideoModal={handleVideoModal} handleQuestionModal={handleQuestionModal} viewLecturesAnsSections={viewLecturesAnsSections} index={index} />
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Course Content */}

                            {/* /Reviews */}
                            <ToastContainer />
                        </div>
                        <QuestionModal currentQuestion={currentQuestion} />
                    </div>
                </section >
                <Footer />
            </div >
        </>
    );
};

export default CourseEnrolled;
