import React from "react";
import Navbar from "./Navbar";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <h1>Homepage!</h1>
            <Route path="/penguins">

            </Route>
        </div>
    );
}

export default Home;