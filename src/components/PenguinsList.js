import { React, useEffect, useState } from "react";
import "../PenguinList.css"
import PenguinCard from "./PenguinCard";
import PenguinPage from "./PenguinPage";
import NewPenguin from "./NewPenguin";

function PenguinList() {
    //

    const [penguins, setPenguins] = useState([]);
    const [newPeng, setNewPeng] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/penguins")
            .then((r) => r.json())
            .then((data) => setPenguins(data))
            .catch(() => alert("Error grabbing penguins!"))
    }, [])

    const penguinList = penguins.map((pen) => {
        return <PenguinCard key={pen.id} id={pen.id} name={pen.name}
            desc={pen.desc} img={pen.image}
            liked={pen.liked} onLiked={handleLikes} />
    })

    //

    function handleShow() {
        if (newPeng === false) {
            setNewPeng(true)
        } else {
            setNewPeng(false)
        }
    }

    //

    function handleLikes(likedPenguin) {
        console.log(likedPenguin)

        const updatedPenguins = penguins.map((peng) => {
            if (peng.id === likedPenguin.id) {
                return likedPenguin;
            } else {
                return peng
            }
        })

        setPenguins(updatedPenguins)
    }

    //

    function handleNewSubmit() {
        console.log("Submitting new Penguins....")
        fetch("http://localhost:3001/penguins")
            .then((r) => r.json())
            .then((data) => setPenguins(data))
            .catch(() => alert("Error grabbing penguins!"))
    }

    //

    return (
        <div className="penguins">
            {newPeng ? <NewPenguin onSubmit={handleNewSubmit} /> : null}
            <button onClick={handleShow}>{newPeng ? "Hide" : "Add New Penguin!"}</button>
            <br />
            {penguinList}
        </div>
    );
}

export default PenguinList;