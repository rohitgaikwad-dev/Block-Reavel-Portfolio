import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./button.css";

const Button = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonAnimation = anime({
      targets: buttonRef.current,
      opacity: [0, 1],
      translateY: [80, 0],
      duration: 2000,
      easing: "easeInOutExpo",
      delay: 4300,
    });
    return () => {
      buttonAnimation.pause();
    };
  }, []);

  return <button ref={buttonRef}>discover +</button>;
};

export default Button;
