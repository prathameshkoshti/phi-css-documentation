import React, { Component } from 'react';
import lottie from "lottie-web";

export default class Lottie extends Component {
    componentDidMount() {
        const { animationData, rendererSettings = {} } = this.props;

        this.setState(
            {
                options: {
                    container: this.el,
                    renderer: 'svg',
                    loop: false,
                    autoPlay: false,
                    segments: true,
                    animationData,
                    rendererSettings
                },
                hasChanged: false,
            },
            () => {
                this.anim = lottie.loadAnimation(this.state.options);
                this.playSegments();
            }
        )

        this.getSegments = this.getSegments.bind(this);
        this.playSegments = this.playSegments.bind(this);
    }

    getSegments(props = this.props) {
        const animationData = this.props.animationData;
        const {
          startFrame = animationData.ip,
          endFrame = animationData.op,
          direction
        } = props;
        const segments = [];
        const forward = direction > 0;

        if (this.state.hasChanged) {
          segments[0] = !forward ? startFrame : endFrame;
          segments[1] = !forward ? endFrame : startFrame;
        } else {
          segments[0] = forward ? startFrame + 1 : endFrame - 1;
          segments[1] = forward ? startFrame : endFrame;
        }

        return segments;
    }

    playSegments() {
        const segments = this.getSegments();
        this.anim.playSegments(segments, true);
    }

    componentDidUpdate(nextProps, nextState) {
        if (
            this.props.direction !== nextProps.direction ||
            this.props.startFrame !== nextProps.startFrame ||
            this.props.endFrame !== nextProps.endFrame
        ) {
            if (!this.state.hasChanged) {
                this.setState(
                {
                    hasChanged: true
                },
                () => {
                    this.playSegments();
                }
                );
            } else {
                this.playSegments();
            }
        }
    }

    render() {
        return <div ref={el => (this.el = el)} />;
    }
}
