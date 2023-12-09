import React from 'react'
import {    
    Course11,   
} from "../../imagepath";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CourseStudentCard({ course_guid, course_title, course_description, course_level, course_category, progress, index }) {

    const navigate = useNavigate()

    const GoToCourseDetails = () => {
        navigate('/course-enrolled', {
            state: {
                course_guid: course_guid,
                course_title: course_title,
                course_description: course_description,
                course_level: course_level,
                course_category: course_category
            }
        })
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
            <div className="course-box course-design d-flex ">
                <div className="product">
                    <div className="product-img">
                        <Link>
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
                            <Link>
                                {course_title}
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


                        <div className='d-flex justify-content-between'>
                            <div>
                                <div className='small'>
                                    Lectures Progress: 
                                </div>
                                <div className="progress-stip" style={{ height: '8px' }}>
                                    <div style={{ width: `${progress[index]?.allLectures != 0 ? parseInt((progress[index]?.completedLectures / progress[index]?.allLectures) * 100) : 0}%` }} className="progress-bar bg-success progress-bar-striped">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className='small'>
                                    {progress[index]?.allLectures != 0 ? parseInt((progress[index]?.completedLectures / progress[index]?.allLectures) * 100) : 0}%
                                </span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div>
                                <div className='small'>
                                    Questions Progress: 
                                </div>
                                <div className="progress-stip" style={{ height: '8px' }}>
                                    <div style={{ width: `${ progress[index]?.allQuestions != 0 ? parseInt((progress[index]?.completedQuestions / progress[index]?.allQuestions) * 100) : 0 }%` }} className="progress-bar bg-primary progress-bar-striped">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className='small'>
                                    {progress[index]?.allQuestions != 0 ? parseInt((progress[index]?.completedQuestions / progress[index]?.allQuestions) * 100) : 0}%
                                </span>
                            </div>
                        </div>
            

                        {/* <div className="student-percent"> */}
                            {/* <p>{progress[index]?.completedLectures} / {progress[index]?.allLectures}</p> */}
                        {/* </div> */}
                        <div className="start-leason hoverBlue d-flex align-items-center mt-4">
                            <button
                                onClick={() => {GoToCourseDetails()}}
                                className="btn btn-primary"
                            >
                                View Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
