import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./stripes.css";

const Stripes = () => {
  const sOneRef = useRef(null);
  const sTwoRef = useRef(null);
  const sThreeRef = useRef(null);

  useEffect(() => {
    const sOneAnimation = anime({
      targets: sOneRef.current,
      height: "100%",
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 0,
    });

    const sTwoAnimation = anime({
      targets: sTwoRef.current,
      height: "100%",
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 200,
    });

    const sThreeAnimation = anime({
      targets: sThreeRef.current,
      height: "100%",
      easing: "easeInOutQuad",
      duration: 2000,
      delay: 800,
    });
    return () => {
      sOneAnimation.pause();
      sTwoAnimation.pause();
      sThreeAnimation.pause();
    };
  }, []);

  return (
    <div className="stripes">
      <div className="s-one" ref={sOneRef}></div>
      <div className="s-two" ref={sTwoRef}></div>
      <div className="s-three" ref={sThreeRef}></div>
    </div>
  );
};

export default Stripes;
