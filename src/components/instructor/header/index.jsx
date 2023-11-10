import React, { useRef, useState } from "react";
import { Home, LogOut, Moon, Star } from "react-feather";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {
  Cart,
  Course14,
  Course15,
  Course4,
  logo,
  Messages,
  Notification,
  ProfileAvatar,
  User1,
  User15,
  User2,
  User3,
  Wish,
} from "../../imagepath";

// eslint-disable-next-line react/prop-types
export function InstructorHeader({ activeMenu }) {
  const [navbar, setNavbar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mobile Menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
  const [mobileSubMenu22, setMobileSubMenu22] = useState(false);
  const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
  const [mobileSubMenu32, setMobileSubMenu32] = useState(false);
  const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
  const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
  const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
  const [mobileSubMenu5, setMobileSubMenu5] = useState(false);

  const openMobileMenu = () => {
    document.body.classList.add("menu-opened");
    setMobileMenu(true);
  };
  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
    setMobileMenu(false);
  };

  const openMobileSubMenu = (e) => {
    e.preventDefault();
    setMobileSubMenu(!mobileSubMenu);
  };
  const openMobileSubMenu2 = (e) => {
    e.preventDefault();
    setMobileSubMenu2(!mobileSubMenu2);
  };
  const openMobileSubMenu22 = (e) => {
    e.preventDefault();
    setMobileSubMenu22(!mobileSubMenu22);
  };
  const openMobileSubMenu3 = (e) => {
    e.preventDefault();
    setMobileSubMenu3(!mobileSubMenu3);
  };
  const openMobileSubMenu32 = (e) => {
    e.preventDefault();
    setMobileSubMenu32(!mobileSubMenu32);
  };
  const openMobileSubMenu4 = (e) => {
    e.preventDefault();
    setMobileSubMenu4(!mobileSubMenu4);
  };
  const openMobileSubMenu42 = (e) => {
    e.preventDefault();
    setMobileSubMenu42(!mobileSubMenu42);
  };
  const openMobileSubMenu43 = (e) => {
    e.preventDefault();
    setMobileSubMenu43(!mobileSubMenu43);
  };
  const openMobileSubMenu5 = (e) => {
    e.preventDefault();
    setMobileSubMenu5(!mobileSubMenu5);
  };
  // To close the modal, when clicked outside anywhere
  const cart = useRef();
  useOnClickOutside(cart, () => setShowCart(false));

  const wish = useRef();
  useOnClickOutside(wish, () => setShowWish(false));

  const notification = useRef();
  useOnClickOutside(notification, () => setShowNotification(false));

  const profile = useRef();
  useOnClickOutside(profile, () => setShowProfile(false));

  // Cart Click
  const cartClick = (e) => {
    e.preventDefault();
    // if (showWish) {
    //   setShowWish(false);
    // }
    setShowCart(!showCart);
    console.log(showCart);
  };

  const wishClick = (e) => {
    e.preventDefault();
    // if (showCart) {
    //   setShowCart(false);
    // }
    setShowWish(!showWish);
  };

  const notificationClick = (e) => {
    e.preventDefault();
    setShowNotification(!showNotification);
  };
  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header className="header header-page">
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container ">
            <div className="navbar-header">
              <Link
                id="mobile_btn"
                to="#;"
                onClick={openMobileMenu}
              >
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#;"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu">
                  <Link to="/" className={mobileSubMenu ? "submenu" : ""}>
                    Home{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/home2">Home Two</Link>
                    </li>
                    <li>
                      <Link to="/home3">Home Three</Link>
                    </li>
                    <li>
                      <Link to="/home4">Home Four</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu active">
                  <Link to="/instructor-dashboard">
                    Instructor{" "}
                    <i
                      className="fas fa-chevron-down "
                      onClick={openMobileSubMenu2}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu2 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li className={activeMenu === "Dashboard" ? "active" : ""}>
                      <Link to="/instructor-dashboard" onClick={hideMobileMenu}>
                        Dashboard
                      </Link>
                    </li>
                    <li
                      className={
                        activeMenu === "List" || activeMenu === "Grid"
                          ? "has-submenu active"
                          : "has-submenu"
                      }
                    >
                      <Link to="/instructor-list">
                        Instructor
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu22}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu22 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li className={activeMenu === "List" ? "active" : ""}>
                          <Link to="/instructor-list" onClick={hideMobileMenu}>
                            List
                          </Link>
                        </li>
                        <li className={activeMenu === "Grid" ? "active" : ""}>
                          <Link to="/instructor-grid" onClick={hideMobileMenu}>
                            Grid
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={activeMenu === "Courses" ? "active" : ""}>
                      <Link to="/instructor-course" onClick={hideMobileMenu}>
                        My Course
                      </Link>
                    </li>
                    <li className={activeMenu === "Reviews" ? "active" : ""}>
                      <Link to="/instructor-reviews" onClick={hideMobileMenu}>
                        Reviews
                      </Link>
                    </li>
                    <li className={activeMenu === "Earnings" ? "active" : ""}>
                      <Link to="/instructor-earnings" onClick={hideMobileMenu}>
                        Earnings
                      </Link>
                    </li>
                    <li className={activeMenu === "Orders" ? "active" : ""}>
                      <Link to="/instructor-orders" onClick={hideMobileMenu}>
                        Orders
                      </Link>
                    </li>
                    <li className={activeMenu === "Payouts" ? "active" : ""}>
                      <Link to="/instructor-payouts" onClick={hideMobileMenu}>
                        Payouts
                      </Link>
                    </li>
                    <li className={activeMenu === "Tickets" ? "active" : ""}>
                      <Link to="/instructor-tickets" onClick={hideMobileMenu}>
                        Support Ticket
                      </Link>
                    </li>
                    <li className={activeMenu === "Profile" ? "active" : ""}>
                      <Link
                        to="/instructor-edit-profile"
                        onClick={hideMobileMenu}
                      >
                        Instructor Profile
                      </Link>
                    </li>
                    <li className={activeMenu === "Security" ? "active" : ""}>
                      <Link to="/instructor-security" onClick={hideMobileMenu}>
                        Security
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "SocialProfile" ? "active" : ""}
                    >
                      <Link
                        to="/instructor-social-profile"
                        onClick={hideMobileMenu}
                      >
                        Social Profiles
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "Notification" ? "active" : ""}
                    >
                      <Link
                        to="/instructor-notifications"
                        onClick={hideMobileMenu}
                      >
                        Notifications
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/instructor-profile-privacy"
                        onClick={hideMobileMenu}
                      >
                        Profile Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/instructor-delete-profile"
                        onClick={hideMobileMenu}
                      >
                        Delete Profile
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "LinkedAccount" ? "active" : ""}
                    >
                      <Link
                        to="/instructor-linked-account"
                        onClick={hideMobileMenu}
                      >
                        Linked Accounts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/students-list">
                    Student{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu3}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu3
                        ? "submenu first-submenu submenuShow"
                        : "submenu first-submenu"
                    }
                  >
                    <li className="has-submenu ">
                      <Link to="/students-list">
                        Student
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu32}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu32 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li className={activeMenu === "List" ? "active" : ""}>
                          <Link to="/students-list" onClick={hideMobileMenu}>
                            List
                          </Link>
                        </li>
                        <li className={activeMenu === "Grid1" ? "active" : ""}>
                          <Link to="/students-grid" onClick={hideMobileMenu}>
                            Grid
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={activeMenu === "EditProfile" ? "active" : ""}
                    >
                      <Link to="/setting-edit-profile" onClick={hideMobileMenu}>
                        Student Profile
                      </Link>
                    </li>
                    <li className={activeMenu === "Security" ? "active" : ""}>
                      <Link
                        to="/setting-student-security"
                        onClick={hideMobileMenu}
                      >
                        Security
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "SocialProfile" ? "active" : ""}
                    >
                      <Link
                        to="/setting-student-social-profile"
                        onClick={hideMobileMenu}
                      >
                        Social profile
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "Notification" ? "active" : ""}
                    >
                      <Link
                        to="/setting-student-notification"
                        onClick={hideMobileMenu}
                      >
                        Notification
                      </Link>
                    </li>
                    <li className={activeMenu === "Privacy" ? "active" : ""}>
                      <Link
                        to="/setting-student-privacy"
                        onClick={hideMobileMenu}
                      >
                        Profile Privacy
                      </Link>
                    </li>
                    <li className={activeMenu === "Accounts" ? "active" : ""}>
                      <Link
                        to="/setting-student-accounts"
                        onClick={hideMobileMenu}
                      >
                        Link Accounts
                      </Link>
                    </li>
                    <li className={activeMenu === "Referral" ? "active" : ""}>
                      <Link
                        to="/setting-student-referral"
                        onClick={hideMobileMenu}
                      >
                        Referal
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "Subscription" ? "active" : ""}
                    >
                      <Link
                        to="/setting-student-subscription"
                        onClick={hideMobileMenu}
                      >
                        Subscription
                      </Link>
                    </li>
                    <li className={activeMenu === "Billing" ? "active" : ""}>
                      <Link
                        to="/setting-student-billing"
                        onClick={hideMobileMenu}
                      >
                        Billing
                      </Link>
                    </li>
                    <li className={activeMenu === "Payment" ? "active" : ""}>
                      <Link
                        to="/setting-student-payment"
                        onClick={hideMobileMenu}
                      >
                        Payment
                      </Link>
                    </li>
                    <li className={activeMenu === "Invoice" ? "active" : ""}>
                      <Link
                        to="/setting-student-invoice"
                        onClick={hideMobileMenu}
                      >
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/setting-support-tickets"
                        onClick={hideMobileMenu}
                      >
                        Support Tickets
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="">
                    Pages{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu4}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/page-notification" onClick={hideMobileMenu}>
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing-plan" onClick={hideMobileMenu}>
                        Pricing Plan
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist" onClick={hideMobileMenu}>
                        Wishlist
                      </Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/course-list">
                        Course{" "}
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu42}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu42 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/add-course" onClick={hideMobileMenu}>
                            Add Course
                          </Link>
                        </li>
                        <li>
                          <Link to="/course-list" onClick={hideMobileMenu}>
                            Course List
                          </Link>
                        </li>
                        <li>
                          <Link to="/course-grid" onClick={hideMobileMenu}>
                            Course Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/course-details"
                            onClick={hideMobileMenu}
                          >
                            Course Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="/come-soon">
                        Error
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu43}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu43 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/come-soon" onClick={hideMobileMenu}>
                            Coming soon
                          </Link>
                        </li>
                        <li>
                          <Link to="/error-404" onClick={hideMobileMenu}>
                            404
                          </Link>
                        </li>
                        <li>
                          <Link to="/error-500" onClick={hideMobileMenu}>
                            500
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/under-construction"
                            onClick={hideMobileMenu}
                          >
                            Under Construction
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/faq" onClick={hideMobileMenu}>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" onClick={hideMobileMenu}>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/job-category" onClick={hideMobileMenu}>
                        Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" onClick={hideMobileMenu}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkout" onClick={hideMobileMenu}>
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={hideMobileMenu}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" onClick={hideMobileMenu}>
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password" onClick={hideMobileMenu}>
                        Forgot Password
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Blog{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu5}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu5 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/blog-list" onClick={hideMobileMenu}>
                        Blog List
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-grid" onClick={hideMobileMenu}>
                        Blog Grid
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-masonry" onClick={hideMobileMenu}>
                        Blog Masonry
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-modern" onClick={hideMobileMenu}>
                        Blog Modern
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" onClick={hideMobileMenu}>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="login-link">
                  <Link to="/login" onClick={hideMobileMenu}>
                    Login / Signup
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link to="/instructor-chat">
                  <img src={Messages} alt="img" />
                </Link>
              </li>
              <li className="nav-item cart-nav">
                <Link
                  to="#"
                  className={
                    showCart ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                >
                  <img onClick={cartClick} src={Cart} alt="img" />
                </Link>
                {/* Cart Content shows on Click */}

                <div
                  ref={cart}
                  className={
                    showCart
                      ? "wishes-list dropdown-menu dropdown-menu-right show modalPosition"
                      : "wishes-list dropdown-menu dropdown-menu-right"
                  }
                  // data-bs-popper={cart && "none"}
                >
                  <div className="wish-header">
                    <Link to="#">View Cart</Link>
                    <Link to="#" className="float-end">
                      Checkout
                    </Link>
                  </div>
                  <div className="wish-content">
                    <ul>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course4} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  Learn Angular...
                                </Link>
                              </h6>
                              <p>By Dave Franco</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                            </div>
                          </div>
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course14} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  Build Responsive Real...
                                </Link>
                              </h6>
                              <p>Jenis R.</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                            </div>
                          </div>
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course15} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  C# Developers Double ...
                                </Link>
                              </h6>
                              <p>Jesse Stevens</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                            </div>
                          </div>
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="total-item">
                      <h6>Subtotal : $ 600</h6>
                      <h5>Total : $ 600</h5>
                    </div>
                  </div>
                </div>
                {/* Wish Content shows on Click */}
              </li>
              <li className="nav-item wish-nav">
                <Link
                  to="#"
                  className={
                    showWish ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                >
                  <img onClick={wishClick} src={Wish} alt="img" />
                </Link>

                <div
                  ref={wish}
                  className={
                    showWish
                      ? "wishes-list dropdown-menu dropdown-menu-right show modalPosition"
                      : "wishes-list dropdown-menu dropdown-menu-right"
                  }
                >
                  <div className="wish-content">
                    <ul>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course4} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  Learn Angular...
                                </Link>
                              </h6>
                              <p>By Dave Franco</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                              <div className="remove-btn">
                                <Link to="#" className="btn">
                                  Add to cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course14} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  Build Responsive Real...
                                </Link>
                              </h6>
                              <p>Jenis R.</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                              <div className="remove-btn">
                                <Link to="#" className="btn">
                                  Add to cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course15} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  C# Developers Double ...
                                </Link>
                              </h6>
                              <p>Jesse Stevens</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                              <div className="remove-btn">
                                <Link to="#" className="btn">
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item noti-nav">
                <Link
                  to="#"
                  className={
                    showNotification
                      ? "dropdown-toggle show"
                      : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                >
                  <img
                    onClick={notificationClick}
                    src={Notification}
                    alt="img"
                  />
                </Link>
                <div
                  ref={notification}
                  className={
                    showNotification
                      ? "notifications dropdown-menu dropdown-menu-right show modalPosition"
                      : "notifications dropdown-menu dropdown-menu-right"
                  }
                >
                  <div className="topnav-dropdown-header">
                    <span className="notification-title">
                      Notifications
                      <select>
                        <option>All</option>
                        <option>Unread</option>
                      </select>
                    </span>
                    <Link to="#" className="clear-noti">
                      Mark all as read{" "}
                      <i className="fa-solid fa-circle-check"></i>
                    </Link>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list">
                      <li className="notification-message">
                        <div className="media d-flex">
                          <div>
                            <Link to="/page-notification" className="avatar">
                              <img className="avatar-img" alt="" src={User1} />
                            </Link>
                          </div>
                          <div className="media-body">
                            <h6>
                              <Link to="/page-notification">
                                Lex Murphy requested <span>access to</span> UNIX
                                directory tree hierarchy{" "}
                              </Link>
                            </h6>
                            <button className="btn btn-accept">Accept</button>
                            <button className="btn btn-reject">Reject</button>
                            <p>Today at 9:42 AM</p>
                          </div>
                        </div>
                      </li>
                      <li className="notification-message">
                        <div className="media d-flex">
                          <div>
                            <Link to="/page-notification" className="avatar">
                              <img className="avatar-img" alt="" src={User2} />
                            </Link>
                          </div>
                          <div className="media-body">
                            <h6>
                              <Link to="/page-notification">
                                Ray Arnold left 6 <span>comments on</span> Isla
                                Nublar SOC2 compliance report
                              </Link>
                            </h6>
                            <p>Yesterday at 11:42 PM</p>
                          </div>
                        </div>
                      </li>
                      <li className="notification-message">
                        <div className="media d-flex">
                          <div>
                            <Link to="/page-notification" className="avatar">
                              <img className="avatar-img" alt="" src={User3} />
                            </Link>
                          </div>
                          <div className="media-body">
                            <h6>
                              <Link to="/page-notification">
                                Dennis Nedry <span>commented on</span> Isla
                                Nublar SOC2 compliance report
                              </Link>
                            </h6>
                            <p className="noti-details">
                              “Oh, I finished de-bugging the phones, but the
                              system&apos;s compiling for eighteen minutes, or
                              twenty. So, some minor systems may go on and off
                              for a while.”
                            </p>
                            <p>Yesterday at 5:42 PM</p>
                          </div>
                        </div>
                      </li>
                      <li className="notification-message">
                        <div className="media d-flex">
                          <div>
                            <Link to="/page-notification" className="avatar">
                              <img className="avatar-img" alt="" src={User1} />
                            </Link>
                          </div>
                          <div className="media-body">
                            <h6>
                              <Link to="/page-notification">
                                John Hammond <span>created</span> Isla Nublar
                                SOC2 compliance report{" "}
                              </Link>
                            </h6>
                            <p>Last Wednesday at 11:15 AM</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item user-nav">
                <Link
                  to="#"
                  className={
                    showProfile ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img src={ProfileAvatar} alt="" />
                    <span className="status online"></span>
                  </span>
                </Link>
                <div
                  ref={profile}
                  className={
                    showProfile
                      ? "users dropdown-menu dropdown-menu-right show modalPosition"
                      : "users dropdown-menu dropdown-menu-right"
                  }
                  data-popper-placement="bottom-end"
                >
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={User15}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Jenny Wilson</h6>
                      <p className="text-muted text mb-0">Instructor</p>
                    </div>
                  </div>
                  <Link
                    className="dropdown-item text"
                    to="/instructor-dashboard"
                  >
                    <Home size={14} color={"#FF875A"} className="headerIcon" />{" "}
                    Dashboard
                  </Link>
                  <Link
                    className="dropdown-item text"
                    to="/instructor-edit-profile"
                  >
                    <Star size={14} color={"#FF875A"} className="headerIcon" />{" "}
                    Edit Profile
                  </Link>
                  <div className="dropdown-item text night-mode">
                    <span>
                      <Moon size={14} className="headerIcon" /> Night Mode{" "}
                    </span>
                    <div className="form-check form-switch check-on m-0">
                      <input
                        className="form-check-input focusShadow"
                        type="checkbox"
                        id="night-mode"
                      />
                    </div>
                  </div>
                  <Link className="dropdown-item text" to="/">
                    <LogOut
                      size={14}
                      color={"#FF875A"}
                      className="headerIcon"
                    />{" "}
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={mobileMenu ? "sidebar-overlay opened" : "sidebar-overlay"}
        ></div>
      </div>
    </header>
  );
}
