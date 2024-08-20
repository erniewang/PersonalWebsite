import React from 'react';
import "./header.css";
import { Button } from '../button/button';

export function Header({ permissionMap, children }) {
    const buttons = [];
    if (permissionMap !== "") {
        permissionMap[0].forEach((perms, index) => {
            buttons.push(<Button key={index} perms={perms} data={permissionMap[1][index]} />);
        });
    }
    return (permissionMap !== "" ? (<div className='HEADER'>{buttons}</div>) : <div className='HeaderNoButtons'>{children}</div>)
}