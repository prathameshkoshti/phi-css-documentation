import React from 'react';
import Prism from "prismjs";
import DocsSidebar from '../../components/DocsSidebar/DocsSidebar';
import Pagination from '../../components/Pagination';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';

export default function grid() {
    return (
        <div className="docs-contianer">
            <div className="docs-content">
                <article>
                    <h3>Grid</h3>
                    <p>
    
                    </p>
                    <PrismCodeBlock language="css" code={sampleCode} />
                </article>
                <Pagination currentPageId="grid" />
            </div>
            <div className="docs-sidebar-container">
                <DocsSidebar />
            </div>
        </div>
    )
}
