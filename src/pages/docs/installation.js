import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function installation() {
    return (
        <CommonDocsLayout currentPageId="installation" pageHeader="Installation">
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleCode} />
        </CommonDocsLayout>
    )
}
