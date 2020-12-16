import React, { Component } from 'react';
import Link from 'next/link';

export default class NavItem extends Component {
    render() {
        const subLink = this.props.link.substr(1).split('/')[0];

        let activeItemStyle = {};

        if(subLink === this.props.currentActiveItem) {
            activeItemStyle = {
                color: 'var(--accent)',
            }
        }

        return (
            <Link href={this.props.link}>
                {
                    this.props.type === 'logo' ? (
                        <a className="nav-logo">
                            <img height="60px" src="/icons/header-logo.svg" />
                        </a>) : (
                        <a className={`nav-item ${subLink === this.props.currentActiveItem ? 'active' : ''}`} onClick={() => this.props.handleNavMenu()} target={this.props.openInNewTab ? '_blank' : ''}>
                            {this.props.title}
                        </a>)
                }
            </Link>
        )
    }
}
