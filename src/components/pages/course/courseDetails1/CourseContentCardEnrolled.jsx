import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import {  Play } from "../../../imagepath";
import { useNavigate } from 'react-router-dom';
import { AssignALecture } from '../../../../api/post';
import Cookies from 'universal-cookie';

export default function CourseContentCardEnrolled({ title, lectures, sample_problems, handleVideoModal }) {
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
                            lectures?.map((obj, index) => (
                                <Lecture title={ sample_problems ? obj.question : obj.lecture_title} level = { sample_problems ? obj.question_difficulty : ' '} index={index} sample_problems = {sample_problems} course_guid = {sample_problems ? '' : obj.course_guid} lecture_guid = {sample_problems ? '' : obj.lecture_guid} handleVideoModal={handleVideoModal} video_url = {obj.lecture_url} />
                            ))
                        }
                    </ul>
                </div>
            </Collapse>
        </div>
    )
}


const Lecture = ({ title, level, index, sample_problems, course_guid, lecture_guid, handleVideoModal, video_url }) => {

    const navigate = useNavigate()

    const cookie = new Cookies()
    const token = cookie.get('token')

    const assignLecture = async (course_guid, lecture_guid, video_url) => {

        console.log({ course_guid, lecture_guid })
        handleVideoModal(video_url, title)
        let courseData = {
            CourseGuid: course_guid,
            VideoGuid: lecture_guid
        }

        let response = await AssignALecture(token, courseData)

        if (response.status === 200)
        {

        }
        else
        {
            navigate('/login')
        }
    }

    return (
        <li>
            <p>
                {
                    sample_problems ? 
                    `${index + 1} ` 
                    :
                    <img src={Play} alt="" className="me-2" />
                }
                {title}
            </p>
            <div>
                {
                    sample_problems ?
                    <p className=''> {level} </p>
                    :
                    <p onClick={() => {assignLecture(course_guid, lecture_guid, video_url)}} className='pe-auto text-decoration-underline'> {'Preview'} </p>
                }
            </div>
        </li>
    )    
}
