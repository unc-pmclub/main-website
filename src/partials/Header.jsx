// /uncpm-dev-website prefixes to paths removed

// TODO:
//  - Fix deprecated pageYOffset usage on line 15

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/pmlogo.png";
import BasicModal from "./Modal";
// import classnames from "classnames";
import AnnouncementBar from "./AnnouncementBar";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [top, setTop] = useState(true);
  // Remember to assign a link to application
  const [application, setApplication] = useState('https://forms.gle/KLRqcHYWgsbxMUmJ9'); // change to useState(null); for when application is closed
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const announcementMessage = "📢 Members: Create an account and check out the PM Portal! Click 'Apply' or ";
  const announcementNav = application;

  const modalHeader = "Application Status";

  const modalMessage = (
    <p>
      Applications are currently closed! <br></br> Check back soon or subscribe
      to our mailing list to stay up to date.
    </p>
  );

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (
      location.pathname === "/" ||
      location.pathname === "/"
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if on homepage
    } else {
      window.location.href = "/"; // Navigate to homepage if on other pages
    }
  };

  const showApplicationMessage = (e) => {
    if (!application) {
      e.preventDefault(); // For preventing redirection/refreshing when there is no application link
      setModalOpen(true); // Open the modal
    }
  };

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="block"
              aria-label="UNC Product Management"
            >
              <img className="w-12 h-12" src={Logo}></img>
            </a>
          </div>

          {/* Hamburger vs. X Menu Button */}
          <button
            className="md:hidden p-2 rounded-md z-40"
            onClick={toggleDrawer}
          >
            {
            isDrawerOpen ? 
            <CloseIcon 
              fontSize="medium" 
            /> : 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            }
          </button>
          
          {/* Mobile site navigation */}
          <div className={`fixed top-0 right-0 z-30 w-60 h-screen bg-white overflow-y-auto transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
            <nav className="flex flex-col mt-10 p-4">
              <a
                href="/#about"
                onClick={toggleDrawer}
                className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                About
              </a>
              <a
                href="/#lab"
                onClick={toggleDrawer}
                className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Lab
              </a>
              <a
                href="/#team"
                onClick={toggleDrawer}
                className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Team
              </a>
              <a
                href="/#subscribe"
                onClick={toggleDrawer}
                className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Subscribe
              </a>
              <Link
                to="/signin"
                onClick={toggleDrawer}
                className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Login
              </Link>
              <a
                href={application}
                onClick={showApplicationMessage}
                className="btn-sm text-neutral-50 bg-red-600 hover:bg-red-300 ml-3"
              >
                <span>Apply</span>
                <svg
                  className="w-3 h-3 fill-current text-neutral-50 flex-shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </a>
            </nav>
          </div>

          {/* Site navigation */}
          {!isDrawerOpen && <nav
            className={`flex flex-grow ${isOpen ? "block" : "hidden"} md:block`}
          >
            <ul className="flex flex-grow flex-wrap justify-end  items-center">
              <li>
                <a
                  href="/#about"
                  className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#lab"
                  className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Lab
                </a>
              </li>
              <li>
                <a
                  href="/#team"
                  className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/#subscribe"
                  className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Subscribe
                </a>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="font-medium text-gray-600 hover:text-red-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Login
                </Link>
              </li>
              <li>
                <a
                  href={application}
                  onClick={showApplicationMessage}
                  className="btn-sm text-neutral-50 bg-red-600 hover:bg-red-300 ml-3"
                >
                  <span>Apply</span>
                  <svg
                    className="w-3 h-3 fill-current text-neutral-50 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>}
        </div>
      </div>
      <AnnouncementBar 
        message={announcementMessage}
        route={announcementNav}
      />
      <BasicModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        header={modalHeader}
        message={modalMessage}
      />
    </header>
  );
}

export default Header;
