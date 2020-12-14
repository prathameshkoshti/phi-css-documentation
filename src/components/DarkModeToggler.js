import React, { Component } from 'react';
import animationData from '../utils/darkMode.json';
import Lottie from './Lottie';

export default class DarkModeToggler extends Component {
    constructor() {
        super();
        this.state = {
            direction: -1,
        }
    }

    toggleDirection() {
        const nextDirection = this.state.direction < 0 ? 1 : -1;
        this.setState({
            direction: nextDirection
        });
        this.props.toggleDarkMode();
    }

    render() {
        const darkModeTogglerStyle = {
            width: '20rem',
            height: '20rem',
            cursor: 'pointer',
        }
        return (
            <div style={darkModeTogglerStyle} id="dark-mode-lottie" onClick={() => this.toggleDirection()}>
                <Lottie animationData={animationData} direction={this.state.direction} />
            </div>
        )
    }
}
