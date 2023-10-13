import "./App.css";
import Navbar from "./components/Navbar";
import j from "./images/name-logo.jpg";

function App() {
   return (
      <>
         <Navbar />

         <div
            className="j"
            style={{ height: "100vh" }}
         >
            <img
               height="400"
               width="300"
               src={j}
               alt="logo"
            />
         </div>
      </>
   );
}

export default App;
