import React from 'react'
import CommonDocsLayout from '../../../components/CommonDocsLayout';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { linksCodeBlocks } from '../../../utils/codeBlocks';

export default function links() {
    return (
        <CommonDocsLayout currentPageId="links" parentPageId="components" pageHeader="Links">
            <section>
                <h4>Links</h4>
                <p>
                    You are free to create following types of links:
                </p>
                <ul>
                    <li>Primary link</li>
                    <li>Secondary link</li>
                    <li>Info link</li>
                    <li>Success link</li>
                    <li>Waning link</li>
                    <li>Error link</li>
                </ul>
                <p>
                    Use a simple <code>&lt;a&gt;</code> tag with a class as <code>.link</code>. By default a link will be primary in nature.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.linkCodeBlock} />
                <p>
                    To create different links, use respective class associated witht the type along with the <code>&lt;a&gt;</code> tag. This how different types of links look like in action:
                </p>
                <div className="code-output links-code-output flex flex-wrap">
                    <a href="#" className="link">Primary link</a>
                    <a href="#" className="link link-secondary">Secondary link</a>
                    <a href="#" className="link link-info">Info link</a>
                    <a href="#" className="link link-success">Success link</a>
                    <a href="#" className="link link-warning">Warning link</a>
                    <a href="#" className="link link-error">Error link</a>
                    <a href="#" className="link link-grey">Grey link</a>
                </div>
                <p>
                    To create a secondary link add a class <code>.link-secondary</code> in the <code>&lt;a&gt;</code> tag's class attribute.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.secondaryLinkCodeBlock} />
                <p>
                    Similarly, to create info link, you can add <code>.link-info</code> in the <code>&lt;a&gt;</code> tag's class attribute.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.infoLinkCodeBlock} />
                <p>
                    To create a success link add <code>.link-success</code> in the <code>&lt;a&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.successLinkCodeBlock} />
                <p>
                    To create a warning link use <code>.link-warning</code> in the <code>&lt;a&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.warningLinkCodeBlock} />
                <p>
                    To create a error link use <code>.link-error</code> in the <code>&lt;a&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.errorLinkCodeBlock} />
                <p>
                    To create a grey link use <code>.link-grey</code> in the <code>&lt;a&gt;</code> tag.
                </p>
                <PrismCodeBlock codeBlock={linksCodeBlocks.greyLinkCodeBlock} />
                <div className="note">
                    <p>
                        To use other types of links other than the primary it is necessary to add <code>.link</code> class to have the basic styling for the link and the other class will override the styling as per specified class.
                    </p>
                </div>
            </section>
        </CommonDocsLayout>
    )
}
