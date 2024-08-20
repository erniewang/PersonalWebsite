import React, { createContext, useEffect, useState, lazy, Suspense } from 'react';
import "./global.css";
import { Header } from "./headerComponets/header";
import { IndependentBlock } from "./IndependentBlocks/independentBlock";

// Lazy-loaded pages
const MainPage = lazy(() => import('./MainPages/main/mainPage.js'));
const ProjectPage = lazy(() => import('./MainPages/p/projectPage.js'));
const MusicPage = lazy(() => import('./MainPages/musicPage.js'));
const ArtPage = lazy(() => import('./MainPages/artPage.js'));
const ContactPage = lazy(() => import('./MainPages/contact/contactPage.js'));

// Contexts
export const MODE = createContext();
export const transitionMode = createContext();

// Utility Function
export const getRandomDirection = () => Math.floor(Math.random() * 4) + 1;

// MenuHeader Component
export const MenuHeader = (version) => {
    switch (version) {
        case 1:
            return (
                <IndependentBlock coords={[1, 1]} size={[21, 2]} priority={2}>
                    <Header permissionMap={[[1, 2, 3, 4, 5], ["Ernie Wang", "Projects", "Music", "Arts-Photos", "Contact"]]} />
                </IndependentBlock>
            );
        case 2:
            return (
                <IndependentBlock coords={[1, 1]} size={[21, 2]} priority={2}>
                    <Header permissionMap={[[1, 2, 3], ["Ernie Wang", "Projects", "Music"]]} />
                </IndependentBlock>
            );
        case 3:
            return (
                <IndependentBlock coords={[1, 19]} size={[21, 2]} priority={2}>
                    <Header permissionMap={[[4, 5], ["Arts-Photos", "Contact"]]} />
                </IndependentBlock>
            );
        default:
            return null;
    }
};

// App Component
function App() {
    // State Hooks
    const [mode, setMode] = useState(1);
    const [transitioning, setTransitioning] = useState(false);

    return (
        <div className="App">
            <transitionMode.Provider value={{ transitioning, setTransitioning }}>
                <MODE.Provider value={{ mode, setMode }}>
                    <RenderPage mode={mode} />
                </MODE.Provider>
            </transitionMode.Provider>
        </div>
    );
}

// RenderPage Component
function RenderPage({ mode }) {
    const [content, setContent] = useState(<MainPage />);

    useEffect(() => {
        switch (mode) {
            case 2:
                setContent(<ProjectPage />);
                break;
            case 3:
                setContent(<MusicPage />);
                break;
            case 4:
                setContent(<ArtPage />);
                break;
            case 5:
                setContent(<ContactPage />);
                break;
            default:
                setContent(<MainPage />);
                break;
        }
    }, [mode]);

    return (
        <div className='renderBody' id='rendering'>
            <Suspense fallback={<div> LOADING NIGGA!!</div>}>
                {content}
            </Suspense>
        </div>
    );
}

export default App;
