import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import {  Play } from "../../../imagepath";
export default function CourseContentCard() {
    const [open, setOpen] = useState(false);
    return (
        <div className="course-card">
            <h6 className="cou-title">
                <Link className="collapsed" data-bs-toggle="collapse" to="#collapseOne" aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="example-collapse-text">
                    In which areas do you operate?
                </Link>
            </h6>
            <Collapse in={open}>
                <div id="collapseOne" className="card-collapse collapse" style={{}} >
                    <ul>
                        <li>
                            <p>
                                <img src={Play} alt="" className="me-2" />
                                Lecture1.1 Introduction to the User ExperienceCourse
                            </p>
                            <div>
                                <Link to="/course-lesson">Preview</Link>
                                <span>02:53</span>
                            </div>
                        </li>
                        <li>
                            <p>
                                <img src={Play} alt="" className="me-2" />
                                Lecture1.2 Exercise: Your first design challenge
                            </p>
                            <div>
                                <Link to="/course-lesson">Preview</Link>
                                <span>02:53</span>
                            </div>
                        </li>
                        <li>
                            <p>
                                <img src={Play} alt="" className="me-2" />
                                Lecture1.3 How to solve the previous exercise
                            </p>
                            <div>
                                <Link to="/course-lesson">Preview</Link>
                                <span>02:53</span>
                            </div>
                        </li>
                        <li>
                            <p>
                                <img src={Play} alt="" className="me-2" />
                                Lecture1.3 How to solve the previous exercise
                            </p>
                            <div>
                                <Link to="/course-lesson">Preview</Link>
                                <span>02:53</span>
                            </div>
                        </li>
                        <li>
                            <p>
                                <img src={Play} alt="" className="me-2" />
                                Lecture1.5 How to use text layers effectively
                            </p>
                            <div>
                                <Link to="/course-lesson">Preview</Link>
                                <span>02:53</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}
