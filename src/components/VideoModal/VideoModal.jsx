import React from 'react'
import ReactPlayer from 'react-player'
import { UpdateLectureCompletion } from '../../api/post'
import Cookies from 'universal-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VideoModal({ currentVideo }) {

    const cookie = new Cookies()
    const token = cookie.get('token')

    const updateLectureCompletion = async () => {

        const videoData = {
            VideoGuid: currentVideo.lecture_guid,
            VideoStatus: currentVideo.is_completed == 1 ? 0 : 1
        }

        let response = await UpdateLectureCompletion(token, videoData)
        if (response.status === 200)
        {
            toast('Status updated')
        }
    }

    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{currentVideo?.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='d-flex'>
                            <div class="modal-body">
                                <ReactPlayer url={currentVideo?.lecture_url} playing={true} loop={true} controls={true} />
                            </div>
                            <div className='me-2 mt-3'>
                                <button onClick={() => {updateLectureCompletion()}} type="button" class="btn btn-info">{currentVideo?.is_completed == 1 ? 'Mark as uncomplete' : 'Mark as complete'}</button>
                            </div>                    
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
