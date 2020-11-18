import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleHTMLCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function dark_mode() {
    return (
        <CommonDocsLayout currentPageId="dark_mode" >
            <h3>Dark mode</h3>
            <p>

            </p>
            <PrismCodeBlock codeBlock={sampleHTMLCode} />
        </CommonDocsLayout>
    )
}
