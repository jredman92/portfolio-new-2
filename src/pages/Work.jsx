import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Work = () => {
   const imgRef = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      gsap.fromTo(
         ".square",
         {
            scrollTrigger: {
               start: "800px",
               end: "1300px",
               scrub: 1,
               markers: true,
            },
            rotation: 0,
            x: 1400,
            y: -230,
         },
         {
            rotation: -720,
            duration: 5,
            x: 0,
            y: -230,
            onComplete: () => {
               gsap.to(".square", {
                  scrollTrigger: {
                     start: "1300px",
                     end: "2500px",
                     scrub: 1,
                     markers: true,
                  },
                  rotation: -1440,
                  x: -1400,
                  y: -230,
                  overwrite: true,
               });
            },
         }
      );
   }, []);

   return (
      <div className="mt-0 mb-0 pt-0 pb-0 text-black flex flex-col items-center justify-center h-screen">
         <h1 className="py-4 text-white">Work</h1>
         <div
            className="square"
            ref={imgRef}
         ></div>
      </div>
   );
};

export default Work;
