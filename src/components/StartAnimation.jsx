import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const StartAnimation = () => {
   const startContainer = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         startContainer.current,
         {
            opacity: 1,
         },
         {
            opacity: 0,
            delay: 3,
            onComplete: () => {
               startContainer.current.remove();
            },
         }
      );
   }, []);

   return (
      <div
         ref={startContainer}
         className="start fixed w-screen h-screen z-10"
      >
         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">StartAnimation</div>
      </div>
   );
};

export default StartAnimation;
