import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { IoCloseSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';

export default function QuestionModal({ currentQuestion, setCurrentQuestion }) {

    return (
        <>
            <div className='row mx-auto card position-relative'>

                <div class="card-body col-md-12">
                    <div class="position-absolute top-0 start-0 translate-middle px-1 border bg-white shadow-lg hovered rounded-circle" onClick={() => setCurrentQuestion(null)} >
                        <IoCloseSharp className='rounded-circle' />
                    </div>
                    <div>
                        {
                            currentQuestion?.question_difficulty === 'Medium'
                            &&
                            <section className='small'>
                                Question difficulty: <span className='badge bg-warning'> {currentQuestion?.question_difficulty}</span>
                            </section>
                        }
                        {
                            currentQuestion?.question_difficulty === 'Low'
                            &&
                            <section className='small'>
                                Question difficulty: <span className='badge bg-primary'> {currentQuestion?.question_difficulty}</span>
                            </section>
                        }
                    </div>
                    <hr />
                    <div className='small text-secondary'>
                        {currentQuestion?.question_description}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
