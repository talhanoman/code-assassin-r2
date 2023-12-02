import React from 'react'
import { Link } from 'react-router-dom'
import { Course11, Icon1, Icon2, User2 } from "../../../imagepath";
export default function EnrollCourseListCard() {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 d-flex">
                <div className="course-box course-design list-course d-flex">
                    <div className="product">
                        <div className="product-img">
                            <Link to="/course-details">
                                <img
                                    className="img-fluid"
                                    alt=""
                                    src={Course11}
                                />
                            </Link>
                            <div className="price">
                                <h3>
                                    $300 <span>$99.00</span>
                                </h3>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="head-course-title">
                                <h3 className="title">
                                    <Link to="/course-details">
                                        Sketch from A to Z (2022): Become an app designer
                                    </Link>
                                </h3>
                                <div className="all-btn all-category d-flex align-items-center">
                                    <Link to="/checkout" className="btn btn-primary">
                                        BUY NOW
                                    </Link>
                                </div>
                            </div>
                            <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                    <img src={Icon1} alt="" />
                                    <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                    <img src={Icon2} alt="" />
                                    <p>9hr 30min</p>
                                </div>
                            </div>
                            <div className="rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                    <span>4.0</span> (15)
                                </span>
                            </div>
                            <div className="course-group d-flex mb-0">
                                <div className="course-group-img d-flex">
                                    <Link to="/instructor-profile">
                                        <img
                                            src={User2}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="course-name">
                                        <h4>
                                            <Link to="/instructor-profile">Jesse Stevens</Link>
                                        </h4>
                                        <p>Instructor</p>
                                    </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                    <Link to="#">
                                        <i className="fa-regular fa-heart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
