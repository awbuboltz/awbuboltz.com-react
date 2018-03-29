import React, { Component } from 'react';

class Anchor extends Component {

    render() {
        const p = this.props;

        return (
            <a href={p.url} rel='noopener noreferrer' target={p.target || '_blank'} title={p.text}>{p.text}</a>
        );
    }
}

export default Anchor;