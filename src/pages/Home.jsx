import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import SplitTextJS from "split-text-js";

const Work = () => {
   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(SplitTextJS);

   useEffect(() => {
      const titles = gsap.utils.toArray(".text-wrapper p");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });

      titles.forEach((title) => {
         const splitTitle = new SplitTextJS(title);
         tl.from(
            splitTitle.chars,
            {
               opacity: 0,
               y: 80,
               rotateX: -90,
               stagger: 0.02,
               duration: 1,
            },
            "<"
         ).to(
            splitTitle.chars,
            {
               opacity: 0,
               y: -80,
               rotateX: 90,
               stagger: 0.02,
               duration: 1,
               delay: 1,
            },
            "<1"
         );
      });
   }, []);

   useEffect(() => {
      const element = document.querySelector(".something");
      const tl = gsap.timeline();

      const lastTitle = new SplitTextJS(element);
      tl.from(
         lastTitle.chars,
         {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            delay: 10.1,
         },
         "<"
      ).to(
         lastTitle.chars,
         {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
            duration: 1,
            delay: 1,
         },
         "<1"
      );
   }, []);

   useEffect(() => {
      const element2 = document.querySelector(".something-2");
      const tl = gsap.timeline();

      const lastTitle = new SplitTextJS(element2);
      tl.from(
         lastTitle.chars,
         {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            delay: 22.1,
         },
         "<"
      ).to(
         lastTitle.chars,
         {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
            duration: 1,
            delay: 1,
         },
         "<1"
      );
   }, []);

   useEffect(() => {
      const element3 = document.querySelector(".something-3");
      const tl = gsap.timeline();

      const lastTitle = new SplitTextJS(element3);
      tl.from(
         lastTitle.chars,
         {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            delay: 34.2,
         },
         "<"
      ).to(
         lastTitle.chars,
         {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
            duration: 1,
            delay: 1,
         },
         "<1"
      );
   }, []);

   useEffect(() => {
      const element3 = document.querySelector(".something-4");
      const tl = gsap.timeline();

      const lastTitle = new SplitTextJS(element3);
      tl.from(
         lastTitle.chars,
         {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            delay: 46.3,
         },
         "<"
      ).to(
         lastTitle.chars,
         {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
            duration: 1,
            delay: 1,
         },
         "<1"
      );
   }, []);
   useEffect(() => {
      const element3 = document.querySelector(".something-5");
      const tl = gsap.timeline();

      const lastTitle = new SplitTextJS(element3);
      tl.from(
         lastTitle.chars,
         {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            delay: 68.4,
         },
         "<"
      ).to(
         lastTitle.chars,
         {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
            duration: 1,
            delay: 1,
         },
         "<1"
      );
   }, []);

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
   //                   end: "10px",
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
         <div className="flex items-center">
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
                     {/* <p className="text-left">faggot.</p> */}
                  </div>
                  <div>
                     <p className="text-left something absolute left-48">something.</p>
                     <p className="text-left something-2 absolute left-48">something.</p>
                     <p className="text-left something-3 absolute left-48">something.</p>
                     <p className="text-left something-4 absolute left-48">something.</p>
                     <p className="text-left something-5 absolute left-48">something.</p>
                  </div>
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
