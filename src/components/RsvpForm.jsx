import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase-config";
import { toast } from "react-toastify";

function RsvpForm() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !response) {
      toast.warn("Full name and response are required.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      await addDoc(collection(db, "invitees"), { name, response });

      let feedback;

      if (response === "yes") {
        feedback = "🦕 Thank you! We'll be expecting you!";
      } else if (response === "not sure") {
        feedback = "🦕 Thank you! We hope you can come!";
      } else {
        feedback = "🦕 Thank you! We hope you become available and reach out.";
      }

      toast.success(feedback, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setResponse("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <h3 className="mt-3 font-semibold">Can you come to my birthday?</h3>
      <div className="mb-3 w-[230px]">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          className="outline-none border-b border-gray-300 py-2 px-1 w-full"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 text-sm justify-center">
          <div className="cursor-pointer">
            <label className="mr-1">Yes</label>
            <input
              name="yes"
              value="yes"
              type="radio"
              checked={response === "yes"}
              onChange={(e) => setResponse(e.target.value)}
            />
          </div>
          <div className="cursor-pointer">
            <label className="mr-1">Not Yet Sure</label>
            <input
              name="notSure"
              value="not sure"
              type="radio"
              checked={response === "not sure"}
              onChange={(e) => setResponse(e.target.value)}
            />
          </div>
          <div className="cursor-pointer">
            <label className="mr-1">{"Can't"}</label>
            <input
              name="cant"
              value="cant"
              type="radio"
              checked={response === "cant"}
              onChange={(e) => setResponse(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="bg-black text-white text-sm w-full py-1 my-2 rounded-md">
          Submit Response
        </button>
      </form>
    </div>
  );
}

export default RsvpForm;
