import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import SplitTextJS from "split-text-js";

const Work = () => {
   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(SplitTextJS);

   useEffect(() => {
      let animation = gsap.timeline({ repeat: -1 });
      let targets = document.querySelectorAll(".text-wrapper p");
      let numberOfTargets = targets.length;

      let duration = 0.5;
      let pause = 1;
      let stagger = duration + pause;
      let repeatDelay = duration * (numberOfTargets - 1) + pause;

      gsap.set(".text-wrapper", { autoAlpha: 1 });
      animation
         .from(targets, {
            y: 80,
            duration: duration,
            opacity: 0,
            stagger: {
               each: 2,
               repeat: -1,
               repeatDelay: repeatDelay,
            },
         })
         .to(
            targets,
            {
               y: -80,
               duration: duration,
               opacity: 0,
               stagger: {
                  each: 2,
                  repeat: -1,
                  repeatDelay: repeatDelay,
               },
            },
            stagger
         );
   }, []);

   // useEffect(() => {
   //    const element = document.querySelector(".something");
   //    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });

   //    const lastTitle = new SplitTextJS(element);
   //    tl.from(
   //       lastTitle.chars,
   //       {
   //          opacity: 0,
   //          y: 80,
   //          rotateX: -90,
   //          stagger: 0.02,
   //          duration: 0.7,
   //          delay: 10,
   //       },
   //       "<"
   //    ).to(
   //       lastTitle.chars,
   //       {
   //          opacity: 0,
   //          y: -80,
   //          rotateX: 90,
   //          stagger: 0.02,
   //          duration: 1,
   //          delay: 1,
   //       },
   //       "<1"
   //    );
   // }, []);

   // useEffect(() => {
   //    gsap.fromTo(
   //       ".up",
   //       {
   //          x: 900,
   //          y: -700,
   //       },
   //       {
   //          duration: 1,
   //          x: 900,
   //          y: 0,
   //          delay: 1,
   //          onComplete: () => {
   //             gsap.to(".up", {
   //                scrollTrigger: {
   //                   start: "0px",
   //                   end: "50px",
   //                   scrub: 1,
   //                },

   //                duration: 5,
   //                y: -1400,
   //                overwrite: true,
   //             });
   //          },
   //       }
   //    );
   // }, []);

   useEffect(() => {
      gsap.to(".arrow", {
         x: 0,
         y: 10,
         ease: "power1.in",
         yoyo: true,
         repeat: Infinity,
         duration: 1,
      });
   }, []);

   useEffect(() => {
      gsap.set(".scroll-down", { opacity: 0 });
      gsap.to(".scroll-down", {
         opacity: 1,
         duration: 5,
         delay: 3,
         ease: "power1.out",
      });
   }, []);

   return (
      <>
         <div className="flex items-center h-screen w-screen">
            <div className="intro relative left-10">
               <p>Hi, I'm Jaymie!</p>
               <br />
               <br />
               <br />
               <br />
               <br />
               <div className="flex items-center">
                  <p className="text-left">I'm a</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="text-wrapper text-center">
                     <p className="text-left">full-stack developer.</p>
                     <p className="text-left">musician.</p>
                     <p className="text-left">skateboarder.</p>
                     <p className="text-left">recording artist.</p>
                     <p className="text-left">culinary enthusiast.</p>
                  </div>
                  <div>{/* <p className="text-left something absolute left-48">something.</p> */}</div>
               </div>
            </div>
         </div>
         <div className="scroll-down z-50">
            <p className="absolute bottom-5 left-0 right-10 text-center text-white">Scroll Down</p>
            <p className="arrow absolute bottom-6 left-20 right-0 text-center text-white">↓</p>
         </div>
      </>
   );
};

export default Work;
