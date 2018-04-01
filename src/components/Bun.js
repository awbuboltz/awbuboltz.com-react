import React from 'react';
import PropTypes from 'prop-types';

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

Bun.propTypes = {
    children: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};