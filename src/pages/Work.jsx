import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Work = () => {
   const imgRef = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      gsap.fromTo(
         ".j",
         {
            rotation: 1,
            x: -1400,
            y: -200,
         },
         {
            rotation: 360,
            duration: 5,
            x: 300,
            y: -200,
            scrollTrigger: {
               start: "600px",
               end: "800px",
               scrub: 1,
            },
            onComplete: () => {
               gsap.fromTo(
                  ".j",
                  {
                     x: 300,
                     y: -200,
                  },
                  {
                     rotation: 1080,
                     x: 1400,
                     y: -200,
                     scrollTrigger: {
                        start: "1100px",
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

   useEffect(() => {
      gsap.fromTo(
         ".work",
         {
            scale: 1,
            x: 0,
            y: 0,
         },
         {
            scale: 3,
            x: 0,
            y: 0,
            scrollTrigger: {
               start: "600px",
               end: "800px",
               scrub: 1,
            },
            onComplete: () => {
               gsap.fromTo(
                  ".work",
                  {
                     x: 0,
                     y: 0,
                     scale: 3,
                  },
                  {
                     scale: 1,
                     x: 0,
                     y: 0,
                     scrollTrigger: {
                        start: "1100px",
                        end: "2500px",
                        scrub: 1,
                        duration: 3,
                     },
                     overwrite: false,
                  }
               );
            },
         }
      );
   }, []);

   useEffect(() => {
      gsap.fromTo(
         ".square",
         {
            rotation: 1,
            x: 1400,
            y: -100,
         },
         {
            rotation: 360,
            duration: 5,
            x: -400,
            y: -100,
            scrollTrigger: {
               start: "600px",
               end: "800px",
               scrub: 1,
            },
            onComplete: () => {
               gsap.fromTo(
                  ".square",
                  {
                     x: -400,
                     y: -100,
                  },
                  {
                     rotation: 1080,
                     x: -1400,
                     y: -100,
                     scrollTrigger: {
                        start: "1100px",
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
      <section className="mt-0 mb-0 pt-0 pb-0 text-black flex flex-col items-center justify-center h-screen">
         <h1 className="work">
            <div>Work</div>
         </h1>
         <div>
            <div className="square"></div>
         </div>
         <section className="flex">
            <div className="images">
               <img
                  height="400"
                  width="300"
                  src="img/j.png"
                  className="parallax animate j"
                  alt=""
                  ref={imgRef}
               />
            </div>
         </section>
      </section>
   );
};

export default Work;
