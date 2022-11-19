import React from "react";
import penguinPic from "../images/Penguins_collage.png"
import PenguinList from "./PenguinsList";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
      <h1>Welcome to Penguins Galore!</h1>
      <img src={penguinPic} alt="penguin collage" />
      <p>Here at Penguins Galore, we are dedicated to delivering some awesome penguins for you to enjoy!</p>
      <Link to="/penguins" style={{ padding: 5 }}>
        <button>Click Here to See Penguins!</button>
      </Link>
    </div>
  );
}

export default Homepage;
