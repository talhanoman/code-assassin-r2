import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { Blog1, Blog2, Blog3 } from "../../../imagepath";
import Select from "react-select";
import { Link } from "react-router-dom";
import Footer from "../../../footer";
import StudentHeader from "../../../student/header";
import EnrollCourseCard from "./EnrollCourseCard";
import EnrollCourseListCard from "./EnrollCourseListCard";
import { ViewAllCourses } from "../../../../api/get";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseGrid = () => {
  const customStyles = {
    option: (base, { isFocused }) => {
      return {
        ...base,
        backgroundColor: isFocused ? "#FFDEDA" : "white",
      };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
      transition: '300ms',
    }),
  };

  useEffect(() => {
    viewAllCourses()
  }, [])

  const viewAllCourses = async () => {
    let response = await ViewAllCourses()
    if (response.status === 200)
    {
      setCourses(response.data)
    }
    else
    {
      toast(response.message)
    }
  }

  const option = [
    { label: "Newly published", value: "Newly published" },
    { label: "published 1", value: "published 1" },
    { label: "published 2", value: "published 2" },
    { label: "published 3", value: "published 3" },
  ];

  const [input, setInput] = useState(null);

  const [view, setView] = useState('Grid');

  const [courses, setCourses] = useState([])

  return (
    <>
      <div className="main-wrapper">
        <StudentHeader activeMenu={"Enroll"} />
        <section className="course-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {/* Filter */}
                <div className="showing-list">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <div className="view-icons">
                          <Link to="#" onClick={()=> setView("Grid")} className={`grid-view ${view === 'Grid' && 'active'} `}>
                            {/* <i className="feather-grid" /> */}
                            <FeatherIcon icon="grid" />
                          </Link>
                          <Link to="#" onClick={()=> setView("List")} className={`list-view ${view === 'List' && 'active'} `}>
                            {/* <i className="feather-list" /> */}
                            <FeatherIcon icon="list" />
                          </Link>
                        </div>
                        <div className="show-result">
                          <h4>Showing 1-9 of 50 results</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="show-filter add-course-info">
                        <form action="#">
                          <div className="row gx-2 align-items-center">
                            <div className="col-md-6 col-item">
                              <div className=" search-group">
                                <i className="feather-search">
                                  <FeatherIcon icon="search" />
                                </i>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search our courses"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-item">
                              <div className="form-group select-form mb-0">
                                <Select
                                  options={option}
                                  defaultValue={input}
                                  onChange={setInput}
                                  placeholder="Newly Published"
                                  styles={customStyles}
                                ></Select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Filter */}
                {
                  view === 'Grid' ?
                  // courseName, coursePrice, instructorName
                    <div className="row">
                      {
                        courses?.map((obj) => (
                          <EnrollCourseCard course_guid = {obj.course_guid} title={obj.course_title} level = {obj.course_level} price = {obj.course_price}/>
                        ))
                      }
                    </div>
                    :
                    <div className="row">
                      {
                        courses?.map((obj) => (
                          <EnrollCourseListCard course_guid = {obj.course_guid} title={obj.course_title} level = {obj.course_level} price = {obj.course_price}/>
                        ))
                      }
                    </div>
                }
                {/* Row */}

              </div>
              <div className="col-lg-3 theiaStickySidebar">
                <div className="stickysidebar">
                  <div className="filter-clear">
                    <div className="clear-filter d-flex align-items-center">
                      <h4>
                        {/* <i className="feather-filter" /> */}
                        <FeatherIcon icon="filter" />
                        Filters
                      </h4>
                      <div className="clear-text">
                        <p>CLEAR</p>
                      </div>
                    </div>
                    {/* Search Filter */}
                    <div className="card search-filter">
                      <div className="card-body">
                        <div className="filter-widget mb-0">
                          <div className="categories-head d-flex align-items-center">
                            <h4>Course categories</h4>
                            <i className="fas fa-angle-down" />
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Backend (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> CSS (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Frontend (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked="true"
                              />
                              <span className="checkmark" /> General (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked="true"
                              />
                              <span className="checkmark" /> IT &amp; Software
                              (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Photography (2)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Programming
                              Language (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Technology (2)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Search Filter */}
                    {/* Search Filter */}
                    <div className="card search-filter">
                      <div className="card-body">
                        <div className="filter-widget mb-0">
                          <div className="categories-head d-flex align-items-center">
                            <h4>Instructors</h4>
                            <i className="fas fa-angle-down" />
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Keny White (10)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Hinata Hyuga (5)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> John Doe (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check mb-0">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked="true"
                              />
                              <span className="checkmark" /> Nicole Brown
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Search Filter */}
                    {/* Search Filter */}
                    <div className="card search-filter ">
                      <div className="card-body">
                        <div className="filter-widget mb-0">
                          <div className="categories-head d-flex align-items-center">
                            <h4>Price</h4>
                            <i className="fas fa-angle-down" />
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="radio" name="select_specialist" />
                              <span className="checkmark" /> All (18)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="radio" name="select_specialist" />
                              <span className="checkmark" /> Free (3)
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one mb-0">
                              <input
                                type="radio"
                                name="select_specialist"
                                defaultChecked="true"
                              />
                              <span className="checkmark" /> Paid (15)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Search Filter */}
                    {/* Latest Posts */}
                    <div className="card post-widget ">
                      <div className="card-body">
                        <div className="latest-head">
                          <h4 className="card-title">Latest Courses</h4>
                        </div>
                        <ul className="latest-posts">
                          <li>
                            <div className="post-thumb">
                              <Link to="/course-details">
                                <img className="img-fluid" src={Blog1} alt="" />
                              </Link>
                            </div>
                            <div className="post-info free-color">
                              <h4>
                                <Link to="/course-details">
                                  Introduction LearnPress – LMS plugin
                                </Link>
                              </h4>
                              <p>FREE</p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link to="/course-details">
                                <img className="img-fluid" src={Blog2} alt="" />
                              </Link>
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link to="/course-details">
                                  Become a PHP Master and Make Money
                                </Link>
                              </h4>
                              <p>$200</p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link to="/course-details">
                                <img className="img-fluid" src={Blog3} alt="" />
                              </Link>
                            </div>
                            <div className="post-info free-color">
                              <h4>
                                <Link to="/course-details">
                                  Learning jQuery Mobile for Beginners
                                </Link>
                              </h4>
                              <p>FREE</p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link to="/course-details">
                                <img className="img-fluid" src={Blog1} alt="" />
                              </Link>
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link to="/course-details">
                                  Improve Your CSS Workflow with SASS
                                </Link>
                              </h4>
                              <p>$200</p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb ">
                              <Link to="/course-details">
                                <img className="img-fluid" src={Blog2} alt="" />
                              </Link>
                            </div>
                            <div className="post-info free-color">
                              <h4>
                                <Link to="/course-details">
                                  HTML5/CSS3 Essentials in 4-Hours
                                </Link>
                              </h4>
                              <p>FREE</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Latest Posts */}
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CourseGrid;
