import React, { Component } from 'react';
import DocsSidebar from '../components/DocsSidebar/DocsSidebar';
import Pagination from '../components/Pagination';
import { docsBackground } from '../utils/docsBackgrounds';

export default class CommonDocsLayout extends Component {
    render() {
        let headerStyle = {};

        if (this.props.currentPageId === 'dark_mode') {
            headerStyle = {
                color: 'var(--accent-tint)'
            }
        }

        return (
            <div className="docs-contianer">
                <div className="page-header full-width">
                    <h3 style={headerStyle}>{this.props.pageHeader}</h3>
                    <div className="tint" style={docsBackground[this.props.currentPageId].tintStyle}>
                        {
                            docsBackground[this.props.currentPageId].tintContent ?
                            <div>Aa</div> : ''
                        }
                    </div>
                    <div className="header-background" style={docsBackground[this.props.currentPageId].style}></div>
                </div>
                <div className="docs-content">
                    <article>
                        <div className="page-content">
                            {this.props.children}
                        </div>
                    </article>
                    <Pagination currentPageId={this.props.currentPageId} parentPageId={this.props.parentPageId} />
                </div>
                <div className="docs-sidebar-container">
                    <DocsSidebar />
                </div>
            </div>
        )
    }
}
