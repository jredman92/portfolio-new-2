import React, { useEffect } from "react";

const ParallaxElement = ({ speedX, speedY, speedZ, rotation, distance }) => {
   useEffect(() => {
      const element = document.querySelector(".parallax-element");

      const update = (cursorPosition) => {
         const xValue = cursorPosition - window.innerWidth / 2;
         const yValue = cursorPosition - window.innerHeight / 2;

         const zValue = (cursorPosition - element.getBoundingClientRect().left) * 0.1;

         element.style.transform = `perspective(2300px) translateZ(${zValue * speedZ}px) rotateY(${
            xValue * rotation
         }deg) translateX(calc(-50% + ${-xValue * speedX}px)) translateY(calc(-50% + ${yValue * speedY}px))`;
      };

      window.addEventListener("mousemove", (e) => {
         update(e.clientX);
      });

      return () => {
         window.removeEventListener("mousemove", update);
      };
   }, [speedX, speedY, speedZ, rotation]);

   return (
      <img
         src="img/name-logo.jpg"
         alt=""
         className="parallax-element"
         data-speedx={speedX}
         data-speedy={speedY}
         data-speedz={speedZ}
         data-rotation={rotation}
         data-distance={distance}
      />
   );
};

export default ParallaxElement;
