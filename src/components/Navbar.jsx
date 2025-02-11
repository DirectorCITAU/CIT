import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isActivitiesMenuOpen, setIsActivitiesMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleActivitiesMenu = () => {
    setIsActivitiesMenuOpen(!isActivitiesMenuOpen);
  };
  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };
  const toggleCoursesMenu = () => {
    setIsCoursesMenuOpen(!isCoursesMenuOpen);
  }

  const setActivitiesMenu = () => {
    setIsServicesMenuOpen(false);
    setIsCoursesMenuOpen(false);
    setIsActivitiesMenuOpen(true);
  };

  const resetActivitiesMenu = async () => {
    setIsActivitiesMenuOpen(false);
  };

  const setServicesMenu = () => {
    setIsActivitiesMenuOpen(false);
    setIsCoursesMenuOpen(false);
    setIsServicesMenuOpen(true);
  };

  const resetServicesMenu = async () => {
    setIsServicesMenuOpen(false);
  };

  const setCoursesMenu = () => {
    setIsActivitiesMenuOpen(false);
    setIsCoursesMenuOpen(true);
    setIsServicesMenuOpen(false);
  }

  const resetCoursesMenu = () => {
    setIsCoursesMenuOpen(false);
  }

  const resetBoth = () => {
    resetActivitiesMenu(false);
    resetServicesMenu(false);
    resetCoursesMenu(false);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsActivitiesMenuOpen(false);
    setIsServicesMenuOpen(false);
    setIsCoursesMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1199);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        (isActivitiesMenuOpen &&
          activitiesMenuRef.current &&
          !activitiesMenuRef.current.contains(event.target)) ||
        (isServicesMenuOpen &&
          servicesMenuRef.current &&
          !servicesMenuRef.current.contains(event.target))
      ) {
        setIsActivitiesMenuOpen(false);
        setIsServicesMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isActivitiesMenuOpen, isServicesMenuOpen]);

  const activitiesMenuRef = useRef(null);
  const servicesMenuRef = useRef(null);
  const coursesMenuRef = useRef(null);

  return (
    <nav className="bg-transparent z-50">
      <div className="flex items-center justify-center gap-x-3 py-4 px-8">
        <div className="lg-hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#19A7CE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMobileScreen ? (
          <ul
            className={` ${isMobileMenuOpen
                ? "flex flex-col space-y-4 text-white text-lg bg-black rounded bg-opacity-50 p-5"
                : "hidden"
              }`}
          >
            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/">
                Home
              </a>
            </li>
            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/about">
                About
              </a>
            </li>
            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/director_message">
                Director
              </a>
            </li>
            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/team">
                Team
              </a>
            </li>

            {/* Activities Menu */}
            {/* <li className={`relative ${isActivitiesMenuOpen ? "text-blue-500" : ""}`} ref={activitiesMenuRef}>
              <details open={isActivitiesMenuOpen} onClick={toggleActivitiesMenu}>
                <summary className="cursor-pointer">Activities</summary>
                <ul className="text-black activities-dropdown absolute bg-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 text-xs w-custom-width gap-2">
                  <li>
                    <Link to="/events&news" onClick={closeAllMenus}>Events & News</Link>
                  </li>
                  <li>
                    <Link to="/project" onClick={closeAllMenus}>Projects</Link>
                  </li>
                </ul>
              </details>
            </li> */}
             <li className={`relative ${isActivitiesMenuOpen ? "text-blue-500" : ""}`} ref={activitiesMenuRef}>
      {/* Summary section (clickable toggle) */}
      <div onClick={toggleActivitiesMenu} className="cursor-pointer flex items-center gap-2">
        {/* Right Arrow Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span>Activities</span>
      </div>

      {/* Dropdown menu (conditionally rendered) */}
      {isActivitiesMenuOpen && (
        <ul className="text-black absolute bg-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 text-xs w-custom-width gap-2">
          <li>
            <Link to="/events&news" onClick={closeAllMenus}>
              Events & News
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={closeAllMenus}>
              Projects
            </Link>
          </li>
        </ul>
      )}
    </li>

            {/* Services Menu */}
            {/* <li className={`relative ${isServicesMenuOpen ? "text-blue-500" : ""}`} ref={servicesMenuRef}>
              <details open={isServicesMenuOpen} onClick={toggleServicesMenu}>
                <summary className="cursor-pointer">Support</summary>
                <ul className="text-black activities-dropdown absolute bg-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 text-xs w-custom-width gap-2">
                  <li>
                    <Link to="/facilities" onClick={closeAllMenus}>Facilities</Link>
                  </li>
                  <li>
                    <Link to="/services" onClick={closeAllMenus}>Services</Link>
                  </li>
                </ul>
              </details>
            </li> */}
            <li className={`relative ${isServicesMenuOpen ? "text-blue-500" : ""}`} ref={servicesMenuRef}>
      {/* Summary section (clickable toggle) */}
      <div onClick={toggleServicesMenu} className="cursor-pointer flex items-center gap-2">
        {/* Right Arrow Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span>Support</span>
      </div>

      {/* Dropdown menu (conditionally rendered) */}
      {isServicesMenuOpen && (
        <ul className="text-black absolute bg-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 text-xs w-custom-width gap-2">
          <li>
            <Link to="/facilities" onClick={closeAllMenus}>
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeAllMenus}>
              Services
            </Link>
          </li>
        </ul>
      )}
    </li>

            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/executive_committee">
                Executive Committee
              </a>
            </li>

            {/* Courses Menu */}
           
            {/* <li className={`relative ${isCoursesMenuOpen ? "text-blue-500" : ""}`} ref={coursesMenuRef}>
              <details open={isCoursesMenuOpen} onClick={toggleCoursesMenu}>
                <summary className="cursor-pointer">Courses</summary>
                <ul className="text-black activities-dropdown absolute bg-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 text-xs w-custom-width gap-2">
                  <li>
                  <Link to="/courses/online-courses" onClick={closeAllMenus}>Online Certification Courses</Link>
                  </li>
                </ul>
              </details>
            </li> */}
           <li className={`relative ${isCoursesMenuOpen ? "text-blue-500" : ""}`} ref={coursesMenuRef}>
      {/* Summary section (clickable toggle) */}
      <div onClick={toggleCoursesMenu} className="cursor-pointer flex items-center gap-2">
        {/* Right Arrow Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span>Courses</span>
      </div>

      {/* Dropdown menu (conditionally rendered) */}
      {isCoursesMenuOpen && (
        <ul className="text-black absolute bg-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 text-xs w-custom-width gap-2">
          <li>
            <Link to="/courses/online-courses" onClick={closeAllMenus}>
              Online Certification Courses
            </Link>
          </li>
        </ul>
      )}
    </li>
            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="relative hover:text-blue-500">
              <a id="nav-item-hover" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex md:space-x-8 text-white text-lg mx-5 py-3 px-10 rounded-lg bg-black opacity-75 mx-full bg-opacity-40">
            <li className="relative">
              <a id="nav-item-hover" href="/" className="hover:text-blue-300" onMouseEnter={resetBoth}>
                Home
              </a>
            </li>
            <li className="relative">
              <a id="nav-item-hover" href="/about" className="hover:text-blue-300 cursor-default">
                About
              </a>
            </li>
            <li className="relative">
              <a id="nav-item-hover" href="/director_message" className="hover:text-blue-300" onMouseEnter={resetBoth}>
                Director
              </a>
            </li>
            <li className="relative">
              <a id="nav-item-hover" href="/team" className="hover:text-blue-300" onMouseEnter={resetBoth}>
                Team
              </a>
            </li>

            {/* Activities Menu */}
            <li className={`relative`} ref={activitiesMenuRef} onMouseEnter={setActivitiesMenu}>
              <details open={isActivitiesMenuOpen}>
                <summary id="nav-item-hover" className="cursor-pointer hover:text-blue-300">Activities</summary>
                <ul className="activities-dropdown absolute bg-blue-950 text-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 w-60 gap-2" onMouseEnter={setActivitiesMenu} onMouseLeave={resetActivitiesMenu}>
                  <li id="nav-item-hover" className="hover:text-blue">
                    <Link to="/events&news" className="hover:text-blue-300" onMouseOver={setActivitiesMenu}>
                      Events & News
                    </Link>
                  </li>
                  <li id="nav-item-hover">
                    <Link to="/project" className="hover:text-blue-300" onMouseOver={setActivitiesMenu}>
                      Projects
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Support Menu */}
            <li className={`relative`} ref={servicesMenuRef} onMouseEnter={setServicesMenu}>
              <details open={isServicesMenuOpen}>
                <summary id="nav-item-hover" className="cursor-pointer hover:text-blue-300">Support</summary>
                <ul className="services-dropdown absolute bg-blue-950 text-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 w-60 gap-2" onMouseEnter={setServicesMenu} onMouseLeave={resetServicesMenu}>
                  <li id="nav-item-hover">
                    <a href="/facilities" className="hover:text-blue-300" onMouseOver={setServicesMenu}>
                      Facilities
                    </a>
                  </li>
                  <li id="nav-item-hover">
                    <a href="/services" className="hover:text-blue-300" onMouseOver={setServicesMenu}>
                      Services
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li className="relative">
              <a id="nav-item-hover" href="/executive_committee" onMouseEnter={resetBoth} className="hover:text-blue-300">
                Executive Committee
              </a>
            </li>

            {/* Courses Menu */}
            <li className={`relative`} ref={coursesMenuRef} onMouseEnter={setCoursesMenu}>
              <details open={isCoursesMenuOpen}>
                <summary className="cursor-pointer hover:text-blue-300">Courses</summary>
                <ul className="services-dropdown absolute bg-blue-950 text-white py-2 px-4 mt-2 rounded-lg shadow-md z-40 w-80 gap-2" onMouseEnter={setCoursesMenu} onMouseLeave={resetCoursesMenu}>
                  <li id="nav-item-hover">
                    <a href="/courses/online-courses" className="hover:text-blue-300" onMouseOver={setCoursesMenu}>
                      Online Certification Courses
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li className="relative">
              <a id="nav-item-hover" href="/gallery" className="hover:text-blue-300" onMouseEnter={resetBoth}>
                Gallery
              </a>
            </li>
            <li className="relative">
              <a id="nav-item-hover" href="/contact" className="hover:text-blue-300" onMouseEnter={resetBoth}>
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
