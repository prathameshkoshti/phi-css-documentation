import React, { Component } from 'react';
import Head from 'next/head';

export default class HeadComponent extends Component {
    constructor() {
        super();
        this.state = {
            darkScheme: false,
        }
    }

    componentDidMount() {
        const matcher = window.matchMedia('(prefers-color-scheme: dark)');
        matcher.addListener(this.onUpdate);
        if (matcher.matches) {
            this.setState({
                darkScheme: true,
            })
        } else {
            this.setState({
                darkScheme: false,
            })
        }
    }

    render() {
        const lightSchemeIcon = <link rel="icon" href="/logo-dark.png" id="light-scheme-icon" type="image/x-icon" />;

        const darkSchemeIcon = <link rel="icon" href="/logo-light.png" id="dark-scheme-icon" type="image/x-icon" />;

        return (
            <Head>
                {this.state.darkScheme ? darkSchemeIcon : lightSchemeIcon}
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="a css framework based on the golden ratio (1.618)" />
                <meta name="theme-color" content="" />
                <title>Phi: CSS framework</title>
            </Head>
        )
    }
}