import "./Flex.sass";
import "animate.css"
import React, { useEffect, useState } from "react";
function Flex() {
    const langauges = ["Python", "Java", "C#", "C++", "C"];
    const element = document.getElementById("languages");

    const animateCSS = (animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.getElementById("languages");
            if(node === null) {
                reject("Could not Find element")
            }

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd);
            resolve("Success!");
        }
        );

    animateCSS('.my-element', 'fadeIn')
    .then((message) => {
        console.log(message); 
    })
    .catch((message) => {
        console.log(message); 
    })

    if (element != null) {
        element.addEventListener('animationend', () => {
            console.log("end");
        })
    };
}

export default Flex;