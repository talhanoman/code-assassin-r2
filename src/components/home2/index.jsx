import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Footer2 } from "../footer2";
import Header2 from "../header2/index-two";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Blog1,
  Blog2,
  Blog3,
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
  Courses1,
  Courses2,
  Courses3,
  Courses4,
  Courses5,
  Courses6,
  HomeMain,
  HomeRightBottom,
  Instructor01,
  Instructor02,
  Instructor03,
  Instructor04,
  Joing01,
  Joing02,
  Joing03,
  Joing04,
  Joingus,
  MapUser,
  Pattern1,
  shape1,
  shape2,
  shape3,
  shape4,
  Skill01,
  Skill02,
  Skill03,
  Skill04,
  Skill1,
  Skills01,
  Skills02,
  Skills03,
  SkillsIcon01,
  SkillsIcon02,
  SkillsIcon03,
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
  Curriculum,
  CurriculumTransparent
} from "../imagepath";
import { LeadingCompanies } from "./slider/leadingCompanies";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

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
                  <div className="banner-content">
                    <form
                      className="form"
                      name="store"
                      id="store"
                      method="post"
                      action="course-list"
                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <span className="drop-detail">
                            <Select
                              options={options}
                              value={options.value}
                              defaultValue={options[0]}
                              placeholder="Select Category"
                              onChange={setValue}
                              styles={style}
                            ></Select>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Search School, Online eductional centers, etc"
                          />
                          <button
                            className="btn sub-btn"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
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
              <img className="shapes-one" src={shape1} alt="" />
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
                  <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Step 0 - Fundamentals of coding and Progress Tracking (4 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Step 1 - DSA : Data Structures and Algorithms (16 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Step 2 - Development/Projects (4 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          Step 3 - Getting placed (4 weeks)
                        </button>
                      </h2>
                      <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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
              <div className="col-lg-6 col-sm-12 ps-0">
                <div
                  className="featured-img-1"
                  style={{ backgroundImage: "url(" + Joingus + ")" }}
                ></div>
              </div>
              <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                <div className="joing-group">
                  <div className="section-title">
                    <h2>Preparation Essentials</h2>
                    <div className="joing-section-text">
                      <p className="mb-0">
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.
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
                              Stay motivated with engaging instructors
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-bottom">
                        <div className="joing-header">
                          <span className="joing-icon bg-yellow">
                            <img src={Joing02} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content">
                            <h5 className="joing-title">
                              Keep up with in the latest in cloud
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
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
                              Build skills your way, from labs to courses
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
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
                              Get certified with 100+ certification courses
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
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
        {/* Share Knowledge */}

        {/* Feature Instructors */}
        <div className="feature-instructors-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">New Courses</p>
              <h2>Featured Instructor</h2>
              <div className="header-two-text aos" data-aos="fade-up">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            {/* Featured Instructor */}
            <div className="featured-instructor-two">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor01} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category1} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor-profile">
                            Julian Adrose
                          </Link>
                        </h5>
                        <p>Angular Expert</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>50 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor02} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category2} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor-profile">Gallegos</Link>
                        </h5>
                        <p>Docker</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>70 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor03} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category3} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor-profile">Kristi</Link>
                        </h5>
                        <p>Node Js</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>60 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor04} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category4} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor-profile">Pinero</Link>
                        </h5>
                        <p>Python</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>80 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Featured Instructor */}

            {/* /View all Category */}
            <div className="col-lg-12">
              <div className="more-details text-center" data-aos="fade-up">
                <Link
                  to="/instructor-list"
                  className="discover-btn discover-btn"
                >
                  View all Instructors{" "}
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* /View all Category */}
          </div>
        </div>
        {/* Feature Instructors */}

        {/* Leading Companies */}
        {/* <section className="real-reviews-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">Check out these real reviews</p>
              <h2>Users-love-us Don't take it from us</h2>
              <div className="header-two-text text-center m-auto">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="real-reviews-group">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="reviews-img">
                    <img src={ReviewsImgTwo} alt="" className="img-fluid" />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 col-md-12"
                  data-aos="fade-up"
                >
                  <div className="owl-carousel real-reviews owl-theme">
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3 data-aos="fade-up">William George</h3>
                            <h5 data-aos="fade-up">CEO & Chairman</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3 data-aos="fade-up">Julian Adrose</h3>
                            <h5 data-aos="fade-up">Manager</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3>Gallegos</h3>
                            <h5>CEO & MD</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3>William George</h3>
                            <h5>CEO & Chairman</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                      <div className="owl-nav slide-nav-8 nav-control"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="client-two-carousel">
              <div className="lead-group-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead1} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead2} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead3} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead4} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead5} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <LeadingCompanies />
        {/* Leading Companies */}
        {/* Footer */}
        <Footer2 />
        {/* Footer */}
      </div>
    </>
  );
};
