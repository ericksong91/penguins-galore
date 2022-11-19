import React from "react";
import { useParams } from "react-router-dom"

function PenguinPage() {
    const params = useParams()

    console.log(params)

    return (
        <div className="penguins">
            <h2>Name:</h2>
            <p>Image Here</p>
            <p>Description:</p>
        </div>
    );
}

export default PenguinPage;