import React, { useState } from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import Select from "react-select";

export default function StudentPrivacy() {
  const [setPrivacy] = useState(null);
  const options = [
    { label: "Choose", value: "choose" },
    { label: "Privacy level 1", value: "1" },
    { label: "Privacy level 2", value: "2" },
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
      <StudentHeader activeMenu={"Privacy"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"Privacy"} />
            {/* sidebar */}

            {/* Profile Privacy */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Profile Privacy Settings</h3>
                    <p>
                      Making your profile public allow other users to see what
                      you have been learning on Geeks.
                    </p>
                  </div>
                  <div className="checkout-form personal-address add-course-info border-line">
                    <div className="personal-info-head">
                      <h4>Privacy levels</h4>
                      <p>Show your profile public and private.</p>
                    </div>
                    <form action="#">
                      <div className="new-address">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mb-0">
                              <label className="form-label">
                                Privacy levels
                              </label>

                              <Select
                                className=" select country-select"
                                name="sellist1"
                                options={options}
                                defaultValue={options[0]}
                                placeholder="Choose"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="checkout-form personal-address secure-alert">
                    <div className="personal-info-head">
                      <h4>Profile settings</h4>
                      <p>
                        These controls give you the ability to customize what
                        areas of your profile others are able to see.
                      </p>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input
                        className="form-check-input redCircle"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Updates from classNamees You&apos;re Taking
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input
                        className="form-check-input redCircle"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Updates from Teacher Discussions
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input
                        className="form-check-input redCircle"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Personalized className Recommendations
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input
                        className="form-check-input redCircle"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Featured content
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input
                        className="form-check-input redCircle"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Product updates
                      </label>
                    </div>
                    <div className="form-check form-switch check-on mb-0">
                      <input
                        className="form-check-input redCircle"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Events and offers
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Privacy */}
          </div>
        </div>
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
