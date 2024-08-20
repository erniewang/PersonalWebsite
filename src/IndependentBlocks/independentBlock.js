import React, { useState, useContext, useEffect } from "react";
import "./independent.css";  // Adjust the path according to your project structure
import { transitionMode } from '../App';

function rgb(number) {
    number = number * 34;
    return `rgb(${number},${number},${number})`;
}

export function IndependentBlock({ coords, size, purpose, priority, children, slideDirection }) {

    if (slideDirection == undefined) {
        slideDirection = Math.floor(Math.random() * 4) + 1;
    }

    const { transitioning } = useContext(transitionMode);

    // Hooks for coordinates
    const [xCord, setX] = useState(coords[0]);
    const [yCord, setY] = useState(coords[1]);

    // Determine the animation class based on slideDirection
    let animationClass;
    switch (slideDirection) {
        case 1:
            animationClass = "slideInRight";
            break;
        case 2:
            animationClass = "slideInLeft";
            break;
        case 3:
            animationClass = "slideInUp";
            break;
        case 4:
            animationClass = "slideInDown";
            break;
        case 5:
            animationClass = ""; // Default to slide in from the right
    }

    return (
        <div
            style={{
                gridColumnStart: xCord,
                gridRowStart: yCord,
                gridColumnEnd: xCord + size[0],
                gridRowEnd: yCord + size[1],
                zIndex: priority,
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: rgb(priority),
                backgroundImage: typeof purpose === "string" ? `url(${purpose})` : "none",
                backgroundSize: "cover",
                textAlign: "center",
                animation: transitioning
                    ? `fadeOut 1s ease-out forwards`
                    : `${animationClass} .5s ease-out forwards`
            }}
        >
            {children}
        </div>
    );
}
