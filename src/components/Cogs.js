import React, { Component } from 'react';
import animationData from '../utils/cogs.json';
import lottie from "lottie-web";

export default class Cogs extends Component {
    componentDidMount() {
        const rendererSettings = {};

        this.setState(
            {
                options: {
                    container: this.el,
                    renderer: 'svg',
                    loop: true,
                    autoPlay: true,
                    segments: true,
                    animationData,
                    rendererSettings
                },
                hasChanged: false,
            },
            () => {
                this.anim = lottie.loadAnimation(this.state.options);
                this.anim.play();
            }
        )
    }

    render() {
        const darkModeTogglerStyle = {
            width: '25rem',
            height: '25rem'
        }
        return (
            <div style={darkModeTogglerStyle} id="dark-mode-lottie">
                <div ref={el => (this.el = el)} />
            </div>
        )
    }
}
