import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import {
  Course10,
  Course11,
  Course12,
  Icon1,
  Icon2,
  User1,
  User11,
  User2,
  User3,
} from "../../imagepath";
import { Link } from "react-router-dom";
// import CourseMenu from "../courseMenu";
import DepositMenu from "../depositMenu";
import PurchasedCourseCard from "./PurchasedCourseCard";

export default function PurchaseHistory() {
  return (
    <div className="main-wrapper">
      <StudentHeader />

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
          <DepositMenu activeMenu={"Purchase History"} />
        </div>
      </div>

      <section className="course-content purchase-widget">
        <div className="container">
          <div className="student-widget">
            <div className="student-widget-group">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <PurchasedCourseCard />
                    <PurchasedCourseCard />
                    <PurchasedCourseCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
