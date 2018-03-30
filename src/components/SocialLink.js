import React, { Component } from 'react';

import { Anchor } from './Anchor';

export class SocialLink extends Component {

    constructor() {
        super();
        this.state = {
            hovered: false
        };
    }

    mouseEnterHandler() {
        this.setState({
            hovered: true
        });
    }

    mouseLeaveHandler() {
        this.setState({
            hovered: false
        });
    }

    render() {
        const baseClass = `icon ${this.props.icon}`;
        const hoverClass = this.state.hovered ? ' hover' : '';
        const className = `${baseClass}${hoverClass}`;

        return (
            <Anchor
                class={className}
                onMouseEnter={this.mouseEnterHandler.bind(this)}
                onMouseLeave={this.mouseLeaveHandler.bind(this)}
                text={this.props.text}
                url={this.props.url}
            />
        );
    }
}