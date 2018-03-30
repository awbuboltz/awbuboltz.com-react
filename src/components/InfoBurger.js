import React, { Component } from 'react';

export class InfoBurger extends Component {

    render() {
        const links = this.props.socialLinks.map((linkData, i) => {
            return <Anchor {...linkData} key={i} />;
        });

        return (<p>{links}</p>);
    }
}

InfoBurger.defaultPrpops = {
    socialLinks: []
};