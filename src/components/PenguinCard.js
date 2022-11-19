import React from "react";
import {
    Link
} from "react-router-dom"

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
            <Link to={`/penguins/${id}`}><img className="cardImage" src={img} /></Link>
            <Link to={`/penguins/${id}`}><button>&#x1F9D0; More Details</button></Link>
            <button onClick={() => handleLikes()} className={liked ? "like" : null}>{liked ? "Liked! 😊" : "Like? 😀"}</button>
        </div>
    );
}

export default PenguinCard;