import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function customizations() {
    return (
        <CommonDocsLayout currentPageId="customizations" pageHeader="Customizations">
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleCode} />
        </CommonDocsLayout>
    )
}
