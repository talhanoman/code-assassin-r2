import React from 'react'
import { Link } from 'react-router-dom';
import {  Course11, Icon1, Icon2, User2 } from "../../../imagepath";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export default function EnrollCourseCard({ course_guid, title, level, price }) {

    const cookie = new Cookies()
    const token = cookie.get('token')
    const navigate = useNavigate()

    const GoToCheckout = () => {
        if (token && token.length > 0)
        {
            navigate('/course-details', {
                state: {
                    course_guid: course_guid
                }
            })
        }
        else
        {
            navigate('/login')
        }
    }
    // const course = {courseGuid, courseName, coursePrice, instructorName};
    // const addToCart = useCartStore((state)=> state.addToCart);
    return (
        <div className="col-lg-4 col-md-6 d-flex">
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
                        <div className="price">
                            <h3>
                                ${price} <span>$999.00</span>
                            </h3>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="course-group d-flex">
                            <div className="course-group-img d-flex">
                                <Link>
                                    <img
                                        src={User2}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="course-name">
                                    <h4>
                                        <Link>Jenis R.</Link>
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
                        <h3 className="title">
                            <Link>
                                {title}
                            </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
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
                        <div className="all-btn all-category d-flex align-items-center">
                            <button onClick={() => {GoToCheckout()}} className="btn btn-primary">
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
