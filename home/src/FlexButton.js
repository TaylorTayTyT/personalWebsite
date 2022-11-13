import "./Flex.sass";
import React, { useEffect, useState } from "react";
import dino from "./images/dinosaur.png";
import circusBall from "./images/circusBall.png";

function FlexButton() {
    const [index, setIndex] = useState(0);

    const languages = ["Python", "Java", "C#", "C++", "C"];
    let language = languages[index];

    let handleSwipe = (() => {
        let newInd = (index + 1) % 5;
        setIndex(newInd);
    });
    return (
        <div class="flex language">
            <img class="dino" src={dino} alt="dino" />
            <img class="circusBall" src={circusBall} alt="circusBall" />
            <div class="present">
                <p>Comfortable with: </p>
                <p id="language" class="animate__animated animate__fadeInDown" style={{ padding: "0", display: "inline" }}>{language}</p>
                <br /><button onClick={handleSwipe} class="material-symbols-outlined" style={{ scale: "1", verticalAlign: "middle", padding: "0px", display: "inline-block" }}>
                    chevron_right
                </button>
            </div>
            <div className="github">
                <p style={{ display: "block", left: "50%" }}>Check out my <a href="https://github.com/TaylorTayTyT">Github</a></p>
            </div>

        </div>
    )

}

export default FlexButton;