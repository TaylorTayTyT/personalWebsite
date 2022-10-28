import "./Flex.sass";
import "animate.css"
import React, {useState} from "react";
function Flex() {
    const langauges = ["Python", "Java", "C#", "C++", "C"];

    const [index, setIndex] = useState(0);

    const element = document.getElementById("languages");

    if (element != null) {
        element.addEventListener('animationend', () => {
            console.log("end");
        })
    };

    return (
        <div>
            <h1 class="flex introRes">Comfortable with:</h1>
            <h1 id="languages" class="flex language animate__animated animate__fadeIn animate__infinite"> Java</h1>
        </div>
    )
}

export default Flex;