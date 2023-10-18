import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const About = () => {
   const imgRef = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      gsap.fromTo(
         ".square-2",
         {
            scrollTrigger: {
               start: "800px",
               end: "1300px",
               scrub: 1,
               markers: true,
            },
            rotation: 1,
            x: -1400,
            y: -230,
         },
         {
            rotation: 720,
            duration: 5,
            x: 0,
            y: -230,
            onComplete: () => {
               gsap.to(".square-2", {
                  scrollTrigger: {
                     start: "2300px",
                     end: "2500px",
                     scrub: 1,
                     markers: true,
                  },
                  rotation: 1440,
                  x: 1400,
                  y: -230,
                  overwrite: true,
               });
            },
         }
      );
   }, []);

   return (
      <div>
         <div className="mt-0 mb-0 pt-0 pb-0 flex flex-col items-center justify-center h-screen">
            <h1 className="py-4 text-white">About</h1>
            <div
               className="square-2"
               ref={imgRef}
            ></div>
         </div>
      </div>
   );
};

export default About;
