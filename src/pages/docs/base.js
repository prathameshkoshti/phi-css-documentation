import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import { baseCodeBlocks } from '../../utils/codeBlocks';
import CommonDocsLayout from '../../components/CommonDocsLayout';

export default function base() {
    return (
        <CommonDocsLayout currentPageId="base" pageHeader="Base">
            <section>
                <p>
                    This framework is built on top of <a target="_blank" href="https://necolas.github.io/normalize.css/">Normalize.css</a>, which acts as the CSS reset to maintain consistency accross the browsers. If you wish to know more about it then head over this <a href="http://nicolasgallagher.com/about-normalize-css/" target="_blank">guide</a>, you can find the repository link in this guide as well.
                </p>
                <p>
                    Since the whole framework is made using SASS (a CSS preprocessor), this framework did not use the CSS version of the Normalize.css, but the SCSS version. Also it is the optimized version of Normalize.css to reduce the file size.
                </p>
                <p>
                    Even though the base is purely based on Narmalize.css, there are few additional features added in it which are basic as well as important in terms of framework.
                </p>
            </section>
            <section>
            <h4>Contianer</h4>
                <p>
                    The most basic required element is the container, which uses <code>max-width: 960px</code>, will be always horizontally centered in the page. You can utilize this container to hold your grid structure.
                </p>
                <PrismCodeBlock codeBlock={baseCodeBlocks.containerCode} />
            </section>
            <section>
                <h4>Responsive images</h4>
                <p>
                    To make an image responsive add the class <code>phi-image</code> in the <code>img</code> tag, so that it will always scale according to the viewport width. If you are using desktop browser, try to resize the browser window. The image won't get overflow beyond the border of the output eleemnt, will always stay within the element.
                </p>
                <PrismCodeBlock codeBlock={baseCodeBlocks.responsiveImageCode} />
            </section>
        </CommonDocsLayout>
    )
}
