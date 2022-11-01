import { Button } from "@mui/material"
import Flex from "./Flex";
import "./Flex.sass";
import React, { useEffect, useState } from "react";

function FlexButton() {
    const languages = ["Python", "Java", "C#", "C++", "C"];
    const [index, setIndex] = useState(0);
    let language = languages[index];
    const handleClick = () => {
        Flex();
        setClicked(true);
    };
    let handleSwipe = (() => {
        console.log("clicked");
        let newInd = (index + 1) % 5;
        setIndex(newInd);
    });

    const [clicked, setClicked] = useState(false);
    if (!clicked) {
        return (
            <div>
                <br></br><br></br><br></br><br></br>
                <button onClick={handleClick} className="button-45">Languages</button>
            </div>
        )
    }
    else {
        return (
            <div class="res">
                <h1 class="flex introRes">Comfortable with: </h1>
                <br /><br />
                <div class="flex language">
                    <h1>{language}<button onClick={handleSwipe} class="material-symbols-outlined" style={{ scale: "2", verticalAlign: "middle", paddingLeft: "10px" }}>
                        chevron_right
                    </button></h1>
                </div>
            </div>
        )
    }
}

export default FlexButton;