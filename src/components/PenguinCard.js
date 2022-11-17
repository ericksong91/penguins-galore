import React from "react";

function PenguinCard({ name, desc, img, likes }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={img}/>
            <p>Description: {desc}</p>
            <p>Liked: {likes} times!</p>
            <button>&#x1F60D;</button>
        </div>
    );
}

export default PenguinCard;