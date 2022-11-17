import { React, useEffect, useState } from "react";
import "../PenguinList.css"
import PenguinCard from "./PenguinCard";
import PenguinPage from "./PenguinPage";
import NewPenguin from "./NewPenguin";

function PenguinList() {

    const [penguins, setPenguins] = useState([]);
    const [newPeng, setNewPeng] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/penguins")
            .then((r) => r.json())
            .then((data) => setPenguins(data))
    }, [])

    const penguinList = penguins.map((pen) => {
        return <PenguinCard key={pen.id} name={pen.name} desc={pen.desc} img={pen.image} likes={pen.likes} />
    })

    return (
        <div className="penguins">
            {newPeng ? <NewPenguin /> : null}
            <button>Add Penguin</button>
            <h1>Penguins Galore!</h1>
            {penguinList}
        </div>
    );
}

export default PenguinList;