import React from 'react'
import { Link } from "react-router-dom";
import {  
  Course11,  
} from "../../imagepath";

export default function CourseCard() {
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
                            />
                        </Link>
                    </div>
                    <div className="product-content">
                        <h3 className="title">
                            <Link to="/course-details">
                                Wordpress for Beginners - Master Wordpress
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
                              <div className="progress-bar bg-orange progress-bar-striped active-stip"></div>
                            </div>
                            <div className="student-percent">
                              <p>35% Completed</p>
                            </div>
                        <div className="start-leason d-flex align-items-center">
                            <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                            >
                                Start Lesson
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
