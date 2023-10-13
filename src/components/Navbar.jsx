import React from "react";

const Navbar = () => {
   return (
      <nav className="nav">
         <a
            href="/"
            className="text-xl"
         >
            Site Name
         </a>
         <ul>
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