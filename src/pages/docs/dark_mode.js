import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { darkModeCodeBlocks } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function dark_mode() {
    return (
        <CommonDocsLayout currentPageId="dark_mode" pageHeader="Dark mode">
            <section>
                <p>
                    It is easy to enable the dark mode, follow these two steps so that dark mode can be enabled in your web app:
                </p>
                <p>
                    Since the main CSS file from this framework (which goes with the name <code>phi.css</code> or <code>phi.min.css</code>), doesn't have the dark mode CSS included in it, to keep the functionality focused on specific elements. You need to include the other file with having the name <code>phi-dark.css</code> or <code>phi-dark.min.css</code>.
                </p>
                <PrismCodeBlock codeBlock={darkModeCodeBlocks.includeDarkMode} />
                <p>If you want it to import it using javascript import you can use it this way:</p>
                <PrismCodeBlock codeBlock={darkModeCodeBlocks.importDarkMode} />
                <p>
                    Add the class <code>.dark</code> to the container element for which you need to enable the dark mode.
                </p>
                <PrismCodeBlock codeBlock={darkModeCodeBlocks.bodyClassCodeBlock} />
                <p>
                    Generally, dark mode is enabled for the whole page. But if you have any specific requirement, then you can enable it to any specific section or any div by adding the <code>.dark</code> class in the class list of that particular element, this way:
                </p>
                <PrismCodeBlock codeBlock={darkModeCodeBlocks.divClassCodeBlock} />
                <p>Want to see how it actually looks in action, head over to this <Link href=""><a className="link link-primary">website</a></Link>.</p>
            </section>
        </CommonDocsLayout>
    )
}
