import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navbar() {
    return (
        <div className="Home">
            <h1>Navigation</h1>
            <ul>
                <li>Home</li>
                <li>Penguins</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Navbar;