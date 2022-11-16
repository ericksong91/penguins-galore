import { React, useEffect, useState } from "react";
import PenguinCard from "./PenguinCard";
import PenguinPage from "./PenguinPage";

function PenguinList() {

    const [penguins, setPenguins] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/penguins")
            .then((r) => r.json())
            .then((data) => setPenguins(data))
    }, [])

    const penguinList = penguins.map((pen) => {
        return <PenguinCard key={pen.id} name={pen.name} desc={pen.desc} img={pen.image} />
    })

    return (
        <div className="penguins">
            <h2>Penguins Here:</h2>
            {penguinList}
        </div>
    );
}

export default PenguinList;