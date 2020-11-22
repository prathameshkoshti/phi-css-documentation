import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { npmInstallCmd, importCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function installation() {
    return (
        <CommonDocsLayout currentPageId="installation" pageHeader="Installation">
            <section>
                <p>
                    If you are building a website using a javascript framework, you can install this framework using the following npm command.
                </p>
                <PrismCodeBlock codeBlock={npmInstallCmd} />
                <p>
                    After installation of the package, you can import the CSS file using ES6 import:
                </p>
                <PrismCodeBlock codeBlock={importCode} />
                <p>
                    After importing, you can directly use the class names in the HTML elements.
                </p>
            </section>
        </CommonDocsLayout>
    )
}
