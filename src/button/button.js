import React, { useState, useContext, useRef } from 'react';
import "./button.css";
import { MODE } from '../App';
import { transitionMode } from '../App';

export function Button({ perms, data }) {
    const { transitioning, setTransitioning } = useContext(transitionMode);
    const [hovering, setHovering] = useState(false);

    //why the fuck do use contexts need to be objects instead of arrays, what really is the fucking difference?
    const { mode, setMode } = useContext(MODE);

    function phaseOut() {
        if (perms == 0) {
            return;
        }
        if (transitioning) {
            console.log("older setimeout somewhere else has not finished, skipping"); //reset the timeout each time
            return;
        }

        setTransitioning(true);
        setTimeout(() => {
            setTransitioning(false);
            setMode(perms);
        }, 1000);

        //let the entire app know that transition has started and start the timer
        //if any other clicks happen, ignore it because the timer has not run out yet
    }

    return (
        <div
            className={hovering ? 'buttonComponetHover' : 'buttonComponet'}
            onMouseEnter={() => setHovering(true)}
            onClick={() => {
                phaseOut();
            }}
            onMouseLeave={() => setHovering(false)
            }
        > {data}</div >
    );
}