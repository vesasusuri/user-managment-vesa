import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import MobileNav from "../MobileNav/MobileNav";
import "./Navbar.scss";

const Navbar = ({ styles }) => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`nav ${styles} ${isSticky ? "nav__sticky" : ""}`}>
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <div className="logo-container"></div>
        </Link>
      </div>

      <div className="nav-links">
        <Link
          to="/"
          className={`inner-nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          <FormattedMessage id="home" defaultMessage="Home" />
          <span className="line"></span>
        </Link>

        <Link
          to="/"
          className={`inner-nav-link contact ${location.pathname === "/contact" ? "active" : ""}`}
        >
          <FormattedMessage id="Contact-Us" defaultMessage="Contact Us" />
          <span className="line"></span>
        </Link>
      </div>

      <div className="nav-auth">
       
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
