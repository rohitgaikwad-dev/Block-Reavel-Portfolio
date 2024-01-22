import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./navbar.css";

const Navbar = ({ categories }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarAnimation = anime({
      targets: navbarRef.current,
      opacity: [0, 1],
      translateY: [0, 20],
      duration: 2000,
      easing: "easeInOutExpo",
      delay: 1300,
    });

    return () => {
      navbarAnimation.pause();
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="logo">rg</div>

      <div className="categories">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div className="menu">
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>

      <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
