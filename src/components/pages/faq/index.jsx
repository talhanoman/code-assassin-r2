import React, { useState } from "react";
import PageHeader from "../header";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { Minus, Plus } from "react-feather";

const Faq = () => {



  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);
  const [collapse6, setCollapse6] = useState(false);

  const toggleCollapse = () => setCollapse(!collapse);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);
  const toggleCollapse4 = () => setCollapse4(!collapse4);
  const toggleCollapse5 = () => setCollapse5(!collapse5);
  const toggleCollapse6 = () => setCollapse6(!collapse6);

  return (
    <>
      <div className="main-wrapper">
        <div className="knowledge-sec pt-5">
          <div className="container">
            <div className="header-two-title text-center">
              <h2><span className="text-orange">BEST DECISON</span> OF MY CAREER?</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* Faq */}
                <div className="faq-card" onClick={toggleCollapse}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqone"
                      aria-expanded="true"
                    >
                      What is my return on investment?
                    </Link>
                    {collapse ? <Minus size={18} className="faqicon" /> : <Plus size={18} className="faqicon" />}
                  </h6>
                  <div id="faqone" className={collapse ? "collapse show" : "collapse"}>
                    <div className="faq-detail">
                      <p>
                        At least <span className="fw-bolder">50x</span> your money.
                      </p>

                    </div>
                  </div>
                </div>
                <div className="faq-card" onClick={toggleCollapse2}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqtwo"
                    >
                      Who are the mentors?
                    </Link>
                    {collapse2 ? <Minus size={18} className="faqicon" /> : <Plus size={18} className="faqicon" />}
                  </h6>
                  <div id="faqtwo" className={collapse2 ? "collapse show" : "collapse"}>
                    <div className="faq-detail">
                      <p>
                        Mentors are people from companies like Microsoft, Trilogy, and MakeMyTrip. Senior students from Tier-1 colleges who are expert coders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faq-card" onClick={toggleCollapse3}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqthree"
                    >
                      What DSA problems we will solve?
                    </Link>
                    {collapse3 ? <Minus size={18} className="faqicon" /> : <Plus size={18} className="faqicon" />}
                  </h6>

                  <div id="faqthree" className={collapse3 ? "collapse show" : "collapse"}>
                    <div className="faq-detail">
                      <p>
                        We have 250+ hand-picked problems all topics wise carefully planned, Easy,Medium and Hard.
                      </p>
                      <p>
                        To get you the results the fastest.
                      </p>
                      <p>
                        We also have company-wise previously asked questions.
                      </p>
                    </div>
                  </div>

                </div>
                {/* /Faq */}
                {/* Faq */}
                <div className="faq-card" onClick={toggleCollapse4}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqfour"
                    >
                      How do I get my doubts resolved?
                    </Link>
                    {collapse4 ? <Minus size={18} className="faqicon" /> : <Plus size={18} className="faqicon" />}

                  </h6>

                  <div id="faqfour" className={collapse4 ? "collapse show" : "collapse"}>
                    <div className="faq-detail">
                      <p>
                        We have a team of Teaching Assistants who will be available to resolve your doubts in real time. You can raise query on group and it will be resolved within minutes.
                      </p>
                    </div>
                  </div>

                </div>
                <div className="faq-card" onClick={toggleCollapse5}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqfive"
                    >
                      What if I am from Tier 3 college or if I am from Non-Tech background?
                    </Link>
                    {collapse5 ? <Minus size={18} className="faqicon" /> : <Plus size={18} className="faqicon" />}
                  </h6>

                  <div id="faqfive" className={collapse5 ? "collapse show" : "collapse"}>
                    <div className="faq-detail">
                      <p>
                        Do not need to worry as your skills matter the most. You will be so skilled that college or background won’t matter.
                      </p>
                    </div>
                  </div>

                </div>
                <div className="faq-card" onClick={toggleCollapse6}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqsix"
                    >
                      Can I do this program along with job/college?
                    </Link>
                    {collapse6 ? <Minus size={18} className="faqicon" /> : <Plus size={18} className="faqicon" />}
                  </h6>

                  <div id="faqsix" className={collapse6 ? "collapse show" : "collapse"}>
                    <div className="faq-detail">
                      <p>
                        Yes, you can! Our program is flexible and designed such that students can pursue it as per their schedule.
                      </p>
                      <p>
                        We require a weekly commitment of <span className="fw-bolder">12-18</span> hours per week.
                      </p>
                    </div>
                  </div>

                </div>
                {/* /Faq */}
              </div>
              <div className="col-lg-6">
                <div className="support-wrap">
                  <h5>Have Any Query?</h5>
                  <form action="#" className="w-100">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your first Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Subject"
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Message</label>
                      <textarea
                        className="form-control"
                        placeholder="Write down here"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to="#" className="discover-btn">
                        Send Message  <i className="fas fa-paper-plane ms-2"></i>
                      </Link>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
