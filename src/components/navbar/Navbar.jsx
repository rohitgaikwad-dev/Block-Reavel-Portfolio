import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
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
          <li>man</li>
          <li>women</li>
          <li>accesories</li>
          <li>beauty</li>
        </ul>
      </div>

      <div className="menu">
        <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
      </div>
      <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000" }} />
      </div>
    </nav>
  );
};

export default Navbar;
