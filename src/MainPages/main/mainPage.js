import React from 'react';
import "../../global.css";
import { UnitContainer } from '../../unitContainer/unitContainer';
import { Header } from '../../headerComponets/header';
import { IndependentBlock } from '../../IndependentBlocks/independentBlock';
import { MenuHeader } from '../../App';
import { getRandomDirection } from '../../App';
import useSize from '../resizeHandler';
import "./mainPage.module.css";

// Imported assets
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
    sheetMusic,
} from "../../index";

function MainPage() {
    const smallmode = useSize();
    return (
        <div style={{ backgroundImage: `url(${arora})`, backgroundSize: "cover" }}>
            <UnitContainer variant="" hidden={smallmode}>
                {MenuHeader(1)}
                <IndependentBlock
                    coords={[2, 5]}
                    size={[4, 14]}
                    priority={1}
                    slideDirection={4}
                    purpose={selfie2}
                />
                <IndependentBlock
                    coords={[7, 5]}
                    size={[4, 14]}
                    priority={1}
                    slideDirection={getRandomDirection()}
                    purpose={selfie4}
                />
                <IndependentBlock
                    coords={[12, 5]}
                    size={[8, 14]}
                    priority={3}
                    slideDirection={getRandomDirection()}
                >
                    <UnitContainer variant="">
                        <IndependentBlock
                            coords={[2, 2]}
                            size={[18, 3]}
                            priority={3}
                            slideDirection={4}
                            purpose={silver}
                        />
                        <IndependentBlock
                            coords={[2, 6]}
                            size={[18, 7]}
                            priority={4}
                            slideDirection={4}
                            purpose={name}
                        >
                            <Header permissionMap="">
                                <h2

                                >
                                    Ernie Wang
                                </h2>
                            </Header>
                        </IndependentBlock>
                        <IndependentBlock
                            coords={[2, 14]}
                            size={[18, 6]}
                            priority={3}
                            slideDirection={1}
                            purpose={silver}
                        >
                            <Header permissionMap="">
                                <h5

                                >
                                    Programmer Musician Artist
                                </h5>
                            </Header>
                        </IndependentBlock>
                    </UnitContainer>
                </IndependentBlock>
            </UnitContainer>

            <UnitContainer variant="" hidden={!smallmode}>
                {MenuHeader(2)}
                <IndependentBlock
                    coords={[3, 5]}
                    size={[16, 5]}
                    priority={3}
                    slideDirection={4}
                    purpose={namePlate}
                />
                <IndependentBlock
                    coords={[3, 11]}
                    size={[16, 3]}
                    priority={2}
                    slideDirection={getRandomDirection()}
                    purpose={pano1}
                />
                <IndependentBlock
                    coords={[2, 15]}
                    size={[18, 3]}
                    priority={3}
                    slideDirection={1}
                    purpose={silver}
                >
                    <Header permissionMap="">
                        <h6

                        >
                            Programmer Musician Artist
                        </h6>
                    </Header>
                </IndependentBlock>
                {MenuHeader(3)}
            </UnitContainer>
        </div>
    );
}

export default MainPage;
