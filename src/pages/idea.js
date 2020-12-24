import React from 'react'
import PrismCodeBlock from '../components/PrismCodeBlock';
import { ideaCodeBlocks } from '../utils/codeBlocks';
import Image from 'next/image'

export default function idea() {
    return (
        <div className="phi-container idea-container contrast-style-2">
            <section>
                <h3 className="text-center">The idea</h3>
                <div className="phi-full-width">
                    {/* banner image to be used here. */}
                </div>
                <p className="text-justify">
                    The whole idea revolves around the golden ratio i.e. 1.618. From grid, typography, tables, buttons, form components, spacing to colors almost everything is based on this divine number.
                </p>
            </section>
            <section>
                <h4>Defining the base</h4>
                <p>
                    This framework uses the number 1.618, so a variable is defined in the SASS as follows with other rem variables derived from this number:
                </p>
                <PrismCodeBlock codeBlock={ideaCodeBlocks.baseVariablesCodeBlock} />
                <p>
                    As you can see here <code>1rem</code> with <code>$phi</code> is used to compute the value of the other two variables. These three variables play a major role in the framework. Read the content below to see how they are used throughout the framework.
                </p>
            </section>
            <section>
                <h4>Grid</h4>
                <p>
                    The columns are generated based on the generation of the golden rectangles. Grid is curated based on the full width in terms of percentage i.e. 100%. The base column (class names: <code>.phi-col-0</code> and <code>.phi-col-base</code>) utilizes 100% width. Other columns are then derived based on this column. The column width (dividend) is divided using the <code>$phi</code> (devisor), the resultant value (quotient) is the width of next column then the resultant value is subtracted from the dividend's width to get another new column. This method is used iteratively to create columns. See the gif below to get an idea.
                </p>
                <figure>
                    <Image className="phi-image" src="/gifs/grid_animation.gif" width="800px" height="600px" />
                    <figcaption></figcaption>
                </figure>
                <p>
                    This framework supports only eight columns because columns are curated irrationally as the 1.618 number is irrational. Even if we go beyond these eight columns, the columns wouldn't be useful in real-life examples, as their width is much smaller.
                </p>
                <p>
                    Let's see how other columns are created. Following code shows the SASS variables representing the column width.
                </p>
                <PrismCodeBlock codeBlock={ideaCodeBlocks.gridGenerationCodeBlock} />
                <p>
                    If you notice the columns, there is one column missing in the above code and the missing column is <code>$phiCol1</code>. Well, this column has different implementation than the above columns, it is implemented in this way:
                </p>
                <PrismCodeBlock codeBlock={ideaCodeBlocks.col1GenerationCodeBlock} />
            </section>
            <section>
                <h4>Typography</h4>
                <p>

                </p>
            </section>
        </div>
    )
}
