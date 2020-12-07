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
                    This framework also has some CSS variables (a.k.a CSS custom properties). If you have some requirement to utilize the existing values (To maintain consistency) and have trouble remembering all of them, so not worry, the framework will provide the CSS variables out of the box, you don't need to create any additional.
                </p>
                <p>Following are the variables that are exported it contains colors, font-families and phi variables:</p>
                <ul>
                    <li>
                        <h5>Phi variables</h5>
                        <p>These variables are generally used for applying the margin and padding for an element.</p>
                        <PrismCodeBlock codeBlock={utilitiesCodeBlocks.cssVariablePhiCodeBlock} />
                    </li>
                    <li>
                        <h5>Font family variables</h5>
                        <p>By default, it uses "Playfair display" for the serif font, "Poppins" for the sans-serif font and "Fira code" for the monospace font, only if you import it using the google fonts or by hosting the font families on the server itself</p>
                        <PrismCodeBlock codeBlock={utilitiesCodeBlocks.cssVariableFontsCodeBlock} />
                    </li>
                    <li>
                        <h5>Color variables</h5>
                        <p>These are the colors which are being used in the framework for elements link, button, font color.</p>
                        <PrismCodeBlock codeBlock={utilitiesCodeBlocks.cssVariableColorsCodeBlock} />
                    </li>
                </ul>
            </section>
            <section>
                <h4>Full width containers</h4>
                <p>
                    You might have faced this situation while you are working in the limited width container let say which has <code>max-width: 991px</code> and you might have to create a full-width banner or a full-width hero image. You might have followed a layout in which the banner or the hero image is placed outside the container.
                </p>
                <p>
                    Well using this framework, you can avoid it entirely, you don't have to break the flow inside the container, you can include the banner or the image inside the container by adding the following class.
                </p>
                <PrismCodeBlock codeBlock={utilitiesCodeBlocks.fullWidthCodeBlock} />
                <div className="note">
                    <p>
                        This <code>.phi-full-width</code> will take up width of viewport width i.e. <code>100vw</code>
                    </p>
                </div>
                <p>
                    Checkout this <a className="link link-primary" target="_blank" href="https://codepen.io/phi-css/pen/LYRNZGN">example</a> to see how it looks like.
                </p>
            </section>
            <section>
                <h4>
                    Display utilities
                </h4>
                <p>
                    These can be used to set display property for any element in the webpage.
                </p>
                <ul>
                    <li><code>.block</code></li>
                    <li><code>.inline-block</code></li>
                    <li><code>.hide</code></li>
                </ul>
                <p>
                    This doesn't contain the <code>display: flex</code>, check below section to know how to use flex layouts in your webpage.
                </p>
            </section>
            <section>
                <h4>Flex utilities</h4>
                <p>
                    The framework provides flex utilities, for applying flexbox configuration by adding the following classes so that you don't have to write any additional CSS for flex layouts. These are self-explanatory if you are familiar with the flexbox layout.
                </p>
                <ul>
                    <li><code>.flex</code></li>
                    <li><code>.flex-column</code></li>
                    <li><code>.flex-row-reverse</code></li>
                    <li><code>.flex-column-reverse</code></li>
                    <li><code>.justify-content-start</code></li>
                    <li><code>.justify-content-end</code></li>
                    <li><code>.justify-content-center</code></li>
                    <li><code>.justify-content-space-evenly</code></li>
                    <li><code>.justify-content-space-around</code></li>
                    <li><code>.align-items-start</code></li>
                    <li><code>.align-items-end</code></li>
                    <li><code>.align-items-center</code></li>
                    <li><code>.align-items-baseline</code></li>
                    <li><code>.align-items-stretch</code></li>
                    <li><code>.flex-wrap</code></li>
                    <li><code>.flex-wrap-reverse</code></li>
                </ul>
                <div className="note">
                    <p>
                        Since the grid is based on the flexbox so these classes may come in handy while adjusting the elements as per requirement.
                    </p>
                </div>
            </section>
        </CommonDocsLayout>
    )
}
