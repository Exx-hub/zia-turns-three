import { useState } from "react";
import dinoBalloon from "../assets/dino-balloon.jpg";

function SlideUp() {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "sidebarSlide active" : "sidebarSlide"}>
      <div className="flex flex-col items-center mb-24">
        <img src={dinoBalloon} alt="" />
        <button
          onClick={() => setShow(false)}
          className="border border-black/70 rounded-md px-2 py-1 animate-pulse bg-[#72BE8D]"
        >
          Enter Here
        </button>
      </div>
    </div>
  );
}

export default SlideUp;
