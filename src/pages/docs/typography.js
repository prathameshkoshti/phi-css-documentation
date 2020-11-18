import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function typography() {
    return (
        <CommonDocsLayout currentPageId="typography" pageHeader="Typography">
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleCode} />
        </CommonDocsLayout>
    )
}
