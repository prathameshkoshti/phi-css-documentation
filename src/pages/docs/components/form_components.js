import React from 'react';
import DocsSidebar from '../../../components/DocsSidebar/DocsSidebar';
import Pagination from '../../../components/Pagination';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { sampleCode } from '../../../utils/codeBlocks';

export default function form_components() {
    return (
        <div className="docs-contianer">
            <div className="docs-content">
                <article>
                    <h3>Form Components</h3>
                    <p>
    
                    </p>
                    <PrismCodeBlock language="css" code={sampleCode} />
                </article>
                <Pagination currentPageId="form_components" parentPageId="components" />
            </div>
            <div className="docs-sidebar-container">
                <DocsSidebar />
            </div>
        </div>
    )
}
