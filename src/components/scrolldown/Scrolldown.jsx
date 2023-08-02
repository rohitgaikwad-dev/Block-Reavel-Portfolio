import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./scrolldown.css";

const Scrolldown = () => {
  const scrollDownRef = useRef(null);

  useEffect(() => {
    const scrollDownAnimation = anime({
      targets: scrollDownRef.current,
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo",
      delay: 6000,
    });

    return () => {
      scrollDownAnimation.pause();
    };
  }, []);

  return (
    <div className="scroll-down" ref={scrollDownRef}>
      scroll
    </div>
  );
};

export default Scrolldown;
