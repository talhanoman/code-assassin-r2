import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'universal-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateLectureDuration, UpdateLectureProgressForStudent } from '../../api/post';
import { useNavigate } from 'react-router-dom';

export default function VideoModal({ currentVideo }) {

    const cookie = new Cookies()
    const token = cookie.get('token')

    console.log(currentVideo)

    const navigate = useNavigate()

    const [lectureTotalDuration, setTotalDuration] = useState(0)

    const updateLectureTotalDuration = async (duration) => {

        if (currentVideo.lecture_duration == 0)
        {
            let lectureData = {
                CourseGuid: currentVideo.course_guid,
                LectureGuid: currentVideo.lecture_guid,
                Duration: duration
            }
    
            let response = await UpdateLectureDuration(token, lectureData)
            if (response.status === 200)
            {
    
            }
            else
            {
                navigate('/login')
            }
        }

    }

    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content p-3">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{currentVideo?.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='d-flex mx-auto'>
                            <div class="modal-body">
                                <ReactPlayer url={currentVideo?.lecture_url} playing={true} loop={true} controls={true} 
                                    onDuration={(duration) => {
                                        setTotalDuration(duration)
                                        updateLectureTotalDuration(duration)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
