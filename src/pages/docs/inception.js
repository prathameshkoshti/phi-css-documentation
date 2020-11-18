import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function inception() {
    return (
        <CommonDocsLayout currentPageId="inception" pageHeader="Inception">
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleCode} />
        </CommonDocsLayout>
    )
}
