import { React, useState } from "react";
import PenguinCard from "./PenguinCard";
import NewPenguin from "./NewPenguin";

function PenguinList({ penguins, onSubmit, onLiked }) {
    const [newPeng, setNewPeng] = useState(false);

    const penguinList = penguins.map((pen) => {
        return <PenguinCard key={pen.id} id={pen.id} name={pen.name}
            desc={pen.desc} img={pen.image}
            liked={pen.liked} onLiked={onLiked} />
    })

    function handleShow() {
        if (newPeng === false) {
            setNewPeng(true)
        } else {
            setNewPeng(false)
        }
    }

    return (
        <div className="penguins">
            {newPeng ? <NewPenguin onSubmit={onSubmit} /> : null}
            <button onClick={handleShow} className="addPenguin">{newPeng ? "Hide" : "Add New Penguin!"}</button>
            <br />
            {penguinList}
            
        </div>
    );
}

export default PenguinList;