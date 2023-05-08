/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Bmi from "./components/Bmi";

function App() {
  return (
    <div className="h-screen flex justify-center items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Bmi />
    </div>
  );
}

export default App;
