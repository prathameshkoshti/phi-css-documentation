import React from 'react';
import CommonDocsLayout from '../../../components/CommonDocsLayout';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { buttonsCodeBlocks } from '../../../utils/codeBlocks';

export default function buttons() {
    return (
        <CommonDocsLayout currentPageId="buttons" parentPageId="components" pageHeader="Buttons">
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
                    <button className="button button-primary" title="Primary Button">Primary Button</button>
                    <button className="button button-secondary" title="Secondary Button">Secondary Button</button>
                    <button className="button button-ghost" title="Ghost Button">Ghost Button</button>
                    <button className="button button-grey" title="Grey Button">Grey Button</button>
                    <br />
                    <button className="button button-info" title="Info Button">Info Button</button>
                    <button className="button button-success" title="Success Button">Success Button</button>
                    <button className="button button-warning" title="Warning Button">Warning Button</button>
                    <button className="button button-error" title="Error Button">Error Button</button>
                </div>
                <p>
                    To create a button, use the <code>&lt;button&gt;</code> tag with class <code>.button</code>. By default, the button will be the primary button.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.buttonCodeBlock} />
                <p>
                    To create a secondary button, add another class <code>.button-secondary</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.secondaryButtonCodeBlock} />
                <p>
                    To create a ghost button, add this class: <code>.button-ghost</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.ghostButtonCodeBlock} />
                <p>
                    To create a grey button, add this class: <code>.button-grey</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.greyButtonCodeBlock} />
                <p>
                    To create an info button, add this class: <code>.button-info</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.infoButtonCodeBlock} />
                <p>
                    To create a success button, add this class: <code>.button-success</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.successButtonCodeBlock} />
                <p>
                    To create a warning button, add this class: <code>.button-warning</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.warningButtonCodeBlock} />
                <p>
                    To create an error button, add this class: <code>.button-error</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.errorButtonCodeBlock} />
                <p>
                    To create a disabled button, append another class to the existing classes <code>.button-disabled</code>.
                </p>
                <PrismCodeBlock codeBlock={buttonsCodeBlocks.disabledButtonCodeBlock} />
                <p>
                    Here's how disabled buttons look like (for each type of button.)
                </p>
                <div className="code-output">
                    <button className="button button-primary button-disabled" disabled title="Primary Button">Primary Button</button>
                    <button className="button button-secondary button-disabled" disabled title="Secondary Button">Secondary Button</button>
                    <button className="button button-ghost button-disabled" disabled title="Ghost Button">Ghost Button</button>
                    <button className="button button-grey button-disabled" disabled title="Grey Button">Grey Button</button>
                    <br />
                    <button className="button button-info button-disabled" disabled title="Info button">Info Button</button>
                    <button className="button button-success button-disabled" disabled title="Success Button">Success Button</button>
                    <button className="button button-warning button-disabled" disabled title="Warning Button">Warning Button</button>
                    <button className="button button-error button-disabled" disabled title="Error Button">Error Button</button>
                </div>
                <div className="note">
                    <p>
                        To utilize the other types of button other than the primary then it is necessary to add <code>.button</code> class to have the basic styling for the button, the other class will override the styling as per specified class.
                    </p>
                </div>
            </section>
        </CommonDocsLayout>
    )
}
