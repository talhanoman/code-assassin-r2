import React from 'react'
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
import { Link } from 'react-router-dom';
export default function PurchasedCourseCard() {
    return (
        <div className="col-lg-12 col-md-12 d-flex">
            <div className="course-box course-design list-course d-flex ">
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
                                    Wordpress for Beginners - Master Wordpress{" "}
                                    <br /> Quickly
                                </Link>
                            </h3>
                            <div className="all-btn all-category d-flex align-items-center">
                                <Link
                                    to="/view-invoice"
                                    className="btn btn-primary"
                                >
                                    Invoice
                                </Link>
                            </div>
                        </div>
                        <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                            <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="" />
                                <p>10+ Lesson</p>
                            </div>
                            <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="" />
                                <p>7hr 20min</p>
                            </div>
                        </div>
                        <div className="rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star"></i>
                            <span className="d-inline-block average-rating">
                                <span>4.2</span> (15)
                            </span>
                        </div>
                        <div className="course-group d-flex mb-0">
                            <div className="course-group-img d-flex">
                                <Link to="/students-profile">
                                    <img
                                        src={User2}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="course-name">
                                    <h4>
                                        <Link to="/students-profile">Jenis R.</Link>
                                    </h4>
                                    <p>Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
