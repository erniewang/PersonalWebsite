import React from 'react';
import "../global.css";
import { UnitContainer } from "../unitContainer/unitContainer";
import { IndependentBlock } from "../IndependentBlocks/independentBlock";
import { MenuHeader, getRandomDirection } from '../App';

function ArtPage() {
    return (
        <div>
            <UnitContainer variant="">
                {MenuHeader(1)}
                <IndependentBlock
                    coords={[2, 4]}
                    size={[18, 16]}
                    priority={3}
                    slideDirection={getRandomDirection()}
                >
                    <iframe
                        src="./PhotosPage/Photos.html"
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
    );
}

export default ArtPage;
