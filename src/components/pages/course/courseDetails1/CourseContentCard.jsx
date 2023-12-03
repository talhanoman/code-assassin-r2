import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import {  Play } from "../../../imagepath";
import { Lock } from "react-feather";

export default function CourseContentCard({ title, lectures }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="course-card">
            <h6 className="cou-title">
                <Link className="collapsed" data-bs-toggle="collapse" to="#collapseOne" aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="example-collapse-text">
                    {title}
                </Link>
            </h6>
            <Collapse in={open}>
                <div id="collapseOne" className="card-collapse collapse" style={{}} >
                    <ul>
                        {
                            lectures?.map((obj) => (
                                <Lecture title={obj.lecture_title}/>
                            ))
                        }
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}


const Lecture = ({ title }) => {
    return (
        <li>
            <p>
                <img src={Play} alt="" className="me-2" />
                {title}
            </p>
            <div>
                <Lock />
            </div>
        </li>
    )    
}
