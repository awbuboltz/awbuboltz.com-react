import React from 'react';
import PropTypes from 'prop-types';

export const Anchor = (props) => {

    return (
        <a
            href={props.url}
            rel='noopener noreferrer'
            target={props.target}
            title={props.text}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={props.class}>
            {props.text}
        </a>
    );
};

Anchor.defaultProps = {
    class: '',
    target: '_blank',
    onMouseEnter: () => {},
    onMouseLeave: () => {}
};

Anchor.propTypes = {
    class: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    target: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};