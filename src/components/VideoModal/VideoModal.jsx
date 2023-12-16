import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'universal-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateLectureDuration, UpdateLectureProgressForStudent } from '../../api/post';
import { useNavigate } from 'react-router-dom';
import { Course11 } from '../imagepath';
export default function VideoModal({ currentVideo }) {

    const cookie = new Cookies()
    const token = cookie.get('token')

    console.log(currentVideo)

    const navigate = useNavigate()

    const [lectureTotalDuration, setTotalDuration] = useState(0)

    const updateLectureTotalDuration = async (duration) => {

        if (currentVideo.lecture_duration == 0) {
            let lectureData = {
                CourseGuid: currentVideo.course_guid,
                LectureGuid: currentVideo.lecture_guid,
                Duration: duration
            }

            let response = await UpdateLectureDuration(token, lectureData)
            if (response.status === 200) {

            }
            else {
                navigate('/login')
            }
        }

    }

    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',
                }}
            >
                <ReactPlayer
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                    width='100%'
                    height='100%'
                    light={<img src={Course11} className='mw-100 mh-100' alt='Thumbnail' />}
                    url={currentVideo?.lecture_url}
                    playing={true}
                    loop={true}
                    controls={true}
                    onDuration={(duration) => {
                        setTotalDuration(duration);
                        updateLectureTotalDuration(duration);
                    }}
                />
            </div>
            <ToastContainer />
        </>
    )
}
