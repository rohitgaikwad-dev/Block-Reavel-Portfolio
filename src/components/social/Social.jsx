import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./social.css";

const Social = () => {
  const socialMediaItemsRef = useRef([]);

  useEffect(() => {
    const socialMediaItems = socialMediaItemsRef.current;

    const socialMediaItemsAnimation = anime.timeline({
      easing: "easeInOutExpo",
    });

    socialMediaItemsAnimation.add({
      targets: socialMediaItems,
      opacity: [0, 1],
      translateY: [100, -40],
      duration: 2000,
      delay: anime.stagger(200, { start: 5000, from: "last" }),
    });

    return () => {
      socialMediaItemsAnimation.pause();
    };
  }, []);

  return (
    <div className="media">
      <ul>
        <li ref={(el) => (socialMediaItemsRef.current[0] = el)}>github</li>
        <li ref={(el) => (socialMediaItemsRef.current[1] = el)}>linkedin</li>
        <li ref={(el) => (socialMediaItemsRef.current[2] = el)}>instagram</li>
      </ul>
    </div>
  );
};

export default Social;
