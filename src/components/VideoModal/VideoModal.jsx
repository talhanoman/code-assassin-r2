import React from 'react'
import ReactPlayer from 'react-player'
export default function VideoModal({ currentVideo }) {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{currentVideo?.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ReactPlayer url={currentVideo?.lecture_url} />
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}
