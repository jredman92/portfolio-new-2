import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const Work = () => {
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Define the animation to spin the square in from the right
      const spinInAnimation = gsap.to(
         ".square",
         {
            x: window.innerWidth, // Start from the right side
            rotation: 0,
         },
         {
            x: 0, // Move to the center
            rotation: -360, // Rotate counterclockwise
            duration: 2, // Adjust the duration as needed
            ease: "power3",
         }
      );

      // Define the animation to spin the square back off the screen
      const spinOutAnimation = gsap.to(".square", {
         x: window.innerWidth, // Move to the right side, off the screen
         rotation: 360, // Rotate clockwise
         duration: 2, // Adjust the duration as needed
         ease: "power3",
      });

      // Create ScrollTrigger to play the spinInAnimation when 50% of the section is in view
      ScrollTrigger.create({
         trigger: ".square",
         start: "center bottom", // Start when the center of the square is at the bottom of the viewport
         end: "center center", // End when the square is centered vertically
         animation: spinInAnimation,
         scrub: 0.5, // Adjust the scrubbing speed as needed
      });

      // Create ScrollTrigger to play the spinOutAnimation when scrolling past the square
      ScrollTrigger.create({
         trigger: ".square",
         start: "center center", // Start when the square is centered vertically
         end: "center top", // End when the square is 50% out of the viewport
         animation: spinOutAnimation,
         scrub: 0.5, // Adjust the scrubbing speed as needed
      });
   }, []);

   return (
      <div className="mt-0 mb-0 pt-0 pb-0 text-black flex flex-col items-center justify-center h-screen">
         <h1 className="py-4">Work</h1>
         <div className="square"></div>
      </div>
   );
};

export default Work;
