import "./Flex.sass";
import React, { useEffect, useState } from "react";

function FlexButton() {
    const [index, setIndex] = useState(0); 

    const languages = ["Python", "Java", "C#", "C++", "C"];
    let language = languages[index];
    const handleClick = () => {
        setClicked(true);
    };

    let handleSwipe = (() => {
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
            <div class="flex language ">
                <p>Comfortable with: </p>
                <p id="language" class="animate__animated animate__fadeInDown" style={{ padding: "0", display: "inline" }}>{language}</p>
                <br /><button onClick={handleSwipe} class="material-symbols-outlined" style={{ scale: "1", verticalAlign: "middle", padding: "0px", display: "inline-block" }}>
                    chevron_right
                </button>
            </div>
        )
    }
}

export default FlexButton;