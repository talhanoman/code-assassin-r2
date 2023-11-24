import React from "react";
import {
  Bell,
  Calendar,
  Clipboard,
  CreditCard,
  Lock,
  Power,
  RefreshCw,
  Settings,
  Trash2,
  User,
  UserPlus,
} from "react-feather";
import { Link } from "react-router-dom";
import { ProfileBg, User11 } from "../../imagepath";

// eslint-disable-next-line react/prop-types
export default function StudentSideBar({ activeMenu }) {
  return (
    <div className="col-xl-3 col-md-4 theiaStickySidebar">
      <div className="settings-widget dash-profile mb-3">
        <div className="settings-menu p-0">
          <div className="profile-bg">
            <h5>Beginner</h5>
            <img src={ProfileBg} alt="" />
            <div className="profile-img">
              <Link to="/students-profile">
                <img src={User11} alt="" />
              </Link>
            </div>
          </div>
          <div className="profile-group">
            <div className="profile-name text-center">
              <h4>
                <Link to="/students-profile">Rolands R</Link>
              </h4>
              <p>Student</p>
            </div>
            <div className="go-dashboard text-center">
              <Link to="/deposit-student-dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-widget account-settings">
        <div className="settings-menu">
          <h3>ACCOUNT SETTINGS</h3>
          <ul>
            <li
              className={
                activeMenu === "EditProfile" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/setting-edit-profile" className="nav-link">
               <i><Settings size={20} /> </i> Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-security"
                className={
                  activeMenu === "Security" ? "nav-item active" : "nav-item"
                }
              >
                <i><User size={20} /></i> Security
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/setting-student-social-profile"
                className={
                  activeMenu === "SocialProfile"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <i><RefreshCw size={20} /></i> Social Profiles
              </Link>
            </li>
       
            <li className="nav-item">
              <Link to="/login" className="nav-link">
              <i><Power size={20} /></i> Sign Out
              </Link>
            </li>
            {activeMenu === "Ticket" ? (
              <li className="nav-item active">
                <Link to="/login" className="nav-link">
                <i><Clipboard size={20} /></i> Support Tickets
                </Link>
              </li>
            ) : null}
          </ul>               
        </div>
      </div>
    </div>
  );
}
