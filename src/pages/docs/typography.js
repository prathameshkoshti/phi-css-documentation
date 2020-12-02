import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { typographyCodeBlocks } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function typography() {
    return (
        <CommonDocsLayout currentPageId="typography" pageHeader="Typography">
            <section>
                <h4>General configurations</h4>
                <p>
                    In the framework there are few significant things set globally for the typography:
                </p>
                <ul>
                    <li>
                        <code>line-height</code> is based on golden ratio (i.e. <strong>1.618</strong>).
                    </li>
                    <li>
                        <code>letter-spacing</code> and <code>word-spacing</code> are derived using the golden ratio.
                    </li>
                    <li>
                        Also, the pargraph width is derived using the golden ratio.
                    </li>
                    <li>
                        By default it uses sans-serif font for all sort of texts. (Wait what? Default font set to sans-serif, does that mean you can have serif font as well? <strong>Well, yes!</strong>)
                    </li>
                    <li>
                        In this framework, Poppins is the sans-serif font, whereas the Playfair Display being used as a serif font. You can customize this as well, visit this <Link href="/docs/customizations"><a className="link link-primary">customization</a></Link> section.
                    </li>
                </ul>
            </section>
            <section>
                <h4>Headings</h4>
                <p>You can use html headings from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.headingCodeBlock} />
            </section>
            <section>
                <h4>Lists</h4>
                <p>
                    Unordered lists:
                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.unorderedListcodeBlock} />
                <p>
                    Ordered lists:
                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.orderedListCodeBlock} />
            </section>
            <section>
                <h4>Blockquote</h4>
                <p>

                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.blockquoteCodeBlock} />
            </section>
            <section>
                <h4>Code</h4>
                <p>
                    You can create inline code using <code>&lt;code&gt;</code>.
                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.codeCodeBlock} />
                <p>
                    To display a keyboard input, you can use the <code>&lt;kbd&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.kbdCodeBlock} />
                <p>
                    To illustrate a Sample output, utilize the <code>&lt;samp&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.sampCodeBlock} />
                <p>
                    To illustrate a Sample output, utilize the <code>&lt;var&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.varCodeBlock} />
            </section>
            <section>
                <h4>Fluid typography</h4>
                <p>
                    The frameowrk also provides fluid typography feature (with no media queries). If you have wide screen monitor (at least 1440px wide), try resizing the browser window, you'll see font size reducing without any stepping observed as you reduce the width.
                </p>
            </section>
            <section>
                <h4>
                    Contrasting typography
                </h4>
                <p>
                    There are three types of fonts combination, the one you are seeing now is the default one, which uses sans-serif for both heading elements and other elements.
                </p>
                <p>
                    The second one uses combination of serif and sans-serif font, heading elements i.e. h1, h2, h3, h4, h5, h6 will have serif font and others will have sans-serif font.
                </p>
                <p>
                    The third one will also use both font styles but heading elements will have sans-serif style whereas others will have the serif font.
                </p>
                <p>
                    To make use of it add any one of the above class to a body tag or a div tag (if you don't want it globally). The examples are shown below (here it is applied to a div tag.)
                </p>
                <p>Contrasting font style 1 applied using class <code>.contrast-style-1</code></p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.contrastinFont1CoddeBlock} />
                <p>Contrasting font style 2 applied using class <code>.contrast-style-2</code></p>
                <PrismCodeBlock codeBlock={typographyCodeBlocks.contrastinFont2CoddeBlock} />

            </section>
        </CommonDocsLayout>
    )
}
