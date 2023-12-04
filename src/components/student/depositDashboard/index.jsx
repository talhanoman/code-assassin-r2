import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { BookSvg, EmptyWalletTick, ReceiptText, User11 } from "../../imagepath";
import StudentHeader from "../../student/header";
import DepositMenu from "../depositMenu";
import StreakCalendar from "../StreakCalendar/StreakCalendar";
import CourseCard from "./CourseCard";
import StreakCalendarYear from "../StreakCalendar/StreakCalendarYear";

export default function StudentDepositDashboard() {
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
          <DepositMenu activeMenu={"Dashboard"} />
        </div>
      </div>
      {/* Enrolled Courses Header */}

      {/* Dashboard Student */}
      <div className="page-content">
        <div className="container">
          <div className="row mb-3">
            <StreakCalendarYear />         
          </div>          
        </div>
      </div>
      {/* Dashboard Student */}
      <Footer />
    </div>
  );
}
