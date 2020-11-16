import React, { Component } from 'react';
import Link from 'next/link';
import {npmLink, githubLink} from '../utils/siteData';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer full-width justify-content-space-between align-items-center">
                <span>Made with 💜 &nbsp;using sass.</span>
                <div className="footer-icons">
                    <Link href={npmLink}>
                        <a target="_blank" className="footer-icon">
                            <img src="/icons/npm.svg" width="100%"/>
                        </a>
                    </Link>
                    <Link href={githubLink}>
                        <a target="_blank" className="footer-icon">
                            <img src="/icons/github.svg" width="75%" height="75%"/>
                        </a>
                    </Link>
                </div>
            </footer>
        )
    }
}
