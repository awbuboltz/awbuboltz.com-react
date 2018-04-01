import React from 'react';
import PropTypes from 'prop-types';

export const Burger = (props) => {
    return (
        <div className="component">
            {props.children}
        </div>
    );
};

Burger.propTypes = {
    children: PropTypes.array.isRequired
};