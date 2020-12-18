import React, { Component } from 'react';
import NavItem from './NavItem';
import { navItems } from '../../utils/siteData';
import HamburgerMenu from '../HamburgerMenu/index';

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            navMenuOpened: false,
        }

        this.handleNavMenu = this.handleNavMenu.bind(this);
    }

    componentDidMount() {
        const activeItem = this.getCurrentURLLocation();
        this.setState({
            currentActiveItem: activeItem
        })
        localStorage.setItem('activeNavItem', activeItem);
    }

    componentDidUpdate(prevProps, prevState) {
        const newActiveItem = this.getCurrentURLLocation();

        if(newActiveItem !== this.state.currentActiveItem) {
            localStorage.setItem('activeNavItem', newActiveItem);
            this.setState({
                currentActiveItem: newActiveItem
            });
        }
    }

    getCurrentURLLocation() {
        return location.pathname.substr(1).split('/')[0];
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
            <nav className="phi-full-width navbar">
                <NavItem name="" link="/" type="logo" />
                <div className="nav-links-container flex justify-content-space-between align-items-center">
                    <div className="hamburger-btn">
                        <HamburgerMenu />
                    </div>
                    <div className="nav-links" style={navMenuStyle}>
                    {
                        navItems.map(navItem => <NavItem handleNavMenu={this.handleNavMenu} currentActiveItem={this.state.currentActiveItem} title={navItem.title} link={navItem.link} key={navItem.title} type="link" openInNewTab={navItem.openInNewTab} />)
                    }
                        <div className="nav-icons">
                            <div className="nav-icon">
                                <img src="/icons/npm.svg" width="100%"/>
                            </div>
                            <div className="nav-icon">
                                <img src="/icons/github.svg" width="85%" height="85%"/>
                            </div>
                        </div>
                        <small className='nav-footer mobile-viewable'>
                            Made with 💜 &nbsp;uisng SASS.
                        </small>
                    </div>
                </div>
            </nav>
        )
    }
}
