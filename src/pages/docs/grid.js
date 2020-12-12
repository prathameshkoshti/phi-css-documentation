import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { gridCodeBlocks } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import Link from 'next/link';

export default function grid() {
    return (
        <CommonDocsLayout currentPageId="grid" pageHeader="Grid">
            <section>
                <p>
                    The whole grid fabricated using the number <strong>1.618</strong>. If you want to know more about how was it curated, visit the <Link href="/idea"><a className="link link-primary">Idea</a></Link>.
                </p>
            </section>
            <section>
                <h4>Row</h4>
                <p>
                    When you define a container for your webpage, you can add rows in it. The row uses flexbox layout to hold multiple columns within itself. To add a row inside your container, add a <code>.row</code> class to a div like this:
                </p>
                <PrismCodeBlock codeBlock={gridCodeBlocks.rowCode} />
            </section>
            <section>
                <h4>Columns</h4>
                <p>
                    In this framework, columns are divided using the number <strong>1.618</strong>. Since the number is irrational in nature, the grid cannot be divided/broken into 12-columns or 24-columns layout, which is a general concept of any grid (Most CSS frameworks follow this mechanism).
                </p>
                <p>
                    This might seem different than what we are generally used to. But this grid system will enable a user to divide the container using the golden ratio. To use columns in the <code>.row</code>, you can use a div element with class <code>.phi-col-*</code>, * can be from 1 to 7, base, xl, lg, md, sm and xs.
                </p>
                <ul>
                    <li>
                        <code>.phi-col-0</code> or <code>.phi-col-base</code> column will occupy 100% of the container.
                    </li>
                    <li>
                        <code>.phi-col-1</code> column is equivalent to the <code>.phi-col-xl</code> column, both can be used alternatively.
                    </li>
                    <li>
                        <code>.phi-col-2</code> column is equivalent to the <code>.phi-col-lg</code> column, both can be used alternatively.
                    </li>
                    <li>
                        <code>.phi-col-3</code> column is equivalent to the <code>.phi-col-md</code> column, both can be used alternatively.
                    </li>
                    <li>
                        <code>.phi-col-4</code> column is equivalent to the <code>.phi-col-sm</code> column, both can be used alternatively.
                    </li>
                    <li>
                        <code>.phi-col-5</code> column is equivalent to the <code>.phi-col-xs</code> column, both can be used alternatively.
                    </li>
                </ul>
                <p>
                    Here's how they look in action, try to resize the browser window if you are visiting the documentation from desktop, the columns will acquire the 100% width when the screen width reaches <code>765px</code> breakpoint.
                </p>
                <div className="code-output">
                    <div className="row">
                        <div className="phi-col-base"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-0"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-xl"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-1"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-lg"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-2"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-md"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-3"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-sm"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-4"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-xs"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-5"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-6"></div>
                    </div>
                    <div className="row">
                        <div className="phi-col-7"></div>
                    </div>
                </div>
                <p>
                    Below are some of the possible combinations of the columns which can be used in the webpages:
                </p>
                <code>.phi-col-2</code> and <code>.phi-col-3</code>
                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo1Code} />

                <code>.phi-col-2</code>, <code>.phi-col-4</code> and <code>.phi-col-5</code>
                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo2Code} />

                <code>.phi-col-2</code>, <code>.phi-col-5</code>, <code>.phi-col-6</code> and <code>.phi-col-7</code>
                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo3Code} />

                <code>.phi-col-md</code> and <code>.phi-col-sm</code>
                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo4Code} />

                <code>.phi-col-3</code>, <code>.phi-col-4</code> and <code>.phi-col-5</code>
                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo5Code} />

                <code>.phi-col-4</code> and <code>.phi-col-5</code>
                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo6Code} />

                <p>You might have a question in your mind, what about equally distributed columns? Is it possible with this framework? No not really possible because of phi's irrational nature. But there is a kind of tweak you can do to achieve this, with the help of utility classes. Read more about it <Link href="/docs/utilities"><a className="link link-primary">here</a></Link>. You can combine the utility classes functionality to achieve the desired equally distributed layout at a certain point. For example,</p>

                <PrismCodeBlock codeBlock={gridCodeBlocks.colCombo7Code} />
            </section>
        </CommonDocsLayout>
    )
}
