import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { CiPlay1 } from "react-icons/ci";
export default function ProblemSectionCard({ subsection_title, sample_problems, index, video_url, problem_guid, setCurrentVideo, totalProblems }) {
    // setTotalProblems((s) => s + sample_problems.length)


    return (
        <div className="course-card">
            <h6 className="cou-title">
                <Link style={{
                    fontSize: '12px'
                }} className="collapsed d-flex flex-column justify-content-start bg-white" data-bs-toggle="collapse" to={`#collapse_sub_problem${index}`} aria-controls="example-collapse-text">
                    {subsection_title}
                    <span className='d-block small fw-normal text-secondary py-1'> 0 / {sample_problems.length} </span>
                </Link>
            </h6>

            {/* Progress bar of section */}
            <div id={`collapse_sub_problem${index}`} className="card-collapse collapse" >
                {
                    sample_problems?.map((obj, index) => {
                        return (
                            <Problem title={obj.sample_problem_title} difficulty={obj.sample_problem_difficulty} url={obj.sample_problem_url} video_url={obj.sample_problem_video_url} is_completed={obj.is_completed} setCurrentVideo={setCurrentVideo} totalProblems={totalProblems} />
                        )
                    })
                }
            </div>

        </div>
    )
}


const Problem = ({ title, difficulty, url, video_url, is_completed, setCurrentVideo, totalProblems }) => {
    useEffect(() => {
        totalProblems.current++;
    }, [])
    let sample_video_url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    return (
        <>
            {
                <>
                    <div className='container hovered'>
                        <div className='d-flex mb-3 align-items-center'>
                            <input class="form-check-input hovered" type="checkbox" value="" disabled={is_completed == 1 ? true : false} id="flexCheckDefault" ></input>

                            {/* ms-1 mb-0 */}
                            <Link target='_blank' to={'https://leetcode.com/problems/majority-element/'} className={`underline-on-hover ms-1 mb-0 small fw-bolder ${difficulty === 'Hard' ? 'text-danger' : difficulty === 'Medium' ? 'text-warning' : 'text-success'} `}>
                                {title}
                            </Link>
                            <Button onClick={() => setCurrentVideo({
                                lecture_url: sample_video_url
                            })} className='ms-auto' variant="primary" size="sm">
                                <CiPlay1 />
                            </Button>
                        </div>
                    </div>
                </>
            }
        </>

    )
}
