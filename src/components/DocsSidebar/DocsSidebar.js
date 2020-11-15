import React, { Component } from 'react';

import { docsLinks } from '../../utils/siteData';
import docsSidebarStyle from '../../css/modules/docs-sidebar.module.css';
import DocsItem from './DocsItem';

export default class DocsSidebar extends Component {
    render() {
        return (
            <div className={docsSidebarStyle.docsSidebar}>
                <ul className={docsSidebarStyle.docsLinks}>
                    {docsLinks.map(docsLink => (
                        <DocsItem id={docsLink.id} key={docsLink.id} link={docsLink.link} title={docsLink.title} subLinks={docsLink.subLinks} />
                    ))}
                </ul>
            </div>
        )
    }
}
