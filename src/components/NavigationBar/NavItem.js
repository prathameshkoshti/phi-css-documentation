import React, { Component } from 'react'
import Link from 'next/link'

export default class NavItem extends Component {
    render() {
        return (
            <Link href={this.props.link}>
                {
                    this.props.type === 'logo' ? (
                        <a className="nav-logo">
                            <img height="60px" src="/icons/header-logo.svg" />
                        </a>) : (
                        <a className="nav-item" target={this.props.openInNewTab ? '_blank' : ''}>
                            {this.props.title}
                        </a>)
                }
            </Link>
        )
    }
}
