import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DepositMenu({ activeMenu }) {
  return (
    <>
      <div className="my-student-list">
        <ul>
          <li>
            <Link
              className={activeMenu === "Dashboard" ? "active" : ""}
              to="/deposit-student-dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={activeMenu === "Courses" ? "active" : ""}
              to="/course-student"
            >Enrolled Courses</Link>
          </li>
          <li>
            <Link
              className={activeMenu === "Purchase History" ? "active" : ""}
              to="/purchase-history"
            >Purchase history</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
