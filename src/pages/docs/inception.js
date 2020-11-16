import React from 'react';
import DocsSidebar from '../../components/DocsSidebar/DocsSidebar';
import Pagination from '../../components/Pagination';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';

export default function inception() {
    return (
        <div className="docs-contianer">
            <div className="docs-content">
                <article className="typography-article">
                    <h3>Inception</h3>
                    <p>
    
                    </p>
                    <PrismCodeBlock codeBlock={sampleCode} />
                </article>
                <Pagination currentPageId="inception" />
            </div>
            <div className="docs-sidebar-container">
                <DocsSidebar />
            </div>
        </div>
    )
}
