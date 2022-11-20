import React from "react";
import image from "../images/ericsong.jpg"

function About() {
    return (
        <div className="about">

            <h1>About the Author</h1>
            <img src={image} alt="Image of Eric Song" />
            <p>Eric Song is a student at Flat Iron School currently working through the software engineering course. 
                He is a former graduate from Penn State University with a B.S. in Chemical Engineering and previously worked in
                the nuclear materials and aerospace defense industries. This project was created using the React JS library 
                to demonstrate a basic single page application.
            </p>
            <br/>
        </div>
    );
}

export default About;