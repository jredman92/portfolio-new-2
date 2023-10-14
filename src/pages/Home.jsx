import React from "react";

const Home = () => {
   return (
      <div>
         {" "}
         <div>
            <p className="text-6xl font-black flex pt-[460px] pl-[830px] text-blue-400">HI</p>
            <div
               className="j absolute"
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
      </div>
   );
};

export default Home;
