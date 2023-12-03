import React from 'react'
import {    
    Course11,   
} from "../../imagepath";
import { Link } from 'react-router-dom';
export default function CourseStudentCard() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
            <div className="course-box course-design d-flex ">
                <div className="product">
                    <div className="product-img">
                        <Link to="/course-details">
                            <img
                                className="img-fluid"
                                alt=""
                                src={Course11}
                                height={'203px'}
                                width={'271px'}
                            />
                        </Link>
                    </div>
                    <div className="product-content">
                        <h3 className="title">
                            <Link to="/course-details">
                                Web Dev for Beginners - Master Web Dev
                                Quickly
                            </Link>
                        </h3>
                        <div className="rating-student">
                            <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                    <span>4.0</span>{" "}
                                </span>
                            </div>
                            <div className="edit-rate">
                                <Link to="#;">Edit rating</Link>
                            </div>
                        </div>
                        <div className="progress-stip">
                            <div className="progress-bar bg-success progress-bar-striped "></div>
                        </div>
                        <div className="student-percent">
                            <p>0% Completed</p>
                        </div>
                        <div className="start-leason hoverBlue d-flex align-items-center">
                            <Link
                                to="/course-enrolled"
                                className="btn btn-primary"
                            >
                                View Course
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
