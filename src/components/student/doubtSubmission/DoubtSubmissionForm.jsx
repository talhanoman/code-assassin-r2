import React from 'react'
import { Link } from 'react-router-dom'
import FileUploader from '../../FileUploader'
import ReactTagsInput from '../../pages/course/addCourse/tags'
export default function DoubtSubmissionForm() {
    const handleDoubtSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleDoubtSubmit} className="w-100 mx-auto bg-white rounded p-4">
            <h2 className='text-center'>Doubt <span className='text-orange text-decoration-underline'>Submission</span></h2>
            <div className="form-group">
                <label className='text-sm'>Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Doubt Title"
                    required
                />
            </div>
            <div className="form-group">
                <label className='text-sm'>Question Link</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Question Link"
                />
            </div>
            <div className="form-group">
                <label className='text-sm'>Upload File</label>
                <FileUploader />
            </div>
            <div className="form-group">
                <label className='text-sm'>Your Doubt</label>
                <textarea
                    className="form-control"
                    placeholder="Write down here"
                    rows={4}
                    defaultValue={""}
                />
            </div>
            <div className='form-group'>
                <label className='text-sm'>Tags</label>
                <ReactTagsInput />
            </div>
            <div className="d-flex justify-content-center">
                <Link to="#" className="discover-btn">
                    Submit  <i className="fas fa-paper-plane ms-2"></i>
                </Link>
            </div>

        </form>
    )
}
