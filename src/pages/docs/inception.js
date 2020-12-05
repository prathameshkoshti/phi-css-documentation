import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { includePhiCode, includePhiMinCode } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function inception() {
    return (
        <CommonDocsLayout currentPageId="inception" pageHeader="Inception">
            <section>
                <p>
                    The number <strong>1.618</strong> is the origin of this whole idea. Well you can see many natural as well as man made examples of phi (Φ), like the Spiral Galaxies, Sunflower's seed haed, Chameleon tails, Sea shells, Hurricane Isabel, Human body, columns of the Parthenon, Leonardo Da Vinci's Mona Lisa and The Vetruvian Man, and many more.
                </p>
                <blockquote>
                    The Golden Ratio (phi = φ) is often called The Most Beautiful Number In The Universe. The reason φ is so extraordinary is because it can be visualized almost everywhere, starting from geometry to the human body itself!
                    The Renaissance Artists called this “The Divine Proportion” or “The Golden Ratio”.
                </blockquote>
                <p>
                    You can add the <strong>phi-css</strong> using the unpkg CDN link. Here's the quickest way to add it in your website, include the following <code>&lt;link&gt;</code> tag in your webpage's <code>&lt;head&gt;</code>.
                </p>
                <PrismCodeBlock codeBlock={includePhiMinCode} />
                <p>
                    You are free to do major as well as minor customizations within the framework. If you don't want to utilize all the features, you can import the specific modules based on your requirements. Yes! The framework is entirely modularized.
                </p>
                <p>Refer this link to know more about the <Link href="/docs/customizations"><a className="link link-primary">customizations</a></Link>.</p>
            </section>
        </CommonDocsLayout>
    )
}
