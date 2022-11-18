import React from "react";

function PenguinCard({ name, id, desc, img, liked, setLikes }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img className="cardImage" src={img} />
            <button>&#x1F9D0; More Details</button>
            <button onClick={() => setLikes(id)}>{liked ? "😭 Unlike?" : "😍 Like!"}</button>
        </div>
    );
}

export default PenguinCard;