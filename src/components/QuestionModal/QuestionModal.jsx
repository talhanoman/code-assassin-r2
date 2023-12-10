import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function QuestionModal({ currentQuestion, setCurrentQuestion }) {
    const handleClose = () => setCurrentQuestion(null);
    return (
        <>
            <Offcanvas show={currentQuestion} onHide={handleClose}>
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
        </>
    )
}
