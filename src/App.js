import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

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

         <div>
            <p className="text-6xl font-black flex pt-[460px] pl-[830px] text-blue-400">HI</p>
            <div
               className="j"
               style={{ height: "100vh" }}
            >
               <img
                  height="400"
                  width="300"
                  src="img/name-logo.jpg"
                  data-speedx="0.025"
                  data-speedy="0.055"
                  data-speedz="0.015"
                  data-rotation="0.02"
                  data-distance="1700"
                  alt=""
                  className="parallax j"
               />
            </div>
         </div>
      </>
   );
}

export default App;
