import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { sampleCode, utilitiesCodeBlocks } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function utilities() {
    return (
        <CommonDocsLayout currentPageId="utilities" pageHeader="Utilities">
            <section>
                <h4>
                    Variable exports
                </h4>
                <p>
                    This framework also has some CSS variables (a.k.a CSS custom properties). If you have some requirement to utilize the existing values (To maintain consistency) and have trouble remembering all of the, so not worry, the framework will provide the CSS variables out of the box, you don't need to create any additional.
                </p>
                <p>Following are the variables that are exported it contains colors, font-families and phi variables:</p>
                <ul>
                    <li>
                        <h5>Phi variables</h5>
                        <span>These variables are generally used for applying the margin and padding for an element.</span>
                        <PrismCodeBlock codeBlock={utilitiesCodeBlocks.cssVariablePhiCodeBlock} />
                    </li>
                    <li>
                        <h5>Font family variables</h5>
                        <span>By default it uses "Playfair display" for serif font, "Poppins" for sans-serif font and "Fira code" for monospace font.</span>
                        <PrismCodeBlock codeBlock={utilitiesCodeBlocks.cssVariableFontsCodeBlock} />
                    </li>
                    <li>
                        <h5>Color variables</h5>
                        <span>These are the the colors which are being used in the framework for elements link, button, font color.</span>
                        <PrismCodeBlock codeBlock={utilitiesCodeBlocks.cssVariableColorsCodeBlock} />
                    </li>
                </ul>
            </section>
            <section>
                <h4>Full width containers</h4>
                <p>
                    You might have faced this situation while you are working in the limited width container let say which has <code>max-width: 991px</code> and you might have to create a full width banner or a full width hero image. You might have followed a a layout in which the the banner or the hero image is placed outside the container.
                </p>
                <p>
                    Well using this framework you can avoid it entirelly, you don't have to break the flow inside the container, you can include the banner or the image inside the container by adding the following class.
                </p>
                <PrismCodeBlock codeBlock={utilitiesCodeBlocks.fullWidthCodeBlock} />
                <div className="note">
                    <p>
                        This <code>.phi-full-width</code> will take up width of viewport width i.e. <code>100vw</code>
                    </p>
                </div>
            </section>
        </CommonDocsLayout>
    )
}
