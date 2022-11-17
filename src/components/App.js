import React from "react";
import "../App.css";
import Homepage from "./Homepage";
import PenguinList from "./PenguinsList";
import About from "./About";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/penguins" element={<PenguinList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
