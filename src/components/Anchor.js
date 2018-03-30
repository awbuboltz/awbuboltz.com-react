import React, { Component } from 'react';

export class Anchor extends Component {

    render() {
        const p = this.props;

        return (
            <a
                href={p.url}
                rel='noopener noreferrer'
                target={p.target}
                title={p.text}
                className={this.props.icon ? `icon ${this.props.icon}` : ''}>{p.text}
            </a>
        );
    }
}

Anchor.defaultProps = {
    icon: '',
    target: '_blank'
};