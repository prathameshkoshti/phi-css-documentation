import React, { Component } from 'react'
import Link from 'next/link'

export default class NavItem extends Component {
    render() {
        return (
            <Link href={this.props.link}>
                <a className="nav-item">
                    {this.props.name}
                </a>
            </Link>
        )
    }
}
