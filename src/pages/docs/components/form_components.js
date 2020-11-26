import React from 'react';
import CommonDocsLayout from '../../../components/CommonDocsLayout';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { formComponenetCodeBlocks } from '../../../utils/codeBlocks';

export default function form_components() {
    return (
        <CommonDocsLayout currentPageId="form_components" parentPageId="components" pageHeader="Form components">
            <section>
                <h4>Input field</h4>
                <p>
                    Link will be using the accent color by default.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.linkCodeBlock} />
            </section>
            <section>
                <h4>Buttons</h4>
                <p></p>
            </section>
        </CommonDocsLayout>
    )
}
