import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

export default function ProblemSectionCard({ subsection_title, sample_problems, index }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="course-card bg-primary">
            <h6 className="cou-title">
                <Link className="collapsed d-flex flex-column justify-content-start" data-bs-toggle="collapse" to={`#collapse${index}`} aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="example-collapse-text">
                    {subsection_title}
                    <span className='d-block small fw-normal text-secondary py-1'> 0 / 2 </span>
                </Link>
            </h6>

            {/* Progress bar of section */}

            <Collapse in={open}>
                <div id={`collapse${index}`} className="card-collapse collapse" >
                    {
                        sample_problems?.map((obj, index) => {                          
                            return (
                                <Problem title={obj.sample_problem_title} difficulty = {obj.sample_problem_difficulty} url = {obj.sample_problem_url} video_url = {obj.sample_problem_video_url} is_completed = {obj.is_completed}/>
                            )
                        })
                    }
                </div>
            </Collapse>
        </div>
    )
}


const Problem = ({ title, difficulty, url, video_url, is_completed }) => {

    return (
        <>
            {
                <>
                    <div className='container hovered'>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <input class="form-check-input hovered" type="checkbox" value="" disabled={is_completed == 1 ? true : false} id="flexCheckDefault" ></input>
                                <span className='ms-1 small'>{title}</span>
                            </div>

                            <div>
                                <span> Solution </span>
                            </div>
                        </div>

                        <hr></hr>
                    </div>
                </>
            }
        </>

    )
}
