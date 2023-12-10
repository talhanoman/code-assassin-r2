import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { IoCloseSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function QuestionModal({ currentQuestion, setCurrentQuestion }) {
    const [show, setShow] = useState(currentQuestion !== null ? true : false);

    const handleClose = () => setCurrentQuestion(null);
    const handleShow = () => setShow(true);
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
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
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='text-secondary text-start small'>
                    {currentQuestion?.question_description}
                </Offcanvas.Body>
            </Offcanvas>
            <ToastContainer />
        </>
    )
}
