import React, { useRef, useState } from "react";
import { LogOut, Moon, Star, User, Bell, Heart, ShoppingCart } from "react-feather";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {
  Cart,
  Course11,
  Course14,
  Course15,
  Course4,
  logo,
  Messages,
  Notification,
  User1,
  User11,
  User2,
  User3
} from "../../imagepath";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../../store/cartStore";

// eslint-disable-next-line react/prop-types
export default function StudentHeader({ activeMenu }) {
  const [navbar, setNavbar] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const cookie = new Cookies()

  const navigate = useNavigate()

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

                  </Link>

                </li>


                <li className={activeMenu === "Enroll" ? "active" : ""}>
                  <Link to="/course-grid">
                    Enroll{" "}
                  </Link>
                </li>
                <li className="has-submenu menu-effect">
                  <Link to="/">
                    Contact Us{" "}
                  </Link>
                </li>

                <li className={activeMenu === "Code Editor" ? "active" : ""}>
                  <Link to="/code-editor">
                    Code Editor{" "}
                  </Link>
                </li>

                <li className={activeMenu === "Doubt Submission" ? "active" : ""}>
                  <Link to="/doubt-submission">
                    Doubt Submission{" "}
                  </Link>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item d-flex align-items-center gx-1">
                <h2>
                  <FaFire className="text-orange p-1 border rounded-circle" />
                </h2>
                <span className="small fw-bolder ms-1">1</span>
              </li>
              <li className="nav-item cart-nav">
                <Link
                  to="#"
                  className={
                    showCart ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                >
                  <div className="position-relative">
                    <ShoppingCart onClick={cartClick} />
                    {
                      cartItems?.length > 0 &&
                      <div className="position-absolute top-0 start-100 translate-middle">
                        <span className="px-2 py-1 small rounded-circle bg-primary text-white">{cartItems.length} </span>
                      </div>
                    }
                  </div>
                </Link>
                <div
                  ref={cart}
                  className={
                    showCart
                      ? "wishes-list dropdown-menu dropdown-menu-right show modalPosition"
                      : "wishes-list dropdown-menu dropdown-menu-right"
                  }
                >
                  <div className="wish-header">
                    <Link to="/cart">View Cart</Link>
                    {/* <Link to="#" className="float-end">
                      Checkout
                    </Link> */}
                  </div>
                  <div className="wish-content">
                    <ul>
                      {
                        cartItems?.map((course) => {
                          const { course_guid, course_title, course_price, instructorName } = course;
                          return (
                            <li key={course_guid}>
                              <div className="media">
                                <div className="d-flex media-wide">
                                  <div className="avatar">
                                    <Link to="/course-details">
                                      <img alt="Course Details" src={Course11} />
                                    </Link>
                                  </div>
                                  <div className="media-body">
                                    <h6>
                                      <Link to="/course-details">
                                        {course_title}
                                      </Link>
                                    </h6>
                                    <p>By Zahid Saleem</p>
                                    <h5>
                                      <span>${course_price}</span>
                                    </h5>
                                  </div>
                                </div>
                                <div className="remove-btn">
                                  <Link to={"#"} onClick={(e) => {
                                    removeFromCart(course)
                                  }} className="btn">
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className="total-item">
                      {
                        cartTotal > 0 &&
                        <>
                          <h6>Subtotal : $ {cartTotal}</h6>
                          <h5>Total : $ {cartTotal}</h5>
                        </>
                      }

                    </div>
                  </div>
                      {
                        cartTotal > 0 ?
                        <div className={``}>
                          <div className="condinue-shop">
                            <Link
                              to='/checkout'
                              className="btn btn-primary"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                        :
                        ""
                      }
                </div>
              </li>
              <li className="nav-item wish-nav">
                <Link
                  to="#"
                  className={
                    showWish ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                >
                  <Heart onClick={wishClick} />
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
                  <Bell />
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
                      Notifications{" "}
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
                    <img src={User11} alt="" />
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
                        src={User11}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Jenny Wilson</h6>
                      <p className="text-muted text mb-0">Student</p>
                    </div>
                  </div>
                  <Link
                    className="dropdown-item text"
                    to="/setting-edit-profile"
                  >
                    <User size={14} color={"#FF875A"} className="headerIcon" />{" "}
                    Profile
                  </Link>
                  <Link
                    className="dropdown-item text"
                    to="/setting-student-subscription"
                  >
                    <Star size={14} color={"#FF875A"} className="headerIcon" />{" "}
                    Subscription
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
                  <button onClick={() => {
                    cookie.set('token', '')
                    navigate('/login')
                  }}
                    className="dropdown-item text">
                    <LogOut
                      size={14}
                      color={"#FF875A"}
                      className="headerIcon"
                    />{" "}
                    Logout
                  </button>
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
