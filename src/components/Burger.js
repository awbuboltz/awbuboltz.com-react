import React, { Component } from 'react';

export class Burger extends Component {

    render() {
        return (
            <div className="component">
                {this.props.children}
            </div>
        );
    }
}