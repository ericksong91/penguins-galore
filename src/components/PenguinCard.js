import { React, useState } from "react";

function PenguinCard({ name, id, desc, img, likes }) {

    function handleClick() {

    }

    return (
        <div className="card">
            <h2>{name}</h2>
            <img className="cardImage" src={img} />
            <button>&#x1F9D0; More Details</button>
            <button onClick={handleClick}>&#x1F60D; Like!</button>
        </div>
    );
}

export default PenguinCard;