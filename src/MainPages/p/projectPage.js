import React from 'react';
import "../../global.css";
import "./projectPage.module.css";  // Import the new CSS file
import { UnitContainer } from "../../unitContainer/unitContainer";
import { Header } from "../../headerComponets/header";
import { IndependentBlock } from "../../IndependentBlocks/independentBlock";
import { MenuHeader, getRandomDirection } from '../../App';
import useSize from ".././resizeHandler";

import {
    resume,
    sheetMusic,
    pano2,
    LSD,
    timeality
} from "../../index";

// Constants for links
const HARMONIZER_LINK = "https://example.com/";
const RESUME_TUNER_LINK = "https://example.com/";
const TIMEALITY_LINK = "https://example.com/";
const LSD_LINK = "https://example.com/";

function ProjectPage() {
    const smallmode = useSize();
    return (
        <div id="2">
            <UnitContainer variant={""} hidden={smallmode}>
                {MenuHeader(1)}
                <IndependentBlock
                    coords={[3, 4]}
                    size={[5, 16]}
                    slideDirection={1}
                    priority={1}
                    purpose={sheetMusic}
                >
                    <UnitContainer variant={""}>
                        <IndependentBlock
                            coords={[1, 1]}
                            size={[18, 4]}
                            priority={3}
                            slideDirection={getRandomDirection()}
                        >
                            <Header permissionMap={""}>
                                <h5>
                                    <a href={HARMONIZER_LINK}>Harmonizer</a>
                                </h5>
                            </Header>
                        </IndependentBlock>
                    </UnitContainer>
                </IndependentBlock>
                <IndependentBlock
                    coords={[7, 4]}
                    size={[4, 16]}
                    slideDirection={getRandomDirection()}
                    priority={4}
                    purpose={resume}
                >
                    <UnitContainer variant={""}>
                        <IndependentBlock
                            coords={[1, 1]}
                            size={[21, 4]}
                            priority={2}
                            slideDirection={getRandomDirection()}
                        >
                            <Header permissionMap={""}>
                                <h5>
                                    <a href={RESUME_TUNER_LINK}>Resume Tuner</a>
                                </h5>
                            </Header>
                        </IndependentBlock>
                    </UnitContainer>
                </IndependentBlock>
                <IndependentBlock
                    coords={[12, 4]}
                    size={[7, 16]}
                    slideDirection={getRandomDirection()}
                    priority={1}
                >
                    <UnitContainer variant={""}>
                        <IndependentBlock
                            coords={[1, 1]}
                            size={[20, 4]}
                            priority={3}
                            slideDirection={getRandomDirection()}
                        >
                            <Header permissionMap={""}>
                                <h4>
                                    <a href="#">Web Browser Extensions</a>
                                </h4>
                            </Header>
                        </IndependentBlock>
                        <IndependentBlock
                            coords={[1, 12]}
                            size={[20, 3]}
                            priority={3}
                            slideDirection={getRandomDirection()}
                        >
                            <h1>
                                <a href={LSD_LINK}>LSD </a>
                            </h1>
                        </IndependentBlock>
                        <IndependentBlock
                            coords={[1, 6]}
                            size={[20, 7]}
                            priority={2}
                            slideDirection={getRandomDirection()}
                            purpose={timeality}
                        ></IndependentBlock>
                        <IndependentBlock
                            coords={[1, 5]}
                            size={[20, 2]}
                            priority={4}
                            slideDirection={getRandomDirection()}
                        >
                            <h1>
                                <a href={TIMEALITY_LINK}>TimeAlity </a>
                            </h1>
                        </IndependentBlock>
                        <IndependentBlock
                            purpose={LSD}
                            coords={[1, 15]}
                            size={[20, 9]}
                            priority={3}
                            slideDirection={getRandomDirection()}
                        ></IndependentBlock>
                    </UnitContainer>
                </IndependentBlock>
            </UnitContainer>

            <UnitContainer variant="" hidden={!smallmode}>
                {MenuHeader(2)}
                <IndependentBlock
                    purpose={sheetMusic}
                    coords={[1, 3]}
                    size={[20, 2]}
                    priority={6}
                    slideDirection={1}
                >
                    <h1>
                        <a href={HARMONIZER_LINK}>Harmonizer</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 5]}
                    size={[20, 3]}
                    priority={5}
                    slideDirection={getRandomDirection()}
                    purpose={resume}
                >
                    <h1 className="custom-header-yellow">
                        <a href={RESUME_TUNER_LINK}>R e s u m e T u n e r</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 8]}
                    size={[20, 2]}
                    priority={4}
                    purpose={timeality}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        <a href={TIMEALITY_LINK}>TimeAlity (extension)</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 10]}
                    size={[20, 2]}
                    purpose={LSD}
                    priority={3}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        <a href={LSD_LINK}>LSD (extension)</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 12]}
                    size={[20, 7]}
                    priority={2}
                    slideDirection={getRandomDirection()}
                    purpose={pano2}
                />
                {MenuHeader(3)}
            </UnitContainer>
        </div>
    );
}

export default ProjectPage;
