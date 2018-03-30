import React, { Component } from 'react';
import me from './images/me.jpg';
import resume from './files/Andy Buboltz Resume.pdf';

import { Burger } from "./components/Burger";
import { Meal } from "./components/Meal";
import { Nugget } from './components/Nugget';
import { SocialLinks } from './components/SocialLinks';

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
                    <Meal>
                        <img src={me} className='me' alt='me' />
                        <h1>Andy</h1>
                        <h1>Buboltz</h1>
                        <h2>Sr. Software Engineer</h2>
                        <h4>Jr. Woodworker</h4>
                    </Meal>

                    <Meal>
                        <Burger title="connect">
                            <Nugget letter='E' url='mailto:andy@awbuboltz.com' text='andy@awbuboltz.com' target='_top'/>
                            <Nugget letter='C' text='507-402-6246' />
                            <Nugget letter='S'>
                                <SocialLinks socialLinks={this.state.social} />
                            </Nugget>
                        </Burger>

                        <Burger title="more me">
                            <Nugget letter='B' url='http://thirdstallwoodworking.com' text='third stall woodworking' />
                            <Nugget letter='R' download='Andy Buboltz Resume' url={resume} text='resume' />
                        </Burger>
                    </Meal>
                </div>
            </div>
        );
    }
}

export default App;
