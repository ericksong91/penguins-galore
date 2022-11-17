import React from "react";

function PenguinCard({ name, desc, img, likes }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img className="cardImage" src={img}/>
            <p>Liked: {likes} times!</p>
            <button>&#x1F60D; Like!</button>
        </div>
    );
}

export default PenguinCard;