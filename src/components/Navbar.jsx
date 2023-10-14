import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";

const Navbar = () => {
   useLayoutEffect(() => {
      gsap.set(".nav", { opacity: 0 });
      gsap.to(".nav", { opacity: 1, duration: 3, delay: 2, ease: "power1.out" });
   }, []);

   // Define a custom cubic bezier easing function for the scroll animation
   const customEase = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

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
            const easedProgress = customEase(scrollProgress); // Use the custom easing function
            const newPosition = startPosition + distance * easedProgress;

            window.scrollTo(0, newPosition);

            if (scrollProgress < 1) {
               requestAnimationFrame(scrollAnimation);
            }
         }

         requestAnimationFrame(scrollAnimation);
      }
   };

   return (
      <nav className="nav flex top-0 right-0 fixed justify-end items-center text-black pr-96 pt-6">
         <ul className="flex gap-12">
            <li>
               <button
                  className="nav-links"
                  onClick={() => scrollToSection("home")}
               >
                  Home
               </button>
            </li>
            <li>
               <button
                  className="nav-links"
                  onClick={() => scrollToSection("work")}
               >
                  Work
               </button>
            </li>
            <li>
               <button
                  className="nav-links"
                  onClick={() => scrollToSection("about")}
               >
                  About
               </button>
            </li>
            <li>
               <button
                  className="nav-links"
                  onClick={() => scrollToSection("contact")}
               >
                  Contact
               </button>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
