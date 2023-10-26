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
         },
         {
            rotation: -690,
            duration: 5,
            x: 300,
            delay: 4,
            onComplete: () => {
               gsap.to(".j", {
                  scrollTrigger: {
                     start: "50px",
                     end: "500px",
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
   }, []);

   useEffect(() => {
      gsap.fromTo(
         ".up",
         {
            x: 900,
            y: -700,
         },
         {
            duration: 1,
            x: 900,
            y: 0,
            delay: 4,
            onComplete: () => {
               gsap.to(".up", {
                  scrollTrigger: {
                     start: "0px",
                     end: "50px",
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
         <div className="mt-0 mb-0 pt-0 pb-0 flex flex-col items-center justify-center h-screen">
            <div>
               <div className="up z-50">
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="h text-6xl font-black flex pt-[0px] parallax"
                  >
                     H
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="i-1 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     i
                  </p>
                  <p
                     data-speedx="0.001"
                     data-speedy="0.001"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="comma text-6xl font-black flex pt-[0px] parallax"
                  >
                     ,
                  </p>

                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="I text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     I
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="comma-2 text-6xl font-black flex pt-[0px] parallax"
                  >
                     '
                  </p>
                  <p
                     data-speedx="0.001"
                     data-speedy="0.001"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="m text-6xl font-black flex pt-[0px] parallax"
                  >
                     m
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="j-2 text-6xl font-black flex pt-[0px] parallax"
                  >
                     J
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="a text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     a
                  </p>
                  <p
                     data-speedx="0.001"
                     data-speedy="0.001"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="y text-6xl font-black flex pt-[0px] parallax"
                  >
                     y
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="m-2 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     m
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="i-2 text-6xl font-black flex pt-[0px] parallax"
                  >
                     i
                  </p>
                  <p
                     data-speedx="0.001"
                     data-speedy="0.001"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="e text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     e
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="R text-6xl font-black flex pt-[0px] parallax"
                  >
                     R
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="e-2 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     e
                  </p>
                  <p
                     data-speedx="0.001"
                     data-speedy="0.001"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="d text-6xl font-black flex pt-[0px] parallax"
                  >
                     d
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="m-3 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     m
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="a-2 text-6xl font-black flex pt-[0px] parallax"
                  >
                     a
                  </p>
                  <p
                     data-speedx="0.001"
                     data-speedy="0.001"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="n text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     n
                  </p>

                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="comma-3 text-6xl font-black flex pt-[0px] parallax"
                  >
                     ,
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="A text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     A
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="S text-6xl font-black flex pt-[0px] parallax"
                  >
                     S
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="o text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     o
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="f text-6xl font-black flex pt-[0px] parallax"
                  >
                     f
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="t text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     t
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="w text-6xl font-black flex pt-[0px] parallax"
                  >
                     w
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="a-3 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     a
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="r text-6xl font-black flex pt-[0px] parallax"
                  >
                     r
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="e-3 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     e
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="D text-6xl font-black flex pt-[0px] parallax"
                  >
                     D
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="e-4 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     e
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="v text-6xl font-black flex pt-[0px] parallax"
                  >
                     v
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="e-5 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     e
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="l text-6xl font-black flex pt-[0px] parallax"
                  >
                     l
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="o-2 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     o
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="p text-6xl font-black flex pt-[0px] parallax"
                  >
                     p
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="e-6 text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     e
                  </p>
                  <p
                     data-speedx="0.005"
                     data-speedy="0.005"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="r-2 text-6xl font-black flex pt-[0px] parallax"
                  >
                     r
                  </p>
                  <p
                     data-speedx="0.004"
                     data-speedy="0.004"
                     data-speedz="0.005"
                     data-rotation="0.02"
                     className="period text-6xl font-black flex pt-[0px] parallax-name"
                  >
                     .
                  </p>
               </div>
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
                     style={{ "--i": 0 }}
                  />
               </div>
            </section>
         </div>
         <div className="scroll-down z-50">
            <p className="absolute bottom-5 left-0 right-10 text-center text-white">Scroll Down</p>
            <p className="arrow absolute bottom-6 left-20 right-0 text-center text-white">↓</p>
         </div>
      </>
   );
};

export default Work;
