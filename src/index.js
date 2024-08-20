import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Images/index.js
export { default as monsClint } from "./Images/monsclint.png";
export { default as selfie1 } from "./Images/1selfie.png";
export { default as selfie2 } from "./Images/1selfie2.png";
export { default as selfie3 } from "./Images/1selfie3.jpg";
export { default as selfie4 } from "./Images/1selfie4.png";
export { default as arora } from "./Images/arora.jpg";
export { default as footer5 } from "./Images/5footer.png";
export { default as pano1 } from "./Images/pano1.png";
export { default as pano2 } from "./Images/pano2.png";
export { default as namePlate } from "./Images/mainName.jpg";
export { default as silver } from "./Images/silverBackground.jpg";
export { default as name } from "./Images/name.jpg";
export { default as sheetMusic } from "./Images/vMusic.png";
export { default as resume } from "./Images/vResume.jpg";
export { default as LSD } from "./Images/lsd.png";
export { default as timeality } from "./Images/timeality.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);