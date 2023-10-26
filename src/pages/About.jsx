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
            rotation: -1,
            x: 1400,
            y: -230,
         },
         {
            rotation: -360,
            duration: 5,
            x: 0,
            y: -230,
            scrollTrigger: {
               start: "1400px",
               end: "1600px",
               scrub: 1,
            },
            onComplete: () => {
               gsap.fromTo(
                  ".square-2",
                  {
                     x: 0,
                     y: -230,
                  },
                  {
                     rotation: -720,
                     x: -1400,
                     y: -230,
                     scrollTrigger: {
                        start: "1900px",
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
