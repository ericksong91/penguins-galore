import React from "react";
import image from "../images/ericsong.jpg"

function About() {
    return (
        <div className="about">
            <img src={image} alt="Image of Eric Song" />
            <h1>About the Author</h1>
            <p>Eric Song is a student at Flat Iron School currently working on their software engineering course. 
                He is a former graduate from Penn State University with a B.S. in Chemical Engineering and worked in
                the nuclear materials and aerospace defense industries before deciding on a career change in web development.
            </p>
            <br/>
        </div>
    );
}

export default About;