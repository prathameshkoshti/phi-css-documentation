import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleHTMLCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function dark_mode() {
    return (
        <CommonDocsLayout currentPageId="dark_mode" pageHeader="Dark mode">
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleHTMLCode} />
        </CommonDocsLayout>
    )
}
