import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";

export default function StudentSocialProfile() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"SocialProfile"} />
      {/* Student Database */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"SocialProfile"} />
            {/* sidebar*/}
            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Job Profiles</h3>
                    <p>
                      Add your job profile links in below social accounts.
                    </p>
                  </div>
                  <div className="checkout-form personal-address">
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label">
                              Leetcode
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Leetcode Profile Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label">
                              Codeforces
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Codeforces Profile Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label">
                              Linkedin
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Linkedin Profile Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label">
                              Naukri
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Naukri Profile URL"
                            />
                          </div>
                        </div>
                        <div className="update-profile save-social">
                          <button type="button" className="btn btn-primary">
                            Save Job Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Student Database */}
      <Footer />
    </div>
  );
}
