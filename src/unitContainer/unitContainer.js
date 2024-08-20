import React from 'react';
import "./unitContainer.css";

export function UnitContainer({ children, variant, hidden, priority }) {
    return (
        <div className={variant === "" ? "container" : "container" + variant} style={{ display: (hidden ? "none" : "grid"), zIndex: (priority ? priority : 15) }}>
            {children}
        </div>
    );
}