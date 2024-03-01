import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
// import Backdrop from "../../pages/Homepage/Components/Backdrop/Backdrop.js";
import { Link } from "react-router-dom";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const headerRef = useRef();
  const [sideNav, setSideNav] = useState(false);
  // const [visaDrop, setVisaDrop] = useState(false)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const enableDropDown = (event) => {
    setToggleDropDown(!toggleDropDown);
  };

  const toggleSideNav = () => {
    setSideNav((sideNav) => !sideNav);
  };

  useEffect(() => {
    let handler = (event) => {
      if (!headerRef.current.contains(event.target)) {
        setSideNav(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const removeBackdrop = () => {
    setSideNav(false);
  };

  const onLinkClick = () => {
    setSideNav(false);
  };

  return (
    <>
      {/* {/ <Backdrop show={sideNav} onClick={removeBackdrop} /> /} */}
      <div className={`header-main ${scroll ? "scroll-header-main" : ""}`}>
        {/* {/ <div className="wrapper header-wrap"> /} */}
        <header ref={headerRef}>
          <div className="upper-nav">
            <div className="logo">
              <Link className="logo-link" to="/">
                IT AIR TRAVELS & TOURS
              </Link>
            </div>

            <div className="contact">
              <a href="tel: 03 111 786 946" className="telephone">
                <CallOutlinedIcon className="call-outlined" /> 03 111 786 946
              </a>
              {/* <button className="header-btn">WhatsApp</button> */}
            </div>
          </div>
          <nav className={`${sideNav ? "toggle-side-nav" : ""}`}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link className="nav-list-item-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-list-item">
                <Link
                  className="nav-list-item-link"
                  to="/"
                  onClick={enableDropDown}
                >
                  Visa <KeyboardArrowDownIcon id="down-arrow" />
                </Link>
                <ul className={`sub-list ${toggleDropDown ? "dropdown" : ""}`}>
                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/saudia">
                      Saudi Arabia
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/uae">
                      UAE
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/morevisas">
                      More
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-list-item">
                <Link
                  className="nav-list-item-link"
                  to="/"
                  onClick={enableDropDown}
                >
                  Umrah <KeyboardArrowDownIcon id="down-arrow" />
                </Link>
                <ul className={`sub-list ${toggleDropDown ? "dropdown" : ""}`}>
                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/economy">
                      Economy Packages
                    </Link>
                  </li>
                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/ramzanpkg">
                      Ramzan Umrah Packages
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/threestar">
                      3 Star Packages
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/fourstar">
                      4 Star Packages
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/umrahguide">
                      Umrah Guide
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/umrahcal">
                      Umrah Calculator
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-list-item">
                <Link
                  className="nav-list-item-link"
                  to="/services"
                  // onClick={enableDropDown}
                >
                  Services
                  {/* <KeyboardArrowDownIcon id="down-arrow" /> */}
                </Link>
                {/* <ul className={`sub-list ${toggleDropDown ? "dropdown" : ""}`}>
                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/insurance">
                      Travel Insurance
                    </Link>
                  </li>
                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/assistance">
                      Visa Assistance
                    </Link>
                  </li>
                                   
                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/accomadation">
                      Hotel Accomadation
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/rent">
                      Rent a Car
                    </Link>
                  </li>

                  <li className="nav-list-item">
                    <Link className="nav-list-item-link" to="/ticketing">
                      Ticketing
                    </Link>
                  </li>

                </ul> */}
              </li>

              <li className="nav-list-item">
                <Link className="nav-list-item-link" to="/hotel">
                  Hotel
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-item-link" to="/bank">
                  Bank Details
                </Link>
              </li>

              <li className="nav-list-item">
                <Link className="nav-list-item-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-item-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-item-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="booking">
            <MenuIcon
              className={`menu-icon ${sideNav ? "active-side-nav" : ""}`}
              onClick={toggleSideNav}
            />
          </div>
        </header>
      </div>
    </>
  );
}
