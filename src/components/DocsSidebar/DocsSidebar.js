import React, { Component } from 'react';

import { docsLinks } from '../../utils/siteData';
import docsSidebarStyle from '../../css/docs-sidebar.module.css';
import DocsItem from './DocsItem';

export default class DocsSidebar extends Component {
    render() {
        return (
            <div className={docsSidebarStyle.docsSidebar}>
                <ul className={docsSidebarStyle.docsLinks}>
                    {docsLinks.map(link => (
                        <DocsItem id={link.id} key={link.id} href={link.href} name={link.name} subLinks={link.subLinks} />
                    ))}
                </ul>
            </div>
        )
    }
}
