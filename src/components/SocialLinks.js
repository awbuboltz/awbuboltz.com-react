import React, { Component } from 'react';

import Anchor from './Anchor';

class SocialLinks extends Component {

    render() {
        let links = this.props.socialLinks
            ? this.props.socialLinks.map((linkData, i) => {
                    return <Anchor {...linkData} key={i} />;
                })
            : [];

        return (<p>{links}</p>);
    }
}

export default SocialLinks;