import React from "react";
import { Link } from "react-router-dom";
import { Icon1, Icon2, People, Play, User1 } from "../../../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import CourseContentCardEnrolled from "./CourseContentCardEnrolled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OverViewEnrolled = ({ courseDetails, course_description, handleVideoModal, viewLecturesAnsSections }) => {

  return (
    <>
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
        {/* Course Content */}
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
            {courseDetails?.map((obj, index) => (
                index != courseDetails.length - 1 ?
                <CourseContentCardEnrolled sectionLength={obj.lectures.length} toast={toast} title={obj.section_title} lectures={obj.lectures} sample_problems = {false} handleVideoModal={handleVideoModal} viewLecturesAnsSections={viewLecturesAnsSections}/>
                :
                <CourseContentCardEnrolled sectionLength={obj.questions.length} toast={toast} title={'Sample Problems'} lectures={obj.questions} sample_problems = {true} handleVideoModal={handleVideoModal} viewLecturesAnsSections={viewLecturesAnsSections}/>
              )) 
            }
          </div>
        </div>
        {/* /Course Content */}
        {/* Instructor */}
        {/* <div className="card instructor-sec">
          <div className="card-body">
            <h5 className="subs-title">About the instructor</h5>
            <div className="instructor-wrap">
              <div className="about-instructor">
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
                    <Link to="/instructor-profile">Nicole Brown</Link>
                  </h5>
                  <p>UX/UI Designer</p>
                </div>
              </div>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-rating">
                  4.5 Instructor Rating
                </span>
              </div>
            </div>
            <div className="course-info d-flex align-items-center">
              <div className="cou-info">
                <img src={Play} alt="" />
                <p>5 Courses</p>
              </div>
              <div className="cou-info">
                <img src={Icon1} alt="" />
                <p>12+ Lesson</p>
              </div>
              <div className="cou-info">
                <img src={Icon2} alt="" />
                <p>9hr 30min</p>
              </div>
              <div className="cou-info">
                <img src={People} alt="" />
                <p>270,866 students enrolled</p>
              </div>
            </div>
            <p>
              UI/UX Designer, with 7+ Years Experience. Guarantee of High
              Quality Work.
            </p>
            <p>
              Skills: Web Design, UI Design, UX/UI Design, Mobile Design, User
              Interface Design, Sketch, Photoshop, GUI, Html, Css, Grid Systems,
              Typography, Minimal, Template, English, Bootstrap, Responsive Web
              Design, Pixel Perfect, Graphic Design, Corporate, Creative, Flat,
              Luxury and much more.
            </p>
            <p>Available for:</p>
            <ul>
              <li>1. Full Time Office Work</li>
              <li>2. Remote Work</li>
              <li>3. Freelance</li>
              <li>4. Contract</li>
              <li>5. Worldwide</li>
            </ul>
          </div>
        </div> */}
        {/* /Instructor */}
        {/* Reviews */}
        {/* <div className="card review-sec">
          <div className="card-body">
            <h5 className="subs-title">Reviews</h5>
            <div className="instructor-wrap">
              <div className="about-instructor">
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
                    <Link to="/instructor-profile">Nicole Brown</Link>
                  </h5>
                  <p>UX/UI Designer</p>
                </div>
              </div>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-rating">
                  4.5 Instructor Rating
                </span>
              </div>
            </div>
            <p className="rev-info">
              “ This is the second Photoshop course I have completed with
              Cristian. Worth every penny and recommend it highly. To get the
              most out of this course, its best to to take the Beginner to
              Advanced course first. The sound and video quality is of a good
              standard. Thank you Cristian. “
            </p> */}
            {/* <Link to="#" className="btn-reply"> */}
              {/* <i className="feather-corner-up-left" />  */}
              {/* <FeatherIcon icon="corner-up-left" />
              Reply
            </Link>
          </div>
        </div> */}
        {/* /Reviews */}   
        <ToastContainer /> 
      </div>
    </>
  );
};

export default OverViewEnrolled;
