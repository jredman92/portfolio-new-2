import gsap from "gsap";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
   useEffect(() => {
      gsap.set(".all-pages", { opacity: 0 }); // Set the initial opacity to 0

      gsap.to(".all-pages", {
         opacity: 1,
         duration: 2,
         delay: 0,
         ease: "power1.out",
      });
   }, []);

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
      gsap.set(".all-pages", { opacity: 0 }); // Set the initial opacity to 0

      gsap.to(".all-pages", {
         opacity: 1,
         duration: 2,
         delay: 0,
         ease: "power1.out",
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
            }deg) translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
         });
      }

      window.addEventListener("mousemove", (e) => {
         xValue = e.clientX - window.innerWidth / 2;
         yValue = e.clientY - window.innerHeight / 2;

         rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

         update(e.clientX);
      });
   }, []);

   // const handleScroll = () => {
   //    const homeSection = document.getElementById("home");
   //    const workSection = document.getElementById("work");
   //    const aboutSection = document.getElementById("about");
   //    const contactSection = document.getElementById("contact");
   //    const scrollPosition = window.scrollY;
   //    const homeSectionHeight = homeSection.offsetHeight;
   //    const workSectionHeight = workSection.offsetHeight;
   //    const aboutSectionHeight = aboutSection.offsetHeight;
   //    const workSectionStart = homeSectionHeight;
   //    const aboutSectionStart = workSectionStart + workSectionHeight;
   //    const contactSectionStart = aboutSectionStart + aboutSectionHeight;

   //    if (scrollPosition < workSectionStart) {
   //       const t = scrollPosition / workSectionStart;
   //       const r = Math.round(255 - t * 100);
   //       const g = 100;
   //       const b = Math.round(150 + t * 100);
   //       homeSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   //    } else {
   //       homeSection.style.backgroundColor = ""; // Clear the background color
   //    }

   //    if (scrollPosition >= workSectionStart && scrollPosition < aboutSectionStart) {
   //       const t = (scrollPosition - workSectionStart) / (aboutSectionStart - workSectionStart);
   //       workSection.style.backgroundColor = `rgb(255, ${Math.round(100 + t * 100)}, ${Math.round(200 - t * 100)})`;
   //    } else {
   //       workSection.style.backgroundColor = ""; // Clear the background color
   //    }

   //    if (scrollPosition >= aboutSectionStart && scrollPosition < contactSectionStart) {
   //       const t = (scrollPosition - aboutSectionStart) / (contactSectionStart - aboutSectionStart);
   //       aboutSection.style.backgroundColor = `rgb(255, ${Math.round(0 + t * 100)}, ${Math.round(150 + t * 100)})`;
   //    } else {
   //       aboutSection.style.backgroundColor = ""; // Clear the background color
   //    }

   //    if (scrollPosition >= contactSectionStart) {
   //       const t = (scrollPosition - contactSectionStart) / contactSection.offsetHeight;
   //       contactSection.style.backgroundColor = `rgb(211, ${Math.round(100 - t * 200)}, ${Math.round(200 + t * 100)})`;
   //    } else {
   //       contactSection.style.backgroundColor = ""; // Clear the background color
   //    }
   // };

   // useEffect(() => {
   //    // Attach the scroll event listener
   //    window.addEventListener("scroll", handleScroll);

   //    return () => {
   //       // Remove the event listener when the component unmounts
   //       window.removeEventListener("scroll", handleScroll);
   //    };
   // }, []);

   return (
      <>
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
      </>
   );
}

export default App;
