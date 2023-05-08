/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useMemo } from "react";

function Bmi() {
  const [height, setHeight] = useState(140);
  const [weight, setWeight] = useState(40);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const heightHandeler = (e) => {
    setHeight(e.target.value);
  };

  const weightHandeler = (e) => {
    setWeight(e.target.value);
  };

  const output = useMemo(() => {
    const height1 = height / 100;
    const bmi = weight / (height1 * height1);
    setBmi(bmi.toFixed(1));
    if (bmi < 25) {
      setMessage("You are underweight");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  }, [height, weight]);

  return (
    <div className="flex flex-col justify-center items-center gap-5 border-none p-20 rounded-md bg-gray-500">
      <div className="bg-blue-700 p-3 rounded-full text-white">
        <h1 className="text-2xl">BMI Calculator</h1>
      </div>
      <form className="flex flex-col">
        <label className="text-2xl">{weight} kg</label>
        <input
          type="range"
          name="weight"
          step={1}
          min={40}
          max={220}
          onChange={weightHandeler}
          className=" w-[300px]"
        />
        <label className="text-2xl">{height} cm</label>
        <input
          type="range"
          name="height"
          min={140}
          max={220}
          onChange={heightHandeler}
        />
      </form>
      <div className="text-center">
        <h1 className="text-2xl">Your Bmi is: </h1>
        <h2 className="border-none rounded-[9999px] bg-blue-800 text-white p-3 mt-2">
          {bmi}
        </h2>
        <p className="mt-3 border-none p-2 bg-slate-800 text-blue-500">
          {message}
        </p>
      </div>
      <button
        type=""
        className="bg-blue-700 text-white p-3 rounded-full"
        onClick={() => {
          setBmi(0);
          setMessage("");
          setHeight(140);
          setWeight(40);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Bmi;
