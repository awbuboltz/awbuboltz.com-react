import React, {Component} from 'react';
import me from './images/me.jpg';

class App extends Component {
    render() {
        return (
            <div className="fullHeight">
                <div className="shim" />
                <div className="content">
                    <div className="component">
                        <img src={me} className="me" />
                        <h1>Andy<br/>Buboltz</h1>
                        <h2>Sr. Software Engineer</h2>
                        <h4>Jr. Woodworker</h4>
                    </div>
                    <div className="component">
                        <h3>connect</h3>

                        <ul className="connect">
                            <li>
                                <h3>E</h3>
                                <p><a href="mailto:andy@awbuboltz.com">andy@awbuboltz.com</a></p>
                            </li>
                            <li>
                                <h3>C</h3>
                                <p>507-402-6246</p>
                            </li>
                            <li>
                                <h3>S</h3>
                                <p className="socialicons">
                                    <a href="http://www.linkedin.com/pub/andy-buboltz/24/65b/697" target="_blank" className="linkedin" />
                                    <a href="https://www.facebook.com/buboltz" target="_blank" className="facebook" />
                                    <a href="https://www.instagram.com/awbuboltz" target="_blank" className="instagram" />
                                </p>
                            </li>
                        </ul>

                        <h3>more me</h3>
                        <ul className="connect">
                            <li>
                                <h3>B</h3>
                                <p><a href="http://thirdstallwoodworking.com" target="_blank">woodworking blog</a></p>
                            </li>
                            <li>
                                <h3>R</h3>
                                <p><a href="content/AndyBuboltzResume.pdf" target="_blank">resume</a></p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
