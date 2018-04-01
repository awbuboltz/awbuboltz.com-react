import React from 'react';
import PropTypes from 'prop-types';
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

SocialLinks.defaultProps = {
    socialLinks: []
};

SocialLinks.propTypes = {
    socialLinks: PropTypes.array.isRequired
};