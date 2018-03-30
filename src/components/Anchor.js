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
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                className={this.props.class}>
                {p.text}
            </a>
        );
    }
}

Anchor.defaultProps = {
    class: '',
    target: '_blank',
    onMouseEnter: () => {},
    onMouseLeave: () => {}
};