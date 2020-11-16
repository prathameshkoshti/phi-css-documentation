import React from 'react';
import DocsSidebar from '../../components/DocsSidebar/DocsSidebar';
import Pagination from '../../components/Pagination';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleHTMLCode } from '../../utils/codeBlocks';

export default function dark_mode() {
    return (
        <div className="docs-contianer">
            <div className="docs-content">
                <article>
                    <h3>Dark mode</h3>
                    <p>
    
                    </p>
                    <PrismCodeBlock codeBlock={sampleHTMLCode} />
                </article>
                <Pagination currentPageId="dark_mode" />
            </div>
            <div className="docs-sidebar-container">
                <DocsSidebar />
            </div>
        </div>
    )
}
