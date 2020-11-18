import React from 'react';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { sampleCode } from '../../../utils/codeBlocks';
import CommonDocsLayout from '../../../components/CommonDocsLayout';

export default function tables() {
    return (
        <CommonDocsLayout currentPageId="tables" parentPageId="components">
            <h3>Tables</h3>
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleCode} />
        </CommonDocsLayout>
    )
}
