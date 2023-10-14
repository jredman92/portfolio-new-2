import { gsap } from "gsap";
import { useEffect } from "react";

const Navbar = () => {
   useEffect(() => {
      const nav = document.querySelector(".nav");

      const tl = gsap.timeline();

      tl.set(nav, { opacity: 0 });

      tl.to(nav, { opacity: 1, duration: 3, delay: 2, ease: "power1.out" });
   }, []);

   return (
      <nav className="nav flex justify-end items-center bg-white text-black pr-96 pt-6">
         <ul className="flex gap-12">
            <li>
               <a href="/">Home</a>
            </li>
            <li>
               <a href="/work">Work</a>
            </li>
            <li>
               <a href="/about">About</a>
            </li>
            <li>
               <a href="/contact">Contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
