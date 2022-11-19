import React from "react";

function PenguinCard({ name, id, img, liked, onLiked }) {

    function handleLikes () {
        fetch(`http://localhost:3001/penguins/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "liked": !liked,
            }),
        })
        .then((r)=>r.json())
        .then((data)=>onLiked(data))
        .catch(()=>alert("Error updating likes!"))
    }

    return (
        <div className="card">
            <h2>{name}</h2>
            <img className="cardImage" src={img} />
            <button>&#x1F9D0; More Details</button>
            <button onClick={() => handleLikes()} className={liked ? "like" : null}>{liked ? "Liked! 😊" : "Like? 😀"}</button>
        </div>
    );
}

export default PenguinCard;