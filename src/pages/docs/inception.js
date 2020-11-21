import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { includePhiCode, includePhiMinCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function inception() {
    return (
        <CommonDocsLayout currentPageId="inception" pageHeader="Inception">
            <p>
                The number <strong>1.618</strong> is the origin of this whole idea.
            </p>
            <p>
                You can add the <strong>phi-css</strong> using the unpkg CDN link. Here's the quickest way to add it in your website, include the following <code>&lt;link&gt;</code> tag in your <code>&lt;head&gt;</code>.
            </p>
            <PrismCodeBlock codeBlock={includePhiMinCode} />
            <p>
                You are free to do major as well as minor customizations in the framework. If you wish to do some minor customizations, then you can go with standard (non-minified) version to improve the readability of the stylesheet. Refer this link to know more about the <Link href="/docs/customizations"><a>customizations</a></Link>.
            </p>
            <PrismCodeBlock codeBlock={includePhiCode} />
        </CommonDocsLayout>
    )
}
