import React from "react";

const Home = () => {
   return (
      <div className="mt-0 mb-0 pt-0 pb-0">
         <div>
            <div>
               <p
                  data-speedx="0.025"
                  data-speedy="0.055"
                  data-speedz="0.015"
                  data-rotation="0.02"
                  data-distance="1700"
                  className="text-6xl font-black flex pt-[0px] pl-6 text-blue-400 hi parallax z-10"
               >
                  Hi
               </p>
            </div>
            <div className="j flex">
               <img
                  height="400"
                  width="300"
                  src="img/name-logo.jpg"
                  data-speedx="0.1"
                  data-speedy="0.2"
                  data-speedz="0.2"
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
