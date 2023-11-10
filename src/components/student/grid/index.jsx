import React from "react";
import StudentHeader from "../header";
import Footer from "../../footer";
import {
  LocIcon,
  User1,
  User11,
  User12,
  User13,
  User14,
  User2,
  User3,
  User4,
  User5,
  User6,
} from "../../imagepath";
import { Grid, List } from "react-feather";
import { Link } from "react-router-dom";

export default function StudentsGrid() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Grid1"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item">Students Grid</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Filter */}
              <div className="showing-list">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <div className="view-icons">
                        <Link to="/students-grid" className="grid-view active">
                          <Grid size={19} />
                        </Link>
                        <Link to="/students-list" className="list-view">
                          <List size={19} />
                        </Link>
                      </div>
                      <div className="show-result">
                        <h4>Showing 1-9 of 50 results</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter */}

              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User1}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Charles Dickens</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Iceland</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User2}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Gabriel Palmer</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>France</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User3}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">James Lemire</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Italy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User4}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Olivia Murphy</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Brazil</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User5}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Rebecca Swartz</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Louisiana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User6}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Betty Richards</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Iceland</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User14}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Jeffrey Montgomery</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>United Kingdom</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User11}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Brooke Hayes</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User12}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Gertrude D. Shorter</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Louisiana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User13}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">David L. Garza</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Spain</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User4}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Vivian E. Winders</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Tunisia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box flex-fill">
                    <div className="student-img">
                      <Link to="/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User5}
                        />
                      </Link>
                    </div>
                    <div className="student-content pb-0">
                      <h5>
                        <Link to="/students-profile">Sean K. Leon</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
                    <li className="page-item prev">
                      <Link
                        className="page-link"
                        to="#;"
                       
                      >
                        <i className="fas fa-angle-left"></i>
                      </Link>
                    </li>
                    <li className="page-item first-page active">
                      <Link className="page-link" to="#;">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#;">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#;">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#;">
                        4
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#;">
                        5
                      </Link>
                    </li>
                    <li className="page-item next">
                      <Link className="page-link" to="#;">
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* pagination */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
