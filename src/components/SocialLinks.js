import React, { Component } from 'react';

import { SocialLink } from './SocialLink';

export class SocialLinks extends Component {

    render() {
        const socialLinks = this.props.socialLinks.map((linkData, i) => {
            return <SocialLink
                key={i}
                icon={linkData.icon}
                text={linkData.text}
                url={linkData.url} />;
        });

        return (<span>{socialLinks}</span>);
    }
}

SocialLinks.defaultPrpops = {
    socialLinks: []
};