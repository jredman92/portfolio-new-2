import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import GSDevTools from "gsap/src/GSDevTools";
import React, { useEffect, useRef } from "react";

const StartAnimation = () => {
   const startContainer = useRef(null);
   gsap.registerPlugin(GSDevTools);
   gsap.registerPlugin(ScrambleTextPlugin);

   useEffect(() => {
      var tl = gsap.timeline({ defaults: { duration: 5, ease: "none" } });

      tl.to("#newClass", {
         scrambleText: {
            text: "WELCOME TO MY PORTFOLIO",
            chars: "01",
            speed: 1,
            newClass: "orange",
            revealDelay: 0.5,
            tweenLength: false,
         },
      });
   }, []);

   useEffect(() => {
      gsap.fromTo(
         startContainer.current,
         {
            opacity: 1,
         },
         {
            opacity: 0,
            delay: 0,
            onComplete: () => {
               startContainer.current.remove();
            },
         }
      );
   }, []);

   return (
      <div
         ref={startContainer}
         className="start fixed flex w-screen h-screen justify-center items-center z-10"
      >
         <div id="textblock">
            <div id="newClass"></div>
         </div>
      </div>
   );
};

export default StartAnimation;
