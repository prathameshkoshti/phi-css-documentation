import React from 'react'
import ColorTable from '../../components/ColorTable';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function colors() {
    return (
        <CommonDocsLayout currentPageId="colors" pageHeader="Colors">
            <section>
                <p>
                    Only standard colors are defined and from the standard colors, tints and shades are generated using <code>$phi</code> value. Checkout the below table to see which colors are readily available. You can also use the CSS variables (a.k.a. CSS Custom Properties) to utilize these colors in your website.
                </p>
                <ColorTable />
            </section>
        </CommonDocsLayout>
    )
}
