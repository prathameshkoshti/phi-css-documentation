import React from 'react';
import PrismCodeBlock from '../../components/PrismCodeBlock';
import CommonDocsLayout from '../../components/CommonDocsLayout';
import { customizationsCodeBlocks } from '../../utils/codeBlocks';
import { customizationTable } from '../../utils/customizationTableData';
import Link from 'next/link';

export default function customizations() {
    return (
        <CommonDocsLayout currentPageId="customizations" pageHeader="Customizations">
            <section>
                <p>
                    If you wish you can use the parts of the framework, if you want to utilize the grid but not interested in other features, then you need to import <code>grid.min.css</code> or <code>grid.css</code>. Similarly, the whole framework is modularized, so based on the requirement, you can pull up the CSS file you need. Below table represents what is included in the CSS files which are provided by this framework.
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Module
                            </th>
                            <th>
                                File
                            </th>
                            <th>
                                Feature
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customizationTable.map(row => {
                                return (
                                    <tr>
                                        <td>{row.name}</td>
                                        <td>{row.file}</td>
                                        <td>{row.feature}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
            <section>
                <p>
                    If you want to do more customizations to the framework, such as changing the color codes, changing the font families, changing the phi values then you can also do the changes to other sass files if you are confident about it. Follow the following steps to customize the framework.
                </p>
            </section>
            <section>
                <h4>Clone the repo</h4>
                <p>
                    The very first step to customize the framework is to clone the repository by executing the following command in your terminal.
                </p>
                <PrismCodeBlock codeBlock={customizationsCodeBlocks.gitCloneCodeBlock} />
                <p>
                    Open the cloned repository in your preferred code editor. Most of the modification will reside inside the <code>sass/_variable.scss</code> file.
                </p>
            </section>
            <section>
                <h4>Modifying the variables</h4>
                <section>
                    <h5>Base variable</h5>
                    <p>
                        This is the most import variable among all the other variables. The whole framework is based on this single variable.
                    </p>
                    <div className="note">
                        <p>
                            When you change the <code>$phi</code> variable make sure you have done some calculations before touching this variable, because this value is used everywhere from generating color palette (based on standard colors), typography, grid, white-spacing, tables, utilities, etc. To know how this value affects the grid, palette, and other few features visit this detailed <Link href="#"><a className="link link-blockquote">explanation</a></Link> on how this framework was created and utilizes this <code>$phi</code> variable.
                        </p>
                    </div>
                    <PrismCodeBlock codeBlock={customizationsCodeBlocks.phiVariableCodeBlock} />
                </section>
                <section>
                    <h5>Colors</h5>
                    <p>
                        Following are the standard colors that are used in this framework:
                    </p>
                    <PrismCodeBlock codeBlock={customizationsCodeBlocks.colorVariablesCodeBlock} />
                    <p>
                        Except for variables <code>$light</code> and <code>$dark</code>, tint and shades will be created for each standard colors. So if you modify these colors, tints and shades will be generated as per the specified color palette. Visit <Link href="/docs/colors"><a className="link link-primary">this</a></Link> page to know the colors that are used in this framework
                    </p>
                </section>
                <section>
                    <h5>Font families</h5>
                    <p>
                        Following fonts variables are set which are used within the framework, if you decide to use some different font families in your webpages, you can do the modification to these variables.
                    </p>
                    <PrismCodeBlock codeBlock={customizationsCodeBlocks.fontFamiliesCodeBlock} />
                </section>
                <section>
                    <h5>Transition variable</h5>
                    <p>
                        This variable is generally used for state transition for links, buttons. etc.
                    </p>
                    <PrismCodeBlock codeBlock={customizationsCodeBlocks.transitionVariableCodeBlock} />
                    <p>
                        By default, it has value <code>0.3s ease-in-out</code>, you can do the modification as per your requirement.
                    </p>
                </section>
                <section>
                    <h5>Other variables</h5>
                    <p>
                        There are other variables available as well, but those are dependent on the above variables. These variables are computed based on the above variable so, understand how the calculations are performed before you modify these variables. Want to know more about how these variables are computed? Visit this <Link href="#"><a className="link link-primary">page</a></Link>.
                    </p>
                </section>
            </section>
            <section>
                <h4>Run gulp script</h4>
                <p>
                    After customizing the variables as per your requirement, make sure you run this command which will compose standard as well as minified CSS files from the SASS.
                </p>
                <PrismCodeBlock codeBlock={customizationsCodeBlocks.gulpCommandCodeBlock} />
                <p>
                    This command will execute the gulp script, which will create the distributable version of the framework. This gulp script executes the following steps to create a distribution:
                </p>
                <ul>
                    <li>
                        Clean up the existing <code>./dist</code> folder in the root directory.
                    </li>
                    <li>
                        Convert SASS to vanilla CSS.
                    </li>
                    <li>
                        Auto-prefix the CSS properties for maintaining the consistency across different browsers.
                    </li>
                    <li>
                        Minify the autoprfixed CSS files.
                    </li>
                    <li>
                        After minifying the files, Save all the CSS files (both standard and minified) inside the <code>./dist</code> folder in the root directory.
                    </li>
                </ul>
            </section>
        </CommonDocsLayout>
    )
}
