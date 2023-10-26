import gsap from "gsap";
import React, { useEffect } from "react";

const StartAnimation = () => {
   useEffect(() => {
      gsap.fromTo(
         ".start",
         {
            opacity: 1,
         },
         {
            opacity: 0,
            delay: 3,
         }
      );
   }, []);

   return (
      <div className="start fixed w-screen h-screen z-50">
         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">StartAnimation</div>
      </div>
   );
};

export default StartAnimation;
