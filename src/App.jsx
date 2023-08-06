import { useEffect, useState } from "react";
import Map from "./components/Map";
import RsvpForm from "./components/RsvpForm";

import smallZia from "./assets/smallzia.gif";

import SlideUp from "./components/SlideUp";

import confetti from "canvas-confetti";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Function to update the screen height when the window is resized
  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenHeight);

    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      gravity: 0.8,
    });
  });

  return (
    <div
      className={`relative mx-auto p-5 bg-home h-screen max-h-[900px] max-w-lg font-Raleway ${
        screenHeight < 700 ? "overflow-x-auto" : ""
      }`}
    >
      {/* slider screen  */}
      <SlideUp />

      <div className="flex flex-col bg-white/90">
        <div className="flex">
          <div className="flex-1 mt-14">
            <h1 className="text-6xl text-center">ZIA</h1>
            <h2 className="text-center">IS TURNING</h2>
            <h1 className="text-6xl text-center">3</h1>
            <p className="text-xs text-center mt-7 text-gray-500">
              {"We'd like you to come and celebrate with us!"}
            </p>
          </div>

          <div>
            <img src={smallZia} alt="" className="w-full" />
          </div>
        </div>

        <RsvpForm />
        <Map screenHeight={screenHeight} />
      </div>

      {/* feedback page after answer submission  */}

      {/* 1. we'll be expecting you */}
      {/* 2. we hope you can come!  */}
      {/* 3. please reach out in case you become available for my party  */}

      <ToastContainer />
    </div>
  );
}

export default App;
