import React, { Component } from 'react';
import DocsSidebar from '../components/DocsSidebar/DocsSidebar';
import Pagination from '../components/Pagination';

export default class CommonDocsLayout extends Component {
    render() {
        return (
            <div className="docs-contianer">
            <div className="page-header full-width">
                <h3>{this.props.pageHeader}</h3>
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
