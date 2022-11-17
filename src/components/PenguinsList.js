import { React, useEffect, useState } from "react";
import "../PenguinList.css"
import PenguinCard from "./PenguinCard";
import PenguinPage from "./PenguinPage";
import NewPenguin from "./NewPenguin";

function PenguinList() {

    const [penguins, setPenguins] = useState([]);
    const [newPeng, setNewPeng] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/penguins")
            .then((r) => r.json())
            .then((data) => setPenguins(data))
    }, [])

    const penguinList = penguins.map((pen) => {
        return <PenguinCard key={pen.id} id={pen.id} name={pen.name}
            desc={pen.desc} img={pen.image}
            liked={pen.liked} setLikes={handleLikes} />
    })

    function handleShow() {
        if (newPeng === false) {
            setNewPeng(true)
        } else {
            setNewPeng(false)
        }
    }

    function handleLikes(id) {
        console.log(id)
    }

    return (
        <div className="penguins">
            {newPeng ? <NewPenguin /> : null}
            <button onClick={handleShow}>{newPeng ? "Hide" : "Add New Penguins!"}</button>
            <br />
            {penguinList}
        </div>
    );
}

export default PenguinList;