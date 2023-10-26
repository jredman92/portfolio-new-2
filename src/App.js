import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StartAnimation from "./components/StartAnimation";
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

   useEffect(() => {
      const parallax_el = document.querySelectorAll(".parallax-name");
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
            }deg) translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
         });
      }

      window.addEventListener("mousemove", (e) => {
         xValue = e.clientX - window.innerWidth / 2;
         yValue = e.clientY - window.innerHeight / 2;

         rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

         update(e.clientX);
      });
   }, []);

   // useEffect(() => {
   //    const sections = [
   //       { id: "home", colorStart: [255, 100, 150], colorEnd: [255, 100, 150] },
   //       { id: "work", colorStart: [255, 100, 150], colorEnd: [200, 200, 100] },
   //       { id: "about", colorStart: [200, 200, 100], colorEnd: [0, 255, 0] },
   //       { id: "contact", colorStart: [0, 255, 0], colorEnd: [0, 0, 255] },
   //    ];

   //    const handleScroll = () => {
   //       const scrollPosition = window.scrollY;

   //       sections.forEach((section) => {
   //          const el = document.getElementById(section.id);
   //          const { colorStart, colorEnd } = section;
   //          const sectionStart = el.offsetTop;
   //          const sectionHeight = el.offsetHeight;

   //          if (scrollPosition >= sectionStart && scrollPosition < sectionStart + sectionHeight) {
   //             const t = (scrollPosition - sectionStart) / sectionHeight;
   //             const r = Math.round(colorStart[0] + t * (colorEnd[0] - colorStart[0]));
   //             const g = Math.round(colorStart[1] + t * (colorEnd[1] - colorStart[1]));
   //             const b = Math.round(colorStart[2] + t * (colorEnd[2] - colorStart[2]));
   //             el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   //          } else {
   //             el.style.backgroundColor = "";
   //          }
   //       });
   //    };

   //    window.addEventListener("scroll", handleScroll);

   //    return () => {
   //       window.removeEventListener("scroll", handleScroll);
   //    };
   // }, []);

   return (
      <>
         <StartAnimation />
         <div className="start-screen">
            <div className="all-pages">
               <Navbar />
               <section
                  className="home-section"
                  id="home"
               >
                  {<Home />}
               </section>
               <section
                  className="work-section"
                  id="work"
               >
                  {<Work />}
               </section>
               <section
                  className="about-section"
                  id="about"
               >
                  {<About />}
               </section>
               <section
                  className="contact-section"
                  id="contact"
               >
                  {<Contact />}
               </section>
            </div>
         </div>
      </>
   );
}

export default App;
