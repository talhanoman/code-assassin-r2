import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QuestionModal({ currentQuestion }) {

    return (
        <>
            <div className='d-flex mx-auto'>
                <div class="modal-body">
                    <div>
                        Question difficulty: {currentQuestion?.question_difficulty}
                    </div>

                    <div>
                        {currentQuestion?.question_description}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
