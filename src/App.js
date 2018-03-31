import React, { Component } from 'react';
import me from './images/me.jpg';
import resume from './files/Andy Buboltz Resume.pdf';

import { Burger } from "./components/Burger";
import { Bun } from "./components/Bun";
import { Patty } from './components/Patty';
import { SocialLinks } from './components/SocialLinks';

class App extends Component {

    render() {
        const socialLinks = [
            { text: 'LinkedIn',  url: 'http://www.linkedin.com/pub/andy-buboltz/24/65b/697', icon: 'linkedin' },
            { text: 'Facebook', url: 'https://www.facebook.com/buboltz', icon: 'facebook' },
            { text: 'Instagram', url: 'https://www.instagram.com/awbuboltz', icon: 'instagram' }
        ];

        return (
            <div className='fullHeight'>
                <div className='shim' />
                <div className='content'>
                    <Burger>
                        <img src={me} className='me' alt='me' />
                        <h1>Andy</h1>
                        <h1>Buboltz</h1>
                        <h2>Sr. Software Engineer</h2>
                        <h4>Jr. Woodworker</h4>
                    </Burger>

                    <Burger>
                        <Bun title="Connect">
                            <Patty letter='E' url='mailto:andy@awbuboltz.com' text='andy@awbuboltz.com' target='_top'/>
                            <Patty letter='C' text='507-402-6246' />
                            <Patty letter='S'>
                                <SocialLinks socialLinks={socialLinks} />
                            </Patty>
                        </Bun>

                        <Bun title="More me">
                            <Patty letter='B' url='http://thirdstallwoodworking.com' text='Third Stall Woodworking' />
                            <Patty letter='R' download='Andy Buboltz Resume' url={resume} text='Resume' />
                        </Bun>
                    </Burger>
                </div>
            </div>
        );
    }
}

export default App;
