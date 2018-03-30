import React, { Component } from 'react';

import { Anchor } from './Anchor';

export class SocialLink extends Component {

    constructor() {
        super();
        this.state = {
            hovered: false
        };
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
                onMouseEnter={this.hoverHandler.bind(this)}
                onMouseLeave={this.hoverHandler.bind(this)}
                text={this.props.text}
                url={this.props.url}
            />
        );
    }
}