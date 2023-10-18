import { Sine, gsap } from "gsap";
import React, { useEffect, useLayoutEffect } from "react";

const Navbar = () => {
   useEffect(() => {
      // Initialize your animations and event listeners here
      const container = document.getElementById("nav-container");
      const svg = container.querySelector("svg");
      const circle1 = svg.querySelectorAll("circle")[0];
      const circle2 = svg.querySelectorAll("circle")[1];
      const navlinks = container.querySelectorAll(".nav-links");

      gsap.set(circle1, { transformOrigin: "50%" });
      gsap.set(circle2, { transformOrigin: "50%" });
      gsap.registerPlugin(Sine);

      navlinks.forEach((link, index) => {
         link.addEventListener("click", (e) => {
            let tl1 = gsap.timeline({ paused: true });
            let tl2 = gsap.timeline({ paused: true, delay: 0.1 });

            tl1.to(circle1, {
               x: 100 * index,
               duration: 0.5,
               ease: "sine.inOut",
            });
            tl1.to(
               circle1,
               {
                  scaleX: 2.1,
                  scaleY: 0.8,
                  duration: 0.25,
                  ease: "sine.inOut",
               },
               0
            );
            tl1.to(circle1, {
               scaleX: 1,
               scaleY: 1,
               duration: 0.25,
               ease: "sine.inOut",
            });
            tl2.to(
               circle2,
               {
                  x: 100 * index,
                  duration: 0.5,
                  ease: "sine.inOut",
               },
               0.25
            );
            tl2.to(
               circle2,
               {
                  scaleX: 2.1,
                  scaleY: 0.8,
                  duration: 0.25,
                  ease: "sine.inOut",
               },
               0
            );
            tl2.to(circle2, {
               scaleX: 1,
               scaleY: 1,
               duration: 0.25,
               ease: "sine.inOut",
            });

            tl1.play();
            tl2.play();
         });
      });

      gsap.set(".nav", { opacity: 0 });
      gsap.to(".nav", {
         opacity: 1,
         duration: 3,
         delay: 2,
         ease: "power1.out",
      });

      // Your scroll animation and

      const customEase = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

      // Function to handle scrolling to a section
      const scrollToSection = (sectionId) => {
         const section = document.getElementById(sectionId);

         if (section) {
            const startPosition = window.scrollY;
            const targetPosition = section.getBoundingClientRect().top + window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 2000;

            let startTime = null;

            function scrollAnimation(currentTime) {
               if (!startTime) startTime = currentTime;

               const timeElapsed = currentTime - startTime;
               const scrollProgress = Math.min(timeElapsed / duration, 1);
               const easedProgress = customEase(scrollProgress);

               const newPosition = startPosition + distance * easedProgress;

               window.scrollTo(0, newPosition);

               if (scrollProgress < 1) {
                  requestAnimationFrame(scrollAnimation);
               }
            }

            requestAnimationFrame(scrollAnimation);
         }
      };

      // Attach event listeners to the buttons to trigger scrolling
      const buttons = document.querySelectorAll(".nav-links");

      buttons.forEach((button, index) => {
         button.addEventListener("click", (e) => {
            const sectionId = e.target.dataset.section;
            scrollToSection(sectionId);
         });
      });
   }, []);

   return (
      <>
         <div id="nav-container">
            <svg
               width="230"
               height="120"
               xmlns="http://www.w3.org/2000/svg"
            >
               <filter id="blurMe">
                  <feGaussianBlur
                     in="SourceGraphic"
                     stdDeviation="5"
                  />
               </filter>
               <circle
                  cx="60"
                  cy="80"
                  r="50"
                  fill="green"
               />
               <circle
                  cx="60"
                  cy="80"
                  r="50"
                  fill="green"
                  filter="url(#blurMe)"
               />
            </svg>

            <nav className="nav flex top-0 right-0 fixed justify-end items-center text-black pr-96 pt-6 z-50 h-50">
               <ul className="flex gap-12">
                  <li>
                     <button
                        className="nav-links"
                        data-section="home"
                     >
                        Home
                     </button>
                  </li>
                  <li>
                     <button
                        className="nav-links"
                        data-section="work"
                     >
                        Work
                     </button>
                  </li>
                  <li>
                     <button
                        className="nav-links"
                        data-section="about"
                     >
                        About
                     </button>
                  </li>
                  <li>
                     <button
                        className="nav-links"
                        data-section="contact"
                     >
                        Contact
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   );
};

export default Navbar;
