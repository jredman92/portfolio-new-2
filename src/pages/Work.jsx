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
            rotation: 1,
            x: -1400,
            y: -230,
         },
         {
            rotation: 360,
            duration: 5,
            x: 0,
            y: -230,
            scrollTrigger: {
               start: "600px",
               end: "800px",
               scrub: 1,
            },
            onComplete: () => {
               gsap.fromTo(
                  ".square",
                  {
                     x: 0,
                     y: -230,
                  },
                  {
                     rotation: 1080,
                     x: 2000,
                     y: -230,
                     scrollTrigger: {
                        start: "1300px",
                        end: "2500px",
                        scrub: 1,
                     },
                     overwrite: false,
                  }
               );
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
