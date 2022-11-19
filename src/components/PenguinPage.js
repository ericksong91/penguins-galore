import React from "react";
import { Link, useParams } from "react-router-dom"

function PenguinPage({ penguins }) {
    const index = parseInt(useParams().id) - 1;

    console.log(penguins[index])
    
    const {image, name, desc, id} = penguins[index]

    return (
        <div className="penguins">
            <h2>Name: {name}</h2>
            <img src={image}></img>
            <p>{desc}</p>
            <Link to="/penguins"><button>Return to Penguins</button></Link>
        </div>
    );
}

export default PenguinPage;