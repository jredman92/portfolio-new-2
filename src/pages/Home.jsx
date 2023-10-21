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
            delay: 50,
         },
         {
            rotation: -690,
            duration: 5,
            x: 300,
            delay: 30,
            onComplete: () => {
               gsap.to(".j", {
                  scrollTrigger: {
                     start: "200px",
                     end: "900px",
                     scrub: 1,
                  },
                  rotation: -1440,
                  x: -1400,
                  overwrite: true,
                  delay: 50,
               });
            },
         }
      );
   }, []);

   useEffect(() => {
      gsap.fromTo(
         ".j",
         {
            x: 1400,
         },
         {
            rotation: -690,
            duration: 5,
            x: 300,
            delay: 0,
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

   useEffect(() => {
      gsap.fromTo(
         ".hi",
         {
            x: 0,
            y: -700,
         },
         {
            duration: 1,
            x: 0,
            y: 0,
            delay: 0,
            onComplete: () => {
               gsap.to(".hi", {
                  scrollTrigger: {
                     start: "0px",
                     end: "900px",
                     scrub: 1,
                  },

                  duration: 5,
                  y: -1400,
                  overwrite: true,
               });
            },
         }
      );
   }, []);

   useEffect(() => {
      gsap.fromTo(
         ".name",
         {
            x: -1400,
            y: 0,
         },
         {
            duration: 1,
            x: 0,
            y: 0,
            delay: 1,
            onComplete: () => {
               gsap.to(".name", {
                  scrollTrigger: {
                     start: "0px",
                     end: "900px",
                     scrub: 1,
                  },

                  duration: 5,
                  y: -1400,
                  overwrite: true,
               });
            },
         }
      );
   }, []);

   useEffect(() => {
      gsap.fromTo(
         ".dev",
         {
            x: 0,
            y: 1400,
         },
         {
            duration: 1,
            x: 0,
            y: 0,
            delay: 2,
            onComplete: () => {
               gsap.to(".dev", {
                  scrollTrigger: {
                     start: "0px",
                     end: "900px",
                     scrub: 1,
                  },

                  duration: 5,
                  y: -1400,
                  overwrite: true,
               });
            },
         }
      );
   }, []);

   return (
      <div className="mt-0 mb-0 pt-0 pb-0 flex flex-col items-center justify-center h-screen">
         <div>
            <p
               data-speedx="0.025"
               data-speedy="0.155"
               data-speedz="0.015"
               data-rotation="0.02"
               className="hi text-6xl font-black flex pt-[0px] parallax"
            >
               Hi,
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="name text-6xl font-black flex pt-[0px] parallax-name"
            >
               I'm Jaymie Redman,
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="dev text-6xl font-black flex pt-[0px] parallax"
            >
               A Software Developer.
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
