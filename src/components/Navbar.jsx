import { gsap } from "gsap";
import React, { useEffect, useState } from "react";

const Navbar = () => {
   const [isAutoScrolling, setIsAutoScrolling] = useState(false);

   // Define a state variable to disable buttons
   const [disableButtons, setDisableButtons] = useState(false);

   useEffect(() => {
      const container = document.getElementById("nav-container");
      const svg = container.querySelector("svg");
      const circle1 = svg.querySelectorAll("circle")[0];
      const circle2 = svg.querySelectorAll("circle")[1];
      const navlinks = container.querySelectorAll(".nav-links");

      gsap.set(circle1, { transformOrigin: "50%" });
      gsap.set(circle2, { transformOrigin: "50%" });

      navlinks.forEach((link, index) => {
         link.addEventListener("click", (e) => {
            let tl1 = gsap.timeline({ paused: true });
            let tl2 = gsap.timeline({ paused: true });

            tl1.to(circle1, {
               x: 100 * index,
               duration: 0.25,
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
                  duration: 0.3,
                  ease: "sine.inOut",
               },
               0
            );
            tl2.to(
               circle2,
               {
                  scaleX: 2.1,
                  scaleY: 0.8,
                  duration: 0.3,
                  ease: "sine.inOut",
               },
               0
            );
            tl2.to(circle2, {
               scaleX: 1,
               scaleY: 1,
               duration: 0.3,
               ease: "sine.inOut",
            });

            tl1.play();
            tl2.play();
         });
      });

      const customEase = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

      // Function to handle scrolling to a section
      const scrollToSection = (sectionId) => {
         if (isAutoScrolling) {
            // Ignore scrolling if auto-scrolling is in progress
            return;
         }

         setIsAutoScrolling(true);
         // Disable buttons during auto-scrolling
         setDisableButtons(true);

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

            setTimeout(() => {
               setIsAutoScrolling(false);
               // Re-enable buttons after auto-scrolling is finished
               setDisableButtons(false);
            }, duration);
         }
      };

      // Attach event listeners to the buttons to trigger scrolling
      const buttons = document.querySelectorAll(".nav-links");

      buttons.forEach((button) => {
         button.addEventListener("click", (e) => {
            const sectionId = e.target.dataset.section;

            scrollToSection(sectionId);
         });
      });

      // Define an array to store the top positions of each section
      const sectionTops = Array.from(navlinks).map((link) => {
         const sectionId = link.dataset.section;
         const section = document.getElementById(sectionId);
         return section.offsetTop;
      });

      // Function to update circle positions
      const updateCirclePositions = () => {
         if (!isAutoScrolling) {
            const scrollPosition = window.scrollY;

            let closestSectionIndex = 0;

            for (let i = 0; i < sectionTops.length; i++) {
               if (
                  Math.abs(sectionTops[i] - scrollPosition) <
                  Math.abs(sectionTops[closestSectionIndex] - scrollPosition)
               ) {
                  closestSectionIndex = i;
               }
            }

            let targetX = closestSectionIndex * 100;

            const threshold = sectionTops[closestSectionIndex];

            if (scrollPosition >= threshold) {
               gsap.to(circle1, { x: targetX, duration: 0.25, ease: "sine.inOut" });
               gsap.to(circle2, { x: targetX, duration: 0.25, ease: "sine.inOut" });
            }
         }
      };

      window.addEventListener("scroll", updateCirclePositions);

      return () => {
         window.removeEventListener("scroll", updateCirclePositions);
      };
   }, [isAutoScrolling]);

   useEffect(() => {
      gsap.set(".nav", { opacity: 0 });
      gsap.to(".nav", {
         opacity: 1,
         duration: 5,
         delay: 0,
         ease: "power1.out",
      });
   }, []);

   return (
      <nav className="nav flex top-0 right-0 fixed justify-end items-center text-black pr-96 pt-6 z-50">
         <div id="nav-container">
            <svg
               width="430"
               height="120"
               xmlns="http://www.w3.org/2000/svg"
            >
               <filter id="blurMe">
                  <feGaussianBlur
                     in="SourceGraphic"
                     stdDeviation="1"
                  />
               </filter>
               <circle
                  cx="205"
                  cy="25"
                  r="5"
               />
               <circle
                  cx="205"
                  cy="25"
                  r="5"
                  filter="url(#blurMe)"
               />
            </svg>

            <div>
               <ul className="flex gap-12">
                  <li>
                     <button
                        className="nav-links"
                        data-section="home"
                        disabled={disableButtons} // Disable button if disableButtons is true
                     >
                        Home
                     </button>
                  </li>
                  <li>
                     <button
                        className="nav-links"
                        data-section="work"
                        disabled={disableButtons} // Disable button if disableButtons is true
                     >
                        Work
                     </button>
                  </li>
                  <li>
                     <button
                        className="nav-links"
                        data-section="about"
                        disabled={disableButtons} // Disable button if disableButtons is true
                     >
                        About
                     </button>
                  </li>
                  <li>
                     <button
                        className="nav-links"
                        data-section="contact"
                        disabled={disableButtons} // Disable button if disableButtons is true
                     >
                        Contact
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
