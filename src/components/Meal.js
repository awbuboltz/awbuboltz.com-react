import React, { Component } from 'react';

export class Meal extends Component {

    render() {
        return (
            <div className="component">
                {this.props.children}
            </div>
        );
    }
}