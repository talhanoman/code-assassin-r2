import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import {  Play } from "../../../imagepath";
import { useNavigate } from 'react-router-dom';
import { AssignALecture, UpdateLectureCompletion, AssignAQuestion, UpdateQuestionCompletion } from '../../../../api/post';
import Cookies from 'universal-cookie';

export default function CourseContentCardEnrolled({ sectionLength, title, lectures, sample_problems, handleVideoModal, toast, viewLecturesAnsSections }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="course-card">
            <h6 className="cou-title">
                <Link className="collapsed" data-bs-toggle="collapse" to="#collapseOne" aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="example-collapse-text">
                    {title}
                </Link>
            </h6>

            {/* Progress bar of section */}
            <div>
                <p> 0 / {sectionLength} </p>
            </div>

            <Collapse in={open}>
                <div id="collapseOne" className="card-collapse collapse" style={{}} >
                        {
                            lectures?.map((obj, index) => (
                                <Lecture toast={toast} viewLecturesAnsSections={viewLecturesAnsSections} title={ sample_problems ? obj.question : obj.lecture_title} level = { sample_problems ? obj.question_difficulty : ' '} index={index} sample_problems = {sample_problems} course_guid = {obj.course_guid} lecture_guid = {obj.lecture_guid} sample_question_guid={obj.sample_question_guid} handleVideoModal={handleVideoModal} video_url = {obj.lecture_url} is_completed = {obj.is_completed} lecture_duration = {obj.lecture_duration} video_progress = {obj.video_progress}/>
                            ))
                        }
                </div>
            </Collapse>
        </div>
    )
}


const Lecture = ({ toast, viewLecturesAnsSections, title, level, index, sample_problems, course_guid, lecture_guid, sample_question_guid, handleVideoModal, video_url, is_completed, lecture_duration, video_progress }) => {

    const navigate = useNavigate()

    const cookie = new Cookies()
    const token = cookie.get('token')

    const updateLectureCompletion = async (lecture_guid, is_completed) => {

        if (is_completed === null)
        {
            toast('You will have to preview the lecture first')
        }
        else
        {
            const videoData = {
                VideoGuid: lecture_guid,
                VideoStatus: is_completed == 1 ? 0 : 1
            }
    
            let response = await UpdateLectureCompletion(token, videoData)
            if (response.status === 200) {
                toast('Lecture status updated')
                viewLecturesAnsSections()
            }
        }
    }

    const updateQuestionCompletion = async (question_guid, is_completed) => {

        if (is_completed === null)
        {
            toast('You will have to preview the question first')
        }
        else
        {
            const questionData = {
                SampleQuestionGuid: question_guid,
                SampleQuestionStatus: is_completed == 1 ? 0 : 1
            }
    
            let response = await UpdateQuestionCompletion(token, questionData)
            if (response.status === 200) {
                toast('Question status updated')
                viewLecturesAnsSections()
            }
        }

    }

    const assignLecture = async (course_guid, lecture_guid, video_url, is_completed) => {

        let updated_video_progress = video_progress == null ? 0 : video_progress
        handleVideoModal(video_url, title, is_completed, course_guid, lecture_guid, lecture_duration, updated_video_progress)
        // The video progress will be null first time so need to deal it
        if (is_completed === null)
        {
            let courseData = {
                CourseGuid: course_guid,
                VideoGuid: lecture_guid
            }
    
            let response = await AssignALecture(token, courseData)
    
            if (response.status === 200)
            {
                toast('Lecture assigned to student')
                viewLecturesAnsSections()
            }
            else
            {
                navigate('/login')
            }
        }
    }

    const assignQuestion = async (course_guid, question_guid, is_completed) => {

        if (is_completed === null)
        {
            let questionData = {
                CourseGuid: course_guid,
                SampleQuestionGuid: question_guid
            }
    
            let response = await AssignAQuestion(token, questionData)
    
            if (response.status === 200)
            {
                toast('Question assigned to student')
                viewLecturesAnsSections()
            }
            else
            {
                navigate('/login')
            }
        }
    }

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <p>
                    {
                        sample_problems ?
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={is_completed == 1 ? true : false} onClick={() => {updateQuestionCompletion(sample_question_guid, is_completed)}}></input>
                            <span>{index + 1} </span> 
                        </div>
                        :
                        <div>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={is_completed == 1 ? true : false} onClick={() => {updateLectureCompletion(lecture_guid, is_completed)}}></input>
                            <img src={Play} alt="" className="me-2" />
                        </div>
                    }
                    {title}
                </p>
                <div>
                    {
                        sample_problems ?
                        <p role='button' onClick={() => {assignQuestion(course_guid, sample_question_guid, is_completed)}} className='pe-auto text-decoration-underline'> {'Preview'} </p>
                        :
                        <p role='button' onClick={() => {assignLecture(course_guid, lecture_guid, video_url, is_completed)}} className='pe-auto text-decoration-underline'> {'Preview'} </p>
                    }
                </div>
            </div>

            {
                sample_problems ?
                // Progress bar of sample questions
                <div>
                     {/* <div className="progress-stip">
                         <div className={`progress-bar bg-success progress-bar-striped ${is_completed == 1 ? 'w-100' : ''}`}></div>
                     </div> */}
                 </div>
                :
                // Progress bar of lectures
                <div>
                    <div className="progress-stip">
                        <div style={{ width: `${parseInt((parseInt(video_progress) / parseInt(lecture_duration)) * 100)}%` }} className={`progress-bar bg-success progress-bar-striped`}></div>
                    </div>
                </div>
            }
            <hr></hr>
        </div>
    )    
}
