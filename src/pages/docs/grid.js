import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function grid() {
    return (
        <CommonDocsLayout currentPageId="grid" pageHeader="Grid">
            <section>
                <p>
                    
                </p>
                <PrismCodeBlock codeBlock={sampleCode} />
            </section>
        </CommonDocsLayout>
    )
}
