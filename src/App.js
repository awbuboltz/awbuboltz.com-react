import React, { Component } from 'react';
import me from './images/me.jpg';
import resume from './files/Andy Buboltz Resume.pdf';

import { InfoNugget } from './components/InfoNugget';
import { SocialLinks } from './components/SocialLinks';
import { InfoBurger } from "./components/InfoBurger";

class App extends Component {

    constructor() {
        super();
        this.state = {
            social: [
                { text: 'LinkedIn',  url: 'http://www.linkedin.com/pub/andy-buboltz/24/65b/697', icon: 'linkedin' },
                { text: 'Facebook', url: 'https://www.facebook.com/buboltz', icon: 'facebook' },
                { text: 'Instagram', url: 'https://www.instagram.com/awbuboltz', icon: 'instagram' }
            ]
        };
    }

    render() {
        return (
            <div className='fullHeight'>
                <div className='shim' />
                <div className='content'>

                    <div className='component'>
                        <img src={me} className='me' alt='me' />
                        <h1>Andy</h1>
                        <h1>Buboltz</h1>
                        <h2>Sr. Software Engineer</h2>
                        <h4>Jr. Woodworker</h4>
                    </div>

                    <div className='component'>

                        <InfoBurger title="connect">
                            <InfoNugget letter='E' url='mailto:andy@awbuboltz.com' text='andy@awbuboltz.com' target='_top'/>
                            <InfoNugget letter='C' text='507-402-6246' />
                            <InfoNugget letter='S'>
                                <SocialLinks socialLinks={this.state.social} />
                            </InfoNugget>
                        </InfoBurger>

                        <InfoBurger title="more me">
                            <InfoNugget letter='B' url='http://thirdstallwoodworking.com' text='third stall woodworking' />
                            <InfoNugget letter='R' download='Andy Buboltz Resume' url={resume} text='resume' />
                        </InfoBurger>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
