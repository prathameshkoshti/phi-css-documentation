import React from 'react'
import CommonDocsLayout from '../../../components/CommonDocsLayout';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { formComponenetCodeBlocks } from '../../../utils/codeBlocks';

export default function links_and_buttons() {
    return (
        <CommonDocsLayout currentPageId="links_and_buttons" parentPageId="components" pageHeader="Links and Buttons">
            <section>
                <h4>Link</h4>
                <p>
                    Use a simple <code>&lt;a&gt;</code> tag without any class. By default a link will be using the accent color by default.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.linkCodeBlock} />
            </section>
            <section>
                <h4>Buttons</h4>
                <p>
                Following types of buttons can be created using this framework:
                </p>
                <ul>
                    <li>Primary button</li>
                    <li>Secondary button</li>
                    <li>Ghost button</li>
                    <li>Info button</li>
                    <li>Success button</li>
                    <li>Waning button</li>
                    <li>Error button</li>
                </ul>
                <div className="code-output">
                    <button className="button">Button</button>
                    <button className="button button-secondary">Button</button>
                    <button className="button button-ghost">Button</button>
                    <br />
                    <button className="button button-info">Button</button>
                    <button className="button button-success">Button</button>
                    <button className="button button-warning">Button</button>
                    <button className="button button-error">Button</button>
                </div>
                <p>
                    To create a button, use the <code>&lt;button&gt;</code> tag with class <code>.button</code>. By default the button will be primary button.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.buttonCodeBlock} />
                <p>
                    To create a secondary button, add another class <code>.button-secondary</code>.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.secondaryButtonCodeBlock} />
                <p>
                    To create a ghost button, add this class: <code>.button-ghost</code>. Ghost buttons act as button links, doesn't have any transitions.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.ghostButtonCodeBlock} />
                <p>
                    To create a disabled button, add another class <code>.button-disabled</code>.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.disabledButtonCodeBlock} />
                <p>
                    Here's how disabled buttons look like.
                </p>
                <div className="code-output">
                    <button className="button button-disabled" disabled>Primary Button</button>
                    <button className="button button-secondary button-disabled" disabled>Secondary Button</button>
                    <button className="button button-ghost button-disabled" disabled>Ghost Button</button>
                </div>
            </section>
        </CommonDocsLayout>
    )
}
