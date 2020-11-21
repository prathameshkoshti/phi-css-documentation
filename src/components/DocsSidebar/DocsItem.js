import React, { Component } from 'react'
import Link from 'next/link';
import docsSidebarStyle from '../../css/modules/docs-sidebar.module.css';

export default class DocsItem extends Component {
    constructor(props) {
        super(props);
        if(this.props.subLinks) {
            this.state = {
                dropdownEnabled : true,
                dropdownState: 'closed',
                downArrowClass: 'chevron-down',
                isActive: false,
            }
        }
        else {
            this.state = {
                dropdownEnabled : false,
                isActive: false,
            }
        }

        this.handleDropdown = this.handleDropdown.bind(this);
    }

    componentDidMount() {
        if(this.props.subLinks) {
            const url = window.location.pathname;
            if(url.includes(this.props.id)) {
                this.setState({
                    dropdownState: 'opened',
                    downArrowClass: this.state.downArrowClass + ' rotate',
                })
            }
            else {
                this.setState({
                    dropdownState: 'closed',
                    downArrowClass: 'chevron-down',
                })
            }
        }
        if(location.pathname.includes(this.props.link)) {
            this.setState({
                isActive: true,
            })
        }
        else {
            this.setState({
                isActive: false
            })
        }
    }

    handleDropdown(event) {
        if(this.props.subLinks) {
            if(this.state.dropdownEnabled) {
                if(this.state.dropdownState === 'opened')
                    this.setState({
                        dropdownState: 'closed',
                        downArrowClass: 'chevron-down',
                    });
                else if(this.state.dropdownState === 'closed')
                    this.setState({
                        dropdownState: 'opened',
                        downArrowClass: 'chevron-down rotate',
                    });
            }
        }
    }

    render() {
        const openedDropdown = {
            display: 'block',
        }
        const hiddenDropdown = {
            display: 'none',
        }

        return (
            <li className={docsSidebarStyle.docsLink}>
                <div className="flex" onClick={(e) => this.handleDropdown(e) }>
                    <Link href={this.props.subLinks ? '' : `/docs/${this.props.link}`}>
                        <a className={this.state.isActive ? docsSidebarStyle.active: ''}>
                            <span className="docs-link">{this.props.title}</span>
                        </a>
                    </Link>
                    {this.props.subLinks ? <i className={this.state.isActive ? `${this.state.downArrowClass} active` : this.state.downArrowClass} icon-role="chevron-down" /> : ''}
                </div>
                {
                    this.props.subLinks ?
                        <div style={this.state.dropdownState === 'opened' ? openedDropdown : hiddenDropdown}>
                            <small>
                                <ul className={docsSidebarStyle.docsSubLinks}>
                                    {this.props.subLinks.map(subLink => {
                                        return (
                                            <Link key={subLink.id} href={`/docs/components/${subLink.link}`}>
                                                <a className={this.state.isActive && location.pathname.includes(subLink.id )? docsSidebarStyle.active: ''}>
                                                    <li>{subLink.title}</li>
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </small>
                        </div> : ''
                }
            </li>
        )
    }
}
