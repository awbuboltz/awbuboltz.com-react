import React, { Component } from 'react';

import { SocialLink } from './SocialLink';

export class SocialLinks extends Component {

    render() {
        const socialLinks = this.props.socialLinks.map((linkData, i) => {
            return <SocialLink {...linkData} key={i} />;
        });

        return (<span>{socialLinks}</span>);
    }
}

SocialLinks.defaultPrpops = {
    socialLinks: []
};