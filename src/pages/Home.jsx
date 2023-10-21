import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Work = () => {
   const imgRef = useRef(null);
   gsap.registerPlugin(ScrollTrigger);

   gsap.fromTo(
      ".j",
      {
         x: 1400,
      },
      {
         rotation: -690,
         duration: 5,
         x: 300,
         delay: 3,
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
               delay: 0,
            });
         },
      }
   );

   gsap.fromTo(
      ".h",
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
            gsap.to(".h", {
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

   gsap.fromTo(
      ".eye",
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
            gsap.to(".eye", {
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

   gsap.fromTo(
      ".comma",
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
            gsap.to(".comma", {
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

   return (
      <div className="mt-0 mb-0 pt-0 pb-0 flex flex-col items-center justify-center h-screen">
         <div>
            <p
               data-speedx="0.030"
               data-speedy="0.105"
               data-speedz="0.015"
               data-rotation="0.02"
               className="h text-6xl font-black flex pt-[0px] parallax"
            >
               H
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.095"
               data-speedz="0.015"
               data-rotation="0.02"
               className="eye text-6xl font-black flex pt-[0px] parallax"
            >
               i
            </p>
            <p
               data-speedx="0.032"
               data-speedy="0.080"
               data-speedz="0.015"
               data-rotation="0.02"
               className="comma text-6xl font-black flex pt-[0px] parallax"
            >
               ,
            </p>
            <p
               data-speedx="0.030"
               data-speedy="0.105"
               data-speedz="0.015"
               data-rotation="0.02"
               className="I text-6xl font-black flex pt-[0px] parallax"
            >
               I
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.095"
               data-speedz="0.015"
               data-rotation="0.02"
               className="comma-2 text-6xl font-black flex pt-[0px] parallax"
            >
               '
            </p>
            <p
               data-speedx="0.042"
               data-speedy="0.080"
               data-speedz="0.015"
               data-rotation="0.02"
               className="m text-6xl font-black flex pt-[0px] parallax"
            >
               m
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="j-2 text-6xl font-black flex pt-[0px] parallax-name"
            >
               J
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="a text-6xl font-black flex pt-[0px] parallax-name"
            >
               a
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="y text-6xl font-black flex pt-[0px] parallax-name"
            >
               y
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="m-2 text-6xl font-black flex pt-[0px] parallax-name"
            >
               m
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="i-2 text-6xl font-black flex pt-[0px] parallax-name"
            >
               i
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="e text-6xl font-black flex pt-[0px] parallax-name"
            >
               e
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="R text-6xl font-black flex pt-[0px] parallax-name"
            >
               R,
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="e-2 text-6xl font-black flex pt-[0px] parallax-name"
            >
               e
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="d text-6xl font-black flex pt-[0px] parallax-name"
            >
               d
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="m-3 text-6xl font-black flex pt-[0px] parallax-name"
            >
               m
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="a-2 text-6xl font-black flex pt-[0px] parallax-name"
            >
               a
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="n text-6xl font-black flex pt-[0px] parallax-name"
            >
               n
            </p>
            <p
               data-speedx="0.025"
               data-speedy="0.075"
               data-speedz="0.015"
               data-rotation="0.02"
               className="comma-3 text-6xl font-black flex pt-[0px] parallax-name"
            >
               ,
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="A text-6xl font-black flex pt-[0px] parallax"
            >
               A
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="S text-6xl font-black flex pt-[0px] parallax"
            >
               S
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="o text-6xl font-black flex pt-[0px] parallax"
            >
               o
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="f text-6xl font-black flex pt-[0px] parallax"
            >
               f
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="t text-6xl font-black flex pt-[0px] parallax"
            >
               t
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="w text-6xl font-black flex pt-[0px] parallax"
            >
               w
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="a-3 text-6xl font-black flex pt-[0px] parallax"
            >
               a
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="r text-6xl font-black flex pt-[0px] parallax"
            >
               r
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="e-3 text-6xl font-black flex pt-[0px] parallax"
            >
               e
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="D text-6xl font-black flex pt-[0px] parallax"
            >
               D
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="e-4 text-6xl font-black flex pt-[0px] parallax"
            >
               e
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="v text-6xl font-black flex pt-[0px] parallax"
            >
               v
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="e-5 text-6xl font-black flex pt-[0px] parallax"
            >
               e
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="l text-6xl font-black flex pt-[0px] parallax"
            >
               l
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="o-2 text-6xl font-black flex pt-[0px] parallax"
            >
               o
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="p text-6xl font-black flex pt-[0px] parallax"
            >
               p
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="e-6 text-6xl font-black flex pt-[0px] parallax"
            >
               e
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="r-2 text-6xl font-black flex pt-[0px] parallax"
            >
               r
            </p>
            <p
               data-speedx="0.105"
               data-speedy="0.04"
               data-speedz="0.015"
               data-rotation="0.02"
               className="period text-6xl font-black flex pt-[0px] parallax"
            >
               .
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
