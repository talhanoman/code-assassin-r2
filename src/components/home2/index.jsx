import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Footer2 } from "../footer2";
import Header2 from "../header2/index-two";
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
  CountFour,
  CountOne,
  CountThree,
  CountTwo,
  HomeMain,
  HomeRightBottom,
  Joing01,
  Joing03,
  Joing04,
  Pattern1,
  shape2,
  shape3,
  shape4,
  Faang,
  google,
  microsoft,
  amazon,
  adobe,
  walmart,
  city,
  flipkart,
  amdocs,
  samsung,
  CurriculumTransparent,
  PreparationIllustration
} from "../imagepath";
import { LeadingCompanies } from "./slider/leadingCompanies";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Faq from "../pages/faq";

const options = [
  { label: "Select Category", value: "Category" },
  { label: "Category One", value: "Category1" },
  { label: "Category Two", value: "Category2" },
];

export const Home2 = () => {
  useEffect(() => {
    document.body.className = "home-two";

    return () => {
      document.body.className = "";
    };
  }, []);

  // Select Option
  const [setValue] = useState(null);
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "white",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      marginTop: "1px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      // borderRadius: "50px" ,
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "2px" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
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

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <Header2 />
        {/* Home banner */}
        <section
          className="home-two-slide d-flex align-items-center"
          style={{ backgroundImage: "url(" + HomeMain + ")" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 col-12" data-aos="fade-up">
                <div className="home-slide-face">
                  <div className="home-slide-text ">
                    {/* <h5>The Leader in Online Learning</h5> */}
                    <h1>BE A SUPER CODER!</h1>
                  </div>                  
                  <div className="trust-user-two">
                    <p>Trusted by over 15K Users worldwide since 2022</p>
                    <div className="rating-two">
                      <span>4.4</span>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shapes  */}
            <div className="shapes">
              {/* <img className="shapes-one" src={shape1} alt="" /> */}
              <img className="shapes-two" src={shape2} alt="" />
              <img className="shapes-middle" src={shape3} alt="" />
              <img
                className="shapes-four wow animate__animated animate__slideInLeft"
                src={shape4}
                alt=""
              />
            </div>
            {/* Shapes */}
          </div>
        </section>
        {/* Home banner */}

        {/* About */}
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 wow fadeInLeft order-lg-1 order-xs-2 order-sm-2"
                data-aos="fade-up"
              >
                <div className="header-two-title">
                  <p className="tagline">Become the SUPER candidate</p>
                  <h2 className="mb-0">
                    Learn from the BEST industry experts
                  </h2>
                </div>
                <div className="header-two-title">
                  <ul className="px-0">
                    <li><i className="fas fa-check-circle orange-checkmark"></i>Dominate EVERY interview with ease</li>
                    <li><i className="fas fa-check-circle orange-checkmark"></i>Know the HIDDEN secrets and shortcuts</li>
                    <li><i className="fas fa-check-circle orange-checkmark"></i>Step-by-Step plan for a GUARANTEED win !</li>
                    <li><i className="fas fa-check-circle orange-checkmark"></i>Small batch = More quality time with mentors</li>
                    <li><i className="fas fa-check-circle orange-checkmark"></i>Top students get referral opportunities.</li>
                    <li><i className="fas fa-check-circle orange-checkmark"></i>Live Whatsapp Group for constant support.</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 order-lg-2 order-xs-1 order-sm-1">
                <div className="stylist-gallery">
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-down"
                    >
                      <div className="about-image count-one d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountOne} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                              <span className="d-flex">
                                Conquer DSA
                              </span>
                            </h4>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-down"
                    >
                      <div className="about-image count-two d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountTwo} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                              <span className="d-flex">
                                AI Essentials
                              </span>
                            </h4>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-right"
                      data-wow-delay="1.5"
                    >
                      <div className="about-image count-three d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountThree} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                              <span className="d-flex">
                                Getting Placed
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-left"
                      data-wow-delay="0.5"
                    >
                      <div className="about-image count-four d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountFour} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                              <span className="d-flex">
                                DEV Mastery
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}

        {/* Favorite Course */}
        <section className="topcategory-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">Favourite Course</p>
              <h2>Top Category</h2>
              <div className="header-two-text">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="top-category-group">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category1} alt="Angular Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Angular Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category2} alt="Python Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Python Development</h3>
                      <p>20 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img
                        className="category3"
                        src={Category3}
                        alt="Node Js Development"
                      />
                    </div>
                    <div className="categories-content">
                      <h3>Node Js Development</h3>
                      <p>120 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category4} alt="PHP Development" />
                    </div>
                    <div className="categories-content">
                      <h3>PHP Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category5} alt="Docker Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Docker Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item  flex-fill">
                    <div className="categories-icon">
                      <img src={Category6} alt="Swift Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Swift Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item  flex-fill">
                    <div className="categories-icon">
                      <img src={Category7} alt="Photography" />
                    </div>
                    <div className="categories-content">
                      <h3>Photography</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex">
                  <div
                    className="categories-item  flex-fill"
                    data-aos="fade-up"
                  >
                    <div className="categories-icon">
                      <img src={Category8} alt="Business" />
                    </div>
                    <div className="categories-content">
                      <h3>Business</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* View All */}
            <div className="col-lg-12">
              <div className="more-details text-center" data-aos="fade-down">
                <Link to="/job-category" className="discover-btn">
                  View all Category <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* View All */}
          </div>
        </section>
        {/* Favorite Course */}

        {/* Feature Course */}

        <section className="featured-courses-sec">
          <div className="patter-one-main">
            <img className="patter-one" src={Pattern1} alt="" />
          </div>
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">Take Initiative</p>
              <h2>Enroll Today</h2>
              <div className="header-two-text m-auto text-center d-block">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            {/* View All Courses */}
            <div className="col-lg-12" data-aos="fade-up">
              <div className="more-details text-center">
                <Link to="/course-details" className="discover-btn">
                  Get Started <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* View All Courses */}
          </div>
        </section>
        {/* Feature Course */}

        {/* Grow up your skill section */}
        <section className="growup-section">
          <div className="home-two-shapes">
            <img src={HomeRightBottom} alt="" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-5 col-12"
                data-aos="fade-right"
              >
                <div className="growup-images-two">
                  <div className="growup-skills-img">
                    <img
                      className="mw-100"
                      src={Faang}
                      alt='Faang'
                      title="image-banner"
                      style={{
                        borderRadius: '24px'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-7 col-12 wow fadeInLeft"
                data-aos="fade-left"
              >
                <div className="header-two-title px-2">
                  <h2>INTERVIEW <span className="text-orange">A TO Z</span></h2>
                  <div className="header-two-text">
                    <p>By the end of this program, you will be 100% confident that you will<br /> clear that interview and land your dream job!</p>
                    <p>You will learn DSA, Resume/CV building, Interview communication<br /> skills, and much more…</p>
                    <p>You’ll be completely equipped with all the information you need to<br /> get that dream job.</p>
                    <p className="mb-0">
                      Tier 3 college? No Coding background? Afraid of coding?
                      <br />– Doesn’t matter.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <ul className="px-0 orange-checkbox-list">
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Personal Mentorship</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Complete Development</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Career Guidance</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Interview Skills</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>AI Essentials</li>

                      </ul>
                      <ul className="px-0 orange-checkbox-list">
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Student Community</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Expert Secrets</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Weekly accountability check</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>Resume/CV building</li>
                        <li><i className="fas fa-check-circle orange-checkmark"></i>4 Projects in CV</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Grow up your skill section */}

        {/* Master Skills */}
        <section className="master-skills-sec">
          <div className="container-fluid">
            <div className="header-two-title text-center" data-aos="fade-up">
              <h2>CURRICULUM <span className="text-orange">IN DETAIL</span></h2>
              <div className="header-two-text" data-aos="fade-up">
                <p className="mb-0">
                  Get certified, master modern tech skills, and level up your
                  career — whether you’re starting out or a seasoned pro. 95% of
                  eLearning learners report our hands-on content directly helped
                  their careers.
                </p>
              </div>
            </div>
            <div className="row bg-gray">
              <div className="col-md-6">
                <div className="p-3">
                  <img src={CurriculumTransparent} className="mw-100 w-full bg-contain" alt="" srcset="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item curriculum-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed curriculum-collapse text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Step 0 - Fundamentals of coding and Progress Tracking (4 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-secondary">
                          <p>You start your journey by creating a progress tracking sheet.<br />Every week on Monday there will be an accountability check for the goals set for the week.</p>
                          <p>Based on your current knowledge of a programming language, you either:</p>
                          <p>a&rang; Continue with Step 0 & Build command over programming fundamentals and then move to Step 1<br />or<br />b&rang; Directly start with Step 1, if you are already good with writing code in any one programming language.</p>
                          <p><span className="text-dark">Topics that will be covered:</span>
                            <ul>
                              <li>Basics of coding</li>
                              <li>If Else Conditions</li>
                              <li>Loops in detail</li>
                              <li>Crazy Pattern Problems</li>
                              <li>Functions in detail</li>
                              <li>All variety of Fundamental problems</li>
                              <li>Time Complexity and Space Complexity</li>
                              <li>1D Arrays/Vectors</li>
                              <li>2D Array/Vectors</li>
                              <li>All variety of Array/Vector problems</li>
                            </ul>
                          </p>
                          <p className="text-dark">Result: After first 4 weeks, you will be confidently coding in any one programming language.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item curriculum-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed curriculum-collapse text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Step 1 - DSA : Data Structures and Algorithms (16 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-secondary">
                          <p>Problem solving in DS & Algo is one of the most important topics to master for a software engineer fresher. That is why we spend the first 4 months of our program ensuring you have solid problem-solving skills in DS & Algo. High Quality live classes with Regular assignment problems, Doubt support, Mock interviews & Competitive contests make sure you develop strong problem solving muscles.</p>
                          <p>
                            <span className="text-dark">Topics that will be covered:</span>
                            <ul>
                              <li>Time and Space Complexity </li>
                              <li>Arrays(DS) + 2 Pointer technique(Algo)</li>
                              <li>Sliding window (Algo)</li>
                              <li>Binary Search (Algo)</li>
                              <li>Recursion (Algo+Technique)</li>
                              <li>Strings (DS)</li>
                              <li>Linked Lists (DS)</li>
                              <li>Stacks and Queues (DS)</li>
                              <li>Hashing Maps (DS)</li>
                              <li>Trees (DS)</li>
                              <li>Priority Queues (DS)</li>
                              <li>Dynamic Programming (DS + Algos)</li>
                              <li>Graphs (DS + Algos)</li>
                              <li>Sorting (Algo)</li>
                              <li>Classes Concept (DS)</li>
                              <li>STL – Standard template library (Shortcuts)</li>
                            </ul>
                          </p>
                          <p className="text-dark">Result: After these 4 months, you will be able to solve medium to hard-level problems of every topic of DS & Algo, with confidence.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item curriculum-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed curriculum-collapse text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Step 2 - Development/Projects (4 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-secondary">
                          <p>As a fresher, companies focus on your development skills and check what type of development experience you have.<br />Do you have what it takes to work in a team, collaborate using Git, understand new technology, and use it?</p>
                          <p>In our curriculum, we do:<br />Full Stack Development = Frontend + Backend</p>
                          <p><span className="text-dark">Topics that will be covered:</span>
                            <ul>
                              <li>Basics of internet</li>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JavaScript basics</li>
                              <li>Functions and callbacks</li>
                              <li>The world of DOM events</li>
                              <li>Async Javascript</li>
                              <li>Mastering Terminal</li>
                              <li>React</li>
                              <li>Building a server</li>
                              <li>MVC</li>
                              <li>Web Architecture</li>
                              <li>Node.js</li>
                              <li>Backend Architecture</li>
                              <li>Building API</li>
                              <li>Learning Express</li>
                              <li>RESTful routing</li>
                              <li>No-SQL Database</li>
                              <li>SQL vs No-SQL</li>
                              <li>Mongo DB design</li>
                              <li>Database Queries</li>
                              <li>Integrating everything together</li>
                            </ul>
                          </p>
                          <p><span className="text-dark">Projects:</span>
                            <ul>
                              <li>Snake Game(front-end)</li>
                              <li>Stone paper scissor Game(front-end)</li>
                              <li>Live weather updates app (back-end)</li>
                              <li>Full Stack Blog website with features of comments, sharing and post blog (complete CRUD)</li>
                            </ul>
                          </p>
                          <p><span className="text-dark">Bonus Content:</span>
                            <ul>
                              <li>Introduction to Version Contuol with <span className="text-dark">Git and GitHub</span> </li>
                              <li>Collaborative Development Practices using Git</li>
                              <li>How to put your project on CV and host it on the internet 🌐.</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item curriculum-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed curriculum-collapse text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          Step 3 - Getting placed (4 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-secondary">
                          <p>Once you become the super candidate, it is crucial we focus on getting you interview opportunities.
                            <br />
                            How to minimize chances of rejection once the interview is scheduled.</p>
                          <p><span className="text-dark">Placement Support Includes:</span>
                            <ul>
                              <li>Resume Creation</li>
                              <li>CV Reviews</li>
                              <li>Mock Interviews</li>
                              <li>Pre interview checklist + sessions (Dos and Don'ts)</li>
                            </ul>
                          </p>
                          <p><span className="text-dark">Technical Interview Guidelines:</span>
                            <ul>
                              <li>How to prepare an impactful introduction</li>
                              <li>Correct way to explain projects in a structured manner</li>
                              <li>Mock Interviews</li>
                              <li>Correct way to explain DSA problems step-by-step</li>
                            </ul>
                          </p>
                          <p><span className="text-dark">How to handle HR round questions related to:</span>
                            <ul>
                              <li>Background</li>
                              <li>Career Goals</li>
                              <li>Teamwork and Leadership</li>
                              <li>Situation-Based</li>
                              <li>Strengths and Weaknesses</li>
                              <li>Salary and Benefits</li>
                              <li>Questions for the Interviewer</li>
                            </ul>
                          </p>
                          <p className="text-dark">Result: You getting placed at one of the top tech product-based companies like Google, Microsoft, Amazon, Samsung etc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Master Skills */}

        {/* Testimonials */}
        <section className="testimonial-sec">
          <div className="container">
            <div className="testimonial-subhead-two">
              <div
                className="col-xl-8 col-lg-10 col-md-10 mx-auto"
                data-aos="fade-down"
              >
                <div className="testimonial-inner">
                  <div className="header-two-title testimonial-head-two text-center">
                    <h2 data-aos="fade-down">
                      Our ACADEMICS ARE <span>PLACED</span> AT
                    </h2>
                  </div>

                </div>
              </div>
            </div>
            <div className="testimonial-two-img">
              {/* 1st Row */}
              <div className="row align-items-center justify-items-center text-center">
                <div className="col">
                  <img src={google} height={'37.91px'} width={'101.63px'} alt="" />
                </div>
                <div className="col">
                  <img src={microsoft} height={'28.58px'} width={'110.88px'} alt="" className="w-full" srcset="" />
                </div>
                <div className="col">
                  <img src={amazon} alt="" className="w-full" height={'36.95px'} width={'101.63px'} srcset="" />

                </div>
                <div className="col">
                  <img src={adobe} alt="" className="w-full" height={'28.27px'} width={'110.88px'} srcset="" />

                </div>
                <div className="col">
                  <img src={walmart} alt="" className="w-full" height={'39.5px'} width={'92.39px'} srcset="" />

                </div>
              </div>
              {/* Second Row Row */}
              <div className="row align-items-center justify-items-center text-center mt-5">
                <div className="col">
                  <img src={city} alt="" className="w-full" height={'55.89px'} width={'68.44px'} srcset="" />
                </div>
                <div className="col">
                  <img src={flipkart} alt="" className="w-full" height={'52px'} width={'118px'} srcset="" />
                </div>
                <div className="col">
                  <img src={amdocs} alt="" className="w-full" height={'68.44px'} width={'55.89px'} srcset="" />
                </div>
                <div className="col">
                  <img src={samsung} alt="" className="w-full" height={'23px'} width={'141.49px'} srcset="" />
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Testimonials */}


        {/* Share Knowledge */}
        <div className="knowledge-sec">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 ps-0 text-center">
                <img src={PreparationIllustration} alt="Illustration Preparation" />
              </div>
              <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                <div className="joing-group">
                  <div className="section-title">
                    <h2>Preparation Essentials</h2>
                    <div className="joing-section-text">
                      <p className="mb-0">
                        Elevate your interview readiness with our comprehensive suite of resources. From an accountability check to ensure you stay on track, handpicked questions tailored to your field, to simulated mock interviews – we've got you covered for a confident and successful interview experience.
                      </p>
                    </div>
                  </div>
                  <div className="joing-list">
                    <ul>
                      <li data-aos="fade-bottom">
                        <div className="joing-header">
                          <span className="joing-icon bg-blue">
                            <img src={Joing01} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content">
                            <h5 className="joing-title">
                              Handpicked Questions
                            </h5>
                            <div className="joing-para">
                              <p>
                                We have the best-handpicked questions you need to practice.
                              </p>

                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-bottom">
                        <div className="joing-header">
                          <span className="joing-icon bg-green">
                            <img src={Joing03} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content aos">
                            <h5 className="joing-title">
                              Accountability Check
                            </h5>
                            <div className="joing-para">
                              <p>
                                We will analyze your progress each week.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-bottom" className="mb-0">
                        <div className="joing-header">
                          <span className="joing-icon bg-orange">
                            <img src={Joing04} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content aos">
                            <h5 className="joing-title">
                              Mock Interviews
                            </h5>
                            <div className="joing-para">
                              <p>
                                Monthly mock interviews scheduled for practice.
                              </p>

                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faq />
        {/* Share Knowledge */}

        <LeadingCompanies />
        {/* Leading Companies */}
        {/* Footer */}
        <Footer2 />
        {/* Footer */}
      </div>
    </>
  );
};
