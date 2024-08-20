import React from 'react';
import "../../global.css";
import "./contactpage.module.css";  // Import the new CSS file
import { UnitContainer } from "../../unitContainer/unitContainer";
import { IndependentBlock } from "../../IndependentBlocks/independentBlock";
import { MenuHeader, getRandomDirection } from '../../App';
import useSize from "../resizeHandler";
import {
    footer5,
    pano1,
} from "../../index";

// Constants for links
const MUSIC_INSTAGRAM_LINK = "https://www.instagram.com/ernie_wang_practice/";
const VISUAL_ARTS_INSTAGRAM_LINK = "https://www.instagram.com/visualbasic_ernie/";
const PERSONAL_INSTAGRAM_LINK = "https://www.instagram.com/tritone_subsitution/";
const LINKEDIN_LINK = "https://www.linkedin.com/in/erniewang/";
const GITHUB_LINK = "https://github.com/erniewang";
const ROBLOX_LINK = "http://0.0.0.0"; // Placeholder
const REDDIT_LINK = "http://0.0.0.0"; // Placeholder
const YOUTUBE_GAMING_LINK = "https://www.youtube.com/@ErnieGameVideos";

function ContactPage() {
    const smallmode = useSize();
    return (
        <div id="5">
            <UnitContainer variant="" hidden={smallmode}>
                {MenuHeader(1)}
                <IndependentBlock
                    coords={[1, 3]}
                    size={[20, 2]}
                    priority={2}
                    slideDirection={1}
                >
                    <h1>
                        Email: ernie.wang@gmail.com erniesx@gmail.com
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 5]}
                    size={[20, 2]}
                    priority={3}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        Instagrams: <a href={MUSIC_INSTAGRAM_LINK}>Music</a> <a href={VISUAL_ARTS_INSTAGRAM_LINK}>Art</a> <a href={PERSONAL_INSTAGRAM_LINK}>SELF</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 7]}
                    size={[20, 2]}
                    priority={4}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        <a href={LINKEDIN_LINK}>LinkedIn</a> <a href={GITHUB_LINK}>GitHub</a> <a href={ROBLOX_LINK}>Roblox</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 9]}
                    size={[20, 3]}
                    priority={5}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        <a href={REDDIT_LINK}>Reddit</a> <a href={YOUTUBE_GAMING_LINK}>Gaming</a> 911-666-1939
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 12]}
                    size={[20, 9]}
                    priority={6}
                    slideDirection={getRandomDirection()}
                    purpose={pano1}
                />
            </UnitContainer>

            <UnitContainer variant="" hidden={!smallmode}>
                {MenuHeader(2)}
                <IndependentBlock
                    coords={[1, 3]}
                    size={[20, 2]}
                    priority={6}
                    slideDirection={1}
                >
                    <h1>
                        Email: ernie.wang@gmail.com erniesx@gmail.com
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 5]}
                    size={[20, 2]}
                    priority={5}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        IGN: <a href={MUSIC_INSTAGRAM_LINK}>Music</a> <a href={VISUAL_ARTS_INSTAGRAM_LINK}>Arts</a> <a href={PERSONAL_INSTAGRAM_LINK}>Personal</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 7]}
                    size={[20, 2]}
                    priority={4}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        <a href={LINKEDIN_LINK}>LinkedIn</a> <a href={GITHUB_LINK}>GitHub</a> <a href={ROBLOX_LINK}>Roblox</a>
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 9]}
                    size={[20, 1]}
                    priority={3}
                    slideDirection={getRandomDirection()}
                >
                    <h1>
                        <a href={REDDIT_LINK}>Reddit</a> <a href={YOUTUBE_GAMING_LINK}>Gaming</a> 911-666-1939
                    </h1>
                </IndependentBlock>
                <IndependentBlock
                    coords={[1, 11]}
                    size={[20, 7]}
                    priority={2}
                    slideDirection={getRandomDirection()}
                    purpose={footer5}
                />
                {MenuHeader(3)}
            </UnitContainer>
        </div>
    );
}

export default ContactPage;
