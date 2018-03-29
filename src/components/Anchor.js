import React, { Component } from 'react';

class Anchor extends Component {

    render() {
        const p = this.props;
        const iconClass = this.props.icon ? `icon ${this.props.icon}` : '';

        return (
            <a href={p.url} rel='noopener noreferrer' target={p.target || '_blank'}
               title={p.text} className={iconClass}>{p.text}</a>
        );
    }
}

export default Anchor;