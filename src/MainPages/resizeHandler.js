import { useEffect, useState } from "react";

function useSize() {
    const [smallmode, setSmallMode] = useState(window.innerWidth < 700);

    const handleResize = () => {
        setSmallMode(window.innerWidth < 660);
    };

    function debounce(cb, delay = 50) {
        let timeoutId;
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                cb();
            }, delay);
        };
    }

    useEffect(() => {
        const debouncedResize = debounce(handleResize);
        window.addEventListener("resize", debouncedResize);
        return () => {
            window.removeEventListener("resize", debouncedResize);
        };
    }, []);

    return smallmode;  // Return the value so it can be used by other components
}

export default useSize;
