import React from 'react';
import CommonDocsLayout from '../../../components/CommonDocsLayout';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { sampleCode } from '../../../utils/codeBlocks';

export default function form_components() {
    return (
        <CommonDocsLayout currentPageId="form_components" parentPageId="components">
            <h3>Form components</h3>
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleCode} />
        </CommonDocsLayout>
    )
}
