import React from "react";
import { Link, useParams } from "react-router-dom"

function PenguinPage({ penguins, onLiked }) {
    const index = parseInt(useParams().id) - 1;

    console.log(penguins[index])

    const { image, name, desc, liked, id } = penguins[index]

    function handleLikes() {
        fetch(`http://localhost:3001/penguins/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "liked": !liked,
            }),
        })
            .then((r) => r.json())
            .then((data) => onLiked(data))
            .catch(() => alert("Error updating likes!"))
    }

    return (
        <div className="penguins">
            <h2>{name}</h2>
            <img src={image}></img>
            <p>{desc}</p>
            <button onClick={() => handleLikes()} className={liked ? "like" : null}>{liked ? "Liked! 😊" : "Like? 😀"}</button>
            <Link to="/penguins"><button>Return to Penguins</button></Link>
        </div>
    );
}

export default PenguinPage;