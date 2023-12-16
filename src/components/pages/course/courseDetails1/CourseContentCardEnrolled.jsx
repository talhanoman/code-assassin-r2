import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useNavigate } from 'react-router-dom';
import { AssignALecture, UpdateLectureCompletion, AssignAQuestion, UpdateQuestionCompletion } from '../../../../api/post';
import Cookies from 'universal-cookie';
import ProblemSectionCard from './ProblemSectionCard';

export default function CourseContentCardEnrolled({ sectionLength, title, lectures, problems, sample_problems, handleVideoModal, handleQuestionModal, toast, viewLecturesAnsSections, index }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="course-card">
            <h6 className="cou-title">
                <Link className="collapsed d-flex flex-column justify-content-start" data-bs-toggle="collapse" to={`#collapse${index}`} aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="example-collapse-text">
                    {title}
                    <span className='d-block small fw-normal text-secondary py-1'> 0 / {sectionLength} </span>
                    <div>
                        <div className="progress-stip my-1" style={{
                            height: '6px'
                        }}>
                            <div style={{ width: '60%' }} className={`progress-bar bg-success progress-bar-striped`}></div>
                        </div>
                    </div>
                </Link>

            </h6>

            {/* Progress bar of section */}

            <Collapse in={open}>
                <div id={`collapse${index}`} className="card-collapse collapse" >
                    {
                        lectures?.map((obj, index) => {
                            return (
                                <Lecture handleQuestionModal={handleQuestionModal} toast={toast} viewLecturesAnsSections={viewLecturesAnsSections} title={sample_problems ? obj.question : obj.lecture_title} level={sample_problems ? obj.question_difficulty : ' '} question_description={sample_problems ? obj.question_description : ' '} index={index} sample_problems={sample_problems} course_guid={obj.course_guid} lecture_guid={obj.lecture_guid} sample_question_guid={obj.sample_question_guid} handleVideoModal={handleVideoModal} video_url={obj.lecture_url} is_completed={obj.is_completed} lecture_duration={obj.lecture_duration} video_progress={obj.video_progress} />
                            )
                        })
                    }
                    <div className='px-4'>
                        {
                            problems?.map((obj, index) => {
                                return (
                                    <ProblemSectionCard subsection_title={obj.sample_problem_section_title} sample_problems={obj.sampleProblems} index={index} />
                                )
                            })
                        }
                    </div>
                </div>

            </Collapse>
        </div>
    )
}


const Lecture = ({ handleQuestionModal, toast, viewLecturesAnsSections, title, level, question_description, index, sample_problems, course_guid, lecture_guid, sample_question_guid, handleVideoModal, video_url, is_completed, lecture_duration, video_progress }) => {
    const assignLecture = async (course_guid, lecture_guid, video_url, is_completed) => {

        let updated_video_progress = video_progress == null ? 0 : video_progress
        handleVideoModal(video_url, title, is_completed, course_guid, lecture_guid, lecture_duration, updated_video_progress)
        // The video progress will be null first time so need to deal it
        if (is_completed === null) {
            let courseData = {
                CourseGuid: course_guid,
                VideoGuid: lecture_guid
            }

            let response = await AssignALecture(token, courseData)

            if (response.status === 200) {
                toast('Lecture assigned to student')
                viewLecturesAnsSections()
            }
            else {
                navigate('/login')
            }
        }
    }

    // if(index === 0)
    // {
    //     assignLecture(course_guid, lecture_guid , video_url, is_completed)
    // }
    const navigate = useNavigate()

    const cookie = new Cookies()
    const token = cookie.get('token')

    const updateLectureCompletion = async (lecture_guid, is_completed) => {

        if (is_completed === null) {
            toast('You will have to preview the lecture first')
        }
        else {
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

        if (is_completed === null) {
            toast('You will have to preview the question first')
        }
        else {
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



    const assignQuestion = async (course_guid, question_guid, is_completed) => {

        handleQuestionModal(course_guid, question_guid, is_completed, title, question_description, level)

        if (is_completed === null) {
            let questionData = {
                CourseGuid: course_guid,
                SampleQuestionGuid: question_guid
            }

            let response = await AssignAQuestion(token, questionData)

            if (response.status === 200) {
                toast('Question assigned to student')
                viewLecturesAnsSections()
            }
            else {
                navigate('/login')
            }
        }
    }

    return (
        <>
            {
                <>
                    <div className='container hovered' onClick={() => { assignLecture(course_guid, lecture_guid, video_url, is_completed) }}>
                        <div className='d-flex justify-content-between'>
                            <div >
                                <span className='ms-1 small'>{title}</span>
                            </div>

                        </div>
                        <div>
                            <div className="progress-stip my-1 ms-4" style={{
                                height: '6px'
                            }}>
                                <div style={{ width: `${parseInt((parseInt(video_progress) / parseInt(lecture_duration)) * 100)}%` }} className={`progress-bar bg-success progress-bar-striped`}></div>
                            </div>
                        </div>

                        <hr></hr>
                    </div>
                </>
            }
        </>

    )
}
