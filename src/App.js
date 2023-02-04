// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"; 
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze" />
      </div>
      {/* <TextForm/> */}
      {/* <about/> */}
    </>
  );
}

export default App;
