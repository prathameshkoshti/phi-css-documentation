import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { tableCodeBlocks } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function tables() {
    return (
        <CommonDocsLayout currentPageId="tables" pageHeader="Tables">
            <section>
                <p>
                    You only need to add <code>.table</code> class to the <code>&lt;table&gt;</code> element.
                </p>
                <PrismCodeBlock codeBlock={tableCodeBlocks.simpleTableCodeBlock} />
            </section>
            <section>
                <h4>
                    Responsive tables
                </h4>
                <p>
                    To make the table responsive, you need to wrap the table with a div having the class <code>.table-responsive</code>.
                </p>
                <PrismCodeBlock codeBlock={tableCodeBlocks.responsiveTableCodeBlock} />
            </section>
        </CommonDocsLayout>
    )
}
