import React from "react";
import { Link, useParams } from "react-router-dom"

function PenguinPage({ penguins, onLiked }) {
    const index = parseInt(useParams().id) - 1;
    const { image, name, desc, liked, sciName, id } = penguins[index]

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
            <h2 className="pageName">{name}</h2>
            <h3 className="pageSci">{sciName}</h3>
            <div className="pageCard"><Link to="/penguins"><img src={image} className="pageImg"></img></Link></div>
            <p className="desc">{desc}</p>
            <button onClick={() => handleLikes()} className={liked ? "like" : null}>{liked ? "Liked! 😊" : "Like? 😀"}</button>
            <Link to="/penguins"><button>Return to Penguins</button></Link>
        </div>
    );
}

export default PenguinPage;