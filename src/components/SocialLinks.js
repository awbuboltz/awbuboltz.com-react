import React from 'react';
import { SocialLink } from './SocialLink';

export const SocialLinks = (props) => {
    const socialLinks = props.socialLinks.map((linkData, i) => {
        return <SocialLink
            key={i}
            icon={linkData.icon}
            text={linkData.text}
            url={linkData.url} />;
    });

    return (<span>{socialLinks}</span>);
};

SocialLinks.defaultPrpops = {
    socialLinks: []
};