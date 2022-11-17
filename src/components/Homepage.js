import React from "react";
import penguinPic from "../images/Penguins_collage.png"
import {
    Link
} from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
        <h1>Welcome to Penguins Galore!</h1>
        <img src={penguinPic} />
        <p>Here at Penguins Galore, we are dedicated to delivering some awesome penguins for you to enjoy!</p>
    </div>
  );
}

export default Homepage;
