import React, { Component } from 'react';
import animationData from '../utils/arrow.json';
import lottie from "lottie-web";

export default class Arrow extends Component {
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
            width: '15rem',
            height: '15rem',
            position: 'absolute',
            transform: 'rotateX(180deg) rotateZ(20deg)',
            left: '4rem',
            bottom: '10rem',
            // opacity: '0.5'
        }
        return (
            <div style={darkModeTogglerStyle} id="dark-mode-lottie">
                <div ref={el => (this.el = el)} />
            </div>
        )
    }
}
