import {Button} from "@mui/material"
import Flex from "./Flex";
import "./Flex.sass";
import React, {useState} from "react";

function FlexButton() {
    const handleClick = () => {
        Flex(); 
        setClicked(true);
    };

    const [clicked, setClicked] = useState(false);
    if(!clicked) {
    return(
        <div>
            <br></br><br></br><br></br><br></br>
        <button onClick={handleClick} className = "button-45">Languages</button>
        </div>
    )}
    else {
        return(
            <div class = "res"> 
                <h1 class = "flex introRes">Comfortable with: </h1>
                <br/><br/>
                <h1 class = "flex language">Javascript</h1>
            </div>
        )
    }
}

export default FlexButton;