import React, { Component } from 'react';
import Head from 'next/head';

export default class HeadComponent extends Component {
    render() {
        return (
            <Head>
                <link rel="icon" href=
                    "/images/logox64.png"
                    type="image/x-icon" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="a css framework based on the golden ratio (1.618)" />
                <meta name="theme-color" content="" />
                <title>Phi: CSS framework</title>
            </Head>
        )
    }
}