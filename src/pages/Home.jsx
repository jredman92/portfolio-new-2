import gsap from "gsap";
import React, { useEffect } from "react";

const Work = () => {
   useEffect(() => {
      gsap.to(".j", {
         rotation: -720,
         duration: 5,
         x: -190,
         y: -230,
      });
      gsap.from(".j", {
         x: 1400,
         y: -230,
      });
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
               className="text-6xl font-black flex pt-[0px] pl-6 text-blue-400 hi parallax z-10"
            >
               Hi
            </p>
         </div>
         <div className="flex">
            <img
               height="400"
               width="300"
               src="img/j.png"
               data-speedx="0.1"
               data-speedy="0.2"
               data-speedz="0.2"
               data-rotation="0.02"
               data-distance="1700"
               className="parallax j"
               alt=""
            />
         </div>
      </div>
   );
};

export default Work;
