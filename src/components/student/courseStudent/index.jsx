import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import {
  User11,
} from "../../imagepath";
import StudentHeader from "../header";
import { Search } from "react-feather";
import Select from "react-select";
import DepositMenu from "../depositMenu";
import CourseStudentCard from "./CourseStudentCard";
import { ViewAllCoursesOfStudent } from "../../../api/get";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default function CourseStudent() {
  
  const cookie = new Cookies()
  const token = cookie.get('token')

  const navigate = useNavigate()

  const [courses, setCourses] = useState([])

  const [progress, setProgress] = useState([])

  useEffect(() => {
    viewAllCourses()
  }, [])

  const TrackCourseProgress = (allCourses) => {
    let allLectures = 0
    let completedLectures = 0

    let allQuestions = 0
    let completedQuestions = 0

    let allProgresses = []

    allCourses?.map((singleCourse, index) => {
      
      allLectures = 0
      completedLectures = 0
      allQuestions = 0
      completedQuestions = 0

      singleCourse?.sections?.map((singleSection, sectionIndex) => {
          sectionIndex != singleCourse.sections.length - 1 ?
          singleSection?.lectures?.map((singleLecture) => {
            if (singleLecture.is_completed == 1)
            {
              completedLectures += 1
            }
            allLectures += 1
          })
          :
          singleSection?.questions?.map((singleLecture) => {
            if (singleLecture.is_completed == 1)
            {
              completedQuestions += 1
            }
            allQuestions += 1
          })
      })

      let oneProgress = {
        index,
        allLectures,
        completedLectures, 
        allQuestions, 
        completedQuestions
      }

      allProgresses.push(oneProgress)

    })

    setProgress(allProgresses)
  }

  const viewAllCourses = async () => {
    let response = await ViewAllCoursesOfStudent(token)
    if (response.status === 200)
    {
      console.log(response.data)
      TrackCourseProgress(response.data)
      setCourses(response.data)
    }
    else
    {
      navigate('/login')
    }
  }
  
  const [setValue] = useState(null);
  const options = [
    { label: "Newly Published", value: "new" },
    { label: "Angular", value: "1" },
    { label: "React", value: "2" },
    { label: "Node", value: "3" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      border: "1px solid #e9ecef",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      color: "black",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };
  return (
    <div className="main-wrapper">
      <StudentHeader />
      <div className="course-student-header">
        <div className="container">
          <div className="student-group">
            <div className="course-group ">
              <div className="course-group-img d-flex">
                <Link to="/students-profile">
                  <img src={User11} alt="" className="img-fluid" />
                </Link>
                <div className="d-flex align-items-center">
                  <div className="course-name">
                    <h4>
                      <Link to="/students-profile">Rolands R</Link>
                      <span>Beginner</span>
                    </h4>
                    <p>Student</p>
                  </div>
                </div>
              </div>
              <div className="course-share ">
                <Link to="/setting-edit-profile" className="btn btn-primary">
                  My Profile
                </Link>
              </div>
            </div>
          </div>
          <DepositMenu activeMenu={"Courses"} />
        </div>
      </div>

      <section className="course-content">
        <div className="container">
          <div className="student-widget">
            <div className="student-widget-group">
              <div className="row">
                <div className="col-lg-12">
                  <div className="showing-list">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="show-filter choose-search-blk">
                          <form action="#">
                            <div className="mycourse-student align-items-center">
                              <div className="student-search">
                                <div className=" search-group">
                                  <Search className="searchFeather" size={16} />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search our courses"
                                  />
                                </div>
                              </div>
                              <div className="student-filter">
                                <div className="form-group select-form mb-0">
                                  <Select
                                    className=" select country-select"
                                    name="sellist1"
                                    options={options}
                                    defaultValue={options[0]}
                                    placeholder="Choose"
                                    onChange={setValue}
                                    styles={style}
                                  ></Select>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {
                      courses?.map((obj, index) => (
                        <CourseStudentCard course_guid={obj?.course?.course_guid} course_title={obj?.course?.course_title} course_description = {obj?.course?.course_description} course_level = {obj?.course?.course_level} course_category = {obj?.course?.course_category} progress={progress} index={index}/>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
