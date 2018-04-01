import React from 'react';
import { Anchor } from './Anchor';

export const Patty = (props) => {
    let content;

    if (props.children) {
        // social links
        content = props.children;
    }
    else if (props.url) {
        // link
        content = <Anchor {...props} />
    }
    else {
        // just rendering some text
        content = props.text
    }

    return (
        <li>
            <h3>{props.letter}</h3>
            <p>{content}</p>
        </li>
    );
};