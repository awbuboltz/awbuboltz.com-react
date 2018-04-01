import React from 'react';

export const Anchor = (props) => {
    const p = props;

    return (
        <a
            href={p.url}
            rel='noopener noreferrer'
            target={p.target}
            title={p.text}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={props.class}>
            {p.text}
        </a>
    );
};

Anchor.defaultProps = {
    class: '',
    target: '_blank',
    onMouseEnter: () => {},
    onMouseLeave: () => {}
};