import React, { Component } from 'react';

class SocialLinks extends Component {
    render() {
        let links = this.props.socialLinks
            ? this.props.socialLinks.map(linkData => {
                    return (
                        <a href={linkData.href} target="_blank" title={linkData.name}
                           rel="noopener noreferrer" className={`${linkData.icon} icon`}>{linkData.name}</a>
                    );
                })
            : [];

        return (<p>{links}</p>);
    }
}

export default SocialLinks;