import React from 'react';

export const Bun = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul className="connect">
                {props.children}
            </ul>
        </div>
    );
};