import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Work = () => {
   const imgRef = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      gsap.fromTo(
         ".j",
         {
            x: 1400,
         },
         {
            rotation: -720,
            duration: 5,
            x: 0,
            onComplete: () => {
               gsap.to(".j", {
                  scrollTrigger: {
                     start: "200px",
                     end: "900px",
                     scrub: 1,
                  },
                  rotation: -1440,
                  duration: 5,
                  x: -1400,
                  overwrite: true,
               });
            },
         }
      );
   }, []);

   return (
      <div className="mt-0 mb-0 pt-0 pb-0 text-black flex flex-col items-center justify-center h-screen">
         <div>
            <p
               data-speedx="0.025"
               data-speedy="0.055"
               data-speedz="0.015"
               data-rotation="0.02"
               data-distance="1700"
               className="text-6xl font-black flex pt-[0px] pl-6 hi parallax z-10"
            >
               Hi
            </p>
         </div>
         <div className="flex">
            <img
               height="400"
               width="300"
               src="img/j.png"
               className="parallax j"
               alt=""
               ref={imgRef}
            />
         </div>
      </div>
   );
};

export default Work;
