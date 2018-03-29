import React, { Component } from 'react';

import Anchor from './Anchor';

export class SocialLinks extends Component {

    render() {
        const links = this.props.socialLinks
            ? this.props.socialLinks.map((linkData, i) => {
                    return <Anchor {...linkData} key={i} />;
                })
            : [];

        return (<p>{links}</p>);
    }
}