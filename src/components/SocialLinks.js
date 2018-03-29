import React, { Component } from 'react';

class SocialLinks extends Component {

    render() {
        let links = this.props.socialLinks
            ? this.props.socialLinks.map((linkData, i) => {
                    return (
                        <a href={linkData.url} target="_blank" title={linkData.text} key={i}
                           rel="noopener noreferrer" className={`${linkData.icon} icon`}>{linkData.text}</a>
                    );
                })
            : [];

        return (<p>{links}</p>);
    }
}

export default SocialLinks;