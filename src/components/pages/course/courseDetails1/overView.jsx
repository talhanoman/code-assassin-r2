import React from "react";
import { Link } from "react-router-dom";
import { Icon1, Icon2, People, Play, User1 } from "../../../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import CourseContentCard from "./CourseContentCard";

const OverView = () => {

  return (
    <>
      <div className="col-lg-8">
        {/* Overview */}
        <div className="card overview-sec">
          <div className="card-body">
            <h5 className="subs-title">Overview</h5>
            <h6>Course Description</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <h6>What you&apos;ll learn</h6>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Become a UX designer.</li>
                  <li>You will be able to add UX designer to your CV</li>
                  <li>Become a UI designer.</li>
                  <li>Build &amp; test a full website design.</li>
                  <li>Build &amp; test a full mobile app.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Learn to design websites &amp; mobile phone apps.</li>
                  <li>You&apos;ll learn how to choose colors.</li>
                  <li>Prototype your designs with interactions.</li>
                  <li>Export production ready assets.</li>
                  <li>All the techniques used by UX professionals</li>
                </ul>
              </div>
            </div>
            <h6>Requirements</h6>
            <ul className="mb-0">
              <li>
                You will need a copy of Adobe XD 2019 or above. A free trial can
                be downloaded from Adobe.
              </li>
              <li>No previous design experience is needed.</li>
              <li className="mb-0">No previous Adobe XD skills are needed.</li>
            </ul>
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
                <h6>92 Lectures 10:56:11</h6>
              </div>
            </div>
            <CourseContentCard />
            <CourseContentCard />
            <CourseContentCard />
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
        <div className="card review-sec">
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
            </p>
            <Link to="#" className="btn-reply">
              {/* <i className="feather-corner-up-left" />  */}
              <FeatherIcon icon="corner-up-left" />
              Reply
            </Link>
          </div>
        </div>
        {/* /Reviews */}    
      </div>
    </>
  );
};

export default OverView;
