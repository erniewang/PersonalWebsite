import React, { useContext } from 'react';
import "../global.css";
import { UnitContainer } from "../unitContainer/unitContainer";
import { IndependentBlock } from "../IndependentBlocks/independentBlock";
import { MenuHeader } from '../App';
import { getRandomDirection } from '../App';
import { transitionMode } from '../App';
import useSize from "./resizeHandler";


import {
    monsClint,
    selfie1,
    selfie2,
    selfie3,
    selfie4,
    arora,
    footer5,
    pano1,
    pano2,
    namePlate,
    silver,
    name,
} from "../index";

function MusicPage() {
    return <div id="3">
        <UnitContainer variant={""} >
            {MenuHeader(1)}
            <IndependentBlock coords={[2, 4]} size={[9, 16]} priority={1} slideDirection={1}>
                <iframe
                    src="./musicVideos.html"
                    width="100%"
                    height="500px"
                    style={{ border: 'none' }}
                    title="Embedded Site"
                >
                    Your browser does not support iframes.
                </iframe>
            </IndependentBlock>
            <IndependentBlock coords={[11, 4]} size={[9, 16]} priority={2} slideDirection={getRandomDirection()}>
                <iframe
                    src="./MusicPhotos/Photos.html"
                    width="100%"
                    height="500px"
                    style={{ border: 'none' }}
                    title="Embedded Site"
                >
                    Your browser does not support iframes.
                </iframe>
            </IndependentBlock>
        </UnitContainer>
    </div>
}

export default MusicPage;