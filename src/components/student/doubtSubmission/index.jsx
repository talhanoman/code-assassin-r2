import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
// import { User11 } from "../../imagepath";
import { ManInDoubt, User11 } from "../../imagepath";
// import StudentHeader from "../../student/header";
import StudentHeader from "../header";
// import DepositMenu from "../depositMenu";
import DepositMenu from "../depositMenu";
import DoubtSubmissionForm from "./DoubtSubmissionForm";

export default function DoubtSubmission() {
  return (
    <div className="main-wrapper">
      <StudentHeader />
      {/* Enrolled Courses Header */}
      <div className="course-student-header">
        <div className="container">
          <div className="student-group">
            <div className="course-group ">
              <div className="course-group-img d-flex">
                <Link to="/students-profile">
                  <img src={User11} alt="" className="img-fluid" />
                </Link>
                <div className="d-flex align-items-center">
                  <div className="course-name">
                    <h4>
                      <Link to="/students-profile">Rolands R</Link>
                      <span>Beginner</span>
                    </h4>
                    <p>Student</p>
                  </div>
                </div>
              </div>
              <div className="course-share ">
                <Link to="/setting-edit-profile" className="btn btn-primary">
                  My Profile
                </Link>
              </div>
            </div>
          </div>
          <DepositMenu activeMenu={"Doubt Submission"} />
        </div>
      </div>
      {/* Enrolled Courses Header */}

      {/* Dashboard Student */}
      <div className="page-content">
        <div className="container">
          <div className="row mb-3 align-items-stretch bg-white">
            <div className="col-xl-6 col-md-12 rounded">
              {/* <StreakCalendar /> */}
             <img src={ManInDoubt} alt="" className="mh-100 mw-100" />
            </div>
            <div className="col-xl-6 col-md-12 rounded align-self-center">
              {/* <StreakCalendar /> */}
              <DoubtSubmissionForm />
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard Student */}
      <Footer />
    </div>
  );
}
