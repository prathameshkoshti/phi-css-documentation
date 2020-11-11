import React, { Component } from 'react';
import NavItem from './NavItem';
import { navItems } from '../../utils/siteData';

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            navMenuOpened: false,
        }

        this.handleNavMenu = this.handleNavMenu.bind(this);
    }

    handleNavMenu() {
        this.setState({
            navMenuOpened: !this.state.navMenuOpened,
        })
    }
    
    render() {
        let navMenuStyle = {};
        if (this.state.navMenuOpened) {
            navMenuStyle = {
                display: 'flex'
            }
        }
        else {
            navMenuStyle = {
                display: 'none'
            }
        }
        return (
            <nav className="full-width">
                <NavItem name="" link="/" type="logo" />
                <div className="nav-links-container flex justify-content-space-between align-items-center">
                    <div className="hamburger-btn" onClick={this.handleNavMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="nav-links" style={navMenuStyle}>
                    {
                        navItems.map(navItem => <NavItem name={navItem.name} link={navItem.href} key={navItem.name} type="link" openInNewTab={navItem.openInNewTab} />)
                    }
                        <div className="mobile-viewable">
                            
                        </div>
                        <span className='nav-footer mobile-viewable'>
                            Made with 💜
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}
