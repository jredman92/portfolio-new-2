import gsap from "gsap";
import React, { useEffect } from "react";

const Work = () => {
   useEffect(() => {
      gsap.fromTo(
         ".square",
         {
            x: 1400,
            y: 0,
         },
         {
            rotation: -360,
            duration: 5,
            x: 0,
            y: 0,
         }
      );
   }, []);

   return (
      <div className="mt-0 mb-0 pt-0 pb-0 text-black flex flex-col items-center justify-center h-screen">
         <h1 className="py-4">Work</h1>
         <div className="square"></div>
      </div>
   );
};

export default Work;
