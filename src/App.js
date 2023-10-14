import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
   useEffect(() => {
      const parallax_el = document.querySelectorAll(".parallax");
      let xValue = 0,
         yValue = 0;
      let rotateDegree = 0;

      function update(cursorPosition) {
         parallax_el.forEach((el) => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation;

            let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

            el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
               rotateDegree * rotateSpeed
            }deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
         });
      }

      window.addEventListener("mousemove", (e) => {
         xValue = e.clientX - window.innerWidth / 2;
         yValue = e.clientY - window.innerHeight / 2;

         rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

         update(e.clientX);
      });
   }, []);

   return (
      <>
         <Navbar />

         <section id="home">{<Home />}</section>
         <section id="work">{<Work />}</section>
         <section id="about">{<About />}</section>
         <section id="contact">{<Contact />}</section>
      </>
   );
}

export default App;
