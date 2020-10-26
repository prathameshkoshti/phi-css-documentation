import React, { Component } from 'react'
import NavItem from './NavItem'

export default class NavBar extends Component {
    render() {
        const navItems = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Docs',
                link: '/documentation'
            },
            {
                name: 'Examples',
                link: '/examples'
            },
            {
                name: 'Customize',
                link: '/customize'
            },
            {
                name: 'Releases',
                link: '/releases'
            }
        ]
        return (
            <div>
                {
                    navItems.map(navItem => <NavItem name={navItem.name} link={navItem.link} />)
                }
            </div>
        )
    }
}
