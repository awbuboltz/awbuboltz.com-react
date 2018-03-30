import React, { Component } from 'react';

import { Anchor } from './Anchor';

export class Patty extends Component {

    render() {
        let content;

        if (this.props.children) {
            // social links
            content = this.props.children;
        }
        else if (this.props.url) {
            // link
            content = <Anchor {...this.props} />
        }
        else {
            // just rendering some text
            content = this.props.text
        }

        return (
            <li>
                <h3>{this.props.letter}</h3>
                <p>{content}</p>
            </li>
        );
    }
}