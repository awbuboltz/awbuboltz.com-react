import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Anchor } from './Anchor';

export class SocialLink extends Component {

    constructor() {
        super();
        this.state = {
            hovered: false
        };

        this.hoverHandler = this.hoverHandler.bind(this);
    }

    hoverHandler() {
        this.setState({
            // flip hover state
            hovered: !this.state.hovered
        });
    }

    render() {
        // if currently hovered, add hover class
        const hoverClass = this.state.hovered ? 'hover' : '';

        return (
            <Anchor
                class={`icon ${this.props.icon} ${hoverClass}`}
                onMouseEnter={this.hoverHandler}
                onMouseLeave={this.hoverHandler}
                text={this.props.text}
                url={this.props.url}
            />
        );
    }
}

SocialLink.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};