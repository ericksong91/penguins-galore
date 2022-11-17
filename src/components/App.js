import React from "react";
import "../App.css";
import Navbar from "./Navbar";
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
        <Route path="/" element={
          <h1>Homepage!</h1>
        } />
        <Route path="/penguins" element={<PenguinList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
