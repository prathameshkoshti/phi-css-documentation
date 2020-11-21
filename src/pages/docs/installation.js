import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { npmInstallCmd, importCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function installation() {
    return (
        <CommonDocsLayout currentPageId="installation" pageHeader="Installation">
            <p>
                If you are building a website using a javascript framework, you can install this framework using the following npm command.
            </p>
            <PrismCodeBlock codeBlock={npmInstallCmd} />
            <p>
                After installation of the package, you can import the CSS file using ES6 import:
            </p>
            <PrismCodeBlock codeBlock={importCode} />
            <p>
                After importing, directly use the class names in the HTML elements.
            </p>
            <p>
                If you don't want to utilize all the features, you can import the specific modules based on your requirements. Yes! The framework is entirely modularized. Please check the <Link href="/docs/customizations"><a>customizations</a></Link> section to know more about it.
            </p>
        </CommonDocsLayout>
    )
}
