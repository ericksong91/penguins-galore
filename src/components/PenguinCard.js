import React from "react";

function PenguinCard({ name, desc, img }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={img}/>
            <p>Description: {desc}</p>
        </div>
    );
}

export default PenguinCard;