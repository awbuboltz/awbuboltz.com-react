import React, { Component } from 'react';
import Anchor from './Anchor';

class InfoNugget extends Component {

    render() {
        const p = this.props;

        let content;

        if (p.url) {
            content = <Anchor {...this.props} />;
        }
        else if (p.links) {

        }
        else {
            content = p.text;
        }

        return (
            <li>
                <h3>{p.letter}</h3>
                <p>{content}</p>
            </li>
        );
    }
}

export default InfoNugget;