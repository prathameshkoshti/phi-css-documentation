import React from 'react'
import Cogs from '../Cogs'

export default function UtilitiesFeature() {
    return (
        <section>
            <article className="flex justify-content-center align-items-center">
                <Cogs />
            </article>
            <article className="flex flex-column justify-content-center">
                <h3>Utilities</h3>
                <p>
                    The framework provides CSS variables/CSS custom properties out of the box when you link or import the phi-css in your webpage. It has custom properties for colors, font-families and some important rem values. Also, you will have the ability to use the flex, display and text alignment classes to use within your web app.
                </p>
            </article>
        </section>
    )
}
