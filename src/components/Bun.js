import React, { Component } from 'react';

export class Bun extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="connect">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}