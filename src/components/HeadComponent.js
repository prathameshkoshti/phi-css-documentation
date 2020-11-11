import React, { Component } from 'react';
import Head from 'next/head';

export default class HeadComponent extends Component {
    componentDidMount() {
        const matcher = window.matchMedia('(prefers-color-scheme: dark)');
        matcher.addListener(onUpdate);
        onUpdate();
        function onUpdate() {
            const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
            const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');
            if (matcher.matches) {
                if(lightSchemeIcon) lightSchemeIcon.remove();
                document.head.append(darkSchemeIcon);
            } else {
                if(darkSchemeIcon) darkSchemeIcon.remove();
                document.head.append(lightSchemeIcon);
            }
        }
    }

    render() {
        return (
            <Head>
                <link rel="icon" href="/logo-dark.png" id="light-scheme-icon" type="image/x-icon" />
                <link rel="icon" href="/logo-light.png" id="dark-scheme-icon" type="image/x-icon" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="a css framework based on the golden ratio (1.618)" />
                <meta name="theme-color" content="" />
                <title>Phi: CSS framework</title>
            </Head>
        )
    }
}