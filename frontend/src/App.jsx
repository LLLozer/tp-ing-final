import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Tgs from "./pages/Tgs";
import Requirements from "./pages/Requirements";
import BPMN from "./pages/BPMN";

function App() {
  return (
    <>
      <HomePage />
      <Tgs />
      <Requirements />
      <BPMN />
    </>
  );
}

export default App;
