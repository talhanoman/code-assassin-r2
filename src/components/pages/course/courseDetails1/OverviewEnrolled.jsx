import React from "react";
import CourseContentCardEnrolled from "./CourseContentCardEnrolled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OverViewEnrolled = ({ courseDetails, course_description, handleVideoModal, handleQuestionModal, viewLecturesAnsSections }) => {

  return (
    <>
      <div className="col-lg-8">
        {/* Overview */}
        <div className="card overview-sec">
          <div className="card-body">
            <h5 className="subs-title">Overview</h5>
            <h6>Course Description</h6>
            <p>
              {course_description}
            </p>

          </div>
        </div>
        {/* /Overview */}
        {/* Course Content */}
        <div className="card content-sec">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h5 className="subs-title">Course Content</h5>
              </div>
              <div className="col-sm-6 text-sm-end">
                <h6>All Lectures</h6>
              </div>
            </div>
            {courseDetails?.map((obj, index) => (
              index != courseDetails.length - 1 ?
                <CourseContentCardEnrolled sectionLength={obj.lectures.length} toast={toast} title={obj.section_title} lectures={obj.lectures} sample_problems={false} handleVideoModal={handleVideoModal} handleQuestionModal={handleQuestionModal} viewLecturesAnsSections={viewLecturesAnsSections} />
                :
                <CourseContentCardEnrolled sectionLength={obj.questions.length} toast={toast} title={'Sample Problems'} lectures={obj.questions} sample_problems={true} handleVideoModal={handleVideoModal} handleQuestionModal={handleQuestionModal} viewLecturesAnsSections={viewLecturesAnsSections} />
            ))
            }
          </div>
        </div>
        {/* /Reviews */}
        <ToastContainer />
      </div>
    </>
  );
};

export default OverViewEnrolled;
