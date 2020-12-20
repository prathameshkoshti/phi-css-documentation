import React from 'react';
import Link from 'next/link';
import Zdog from 'zdog';

export default function LandingPageFeature() {
    React.useEffect(() => {
        let illo = new Zdog.Illustration({
            element: '.zdog-canvas',
              dragRotate: true,
              rotate: {
                  x: 8.888477521098064,
                  y: -5.654369260617026,
              }
          });

          // add circle
          const donut = new Zdog.Ellipse({
            addTo: illo,
            diameter: 200,
            stroke: 30,
            color: '#7A65FB',
          });

          // add line
          new Zdog.Shape({
            addTo: illo,
            path: [
              { y: (-100 * 1.618) }, // start at 1st point
              { y:  (100 * 1.618) }, // line to 2nd point
            ],
            stroke: 30 / 1.618,
            color: '#7A65FB',
          });

          // update & render
          illo.updateRenderGraph();

          function animate() {
            illo.updateRenderGraph();
            requestAnimationFrame( animate );
          }

          animate();
    })
    return (
        <section className="landing-page-section">
            <article className="flex align-items-center justify-content-space-between">
                <div className="zdog-logo">
                    <canvas class="zdog-canvas" width="320" height="480"></canvas>
                </div>
                <div className="glass-effect">
                    <div className="heading">
                        <h2>
                            Phi
                        </h2>
                        <span>a CSS framework based on the golden ratio.</span>
                    </div>
                    <div>
                        <div>
                            <p>
                                The framework utilitzes the golden ratio (<strong>1.618</strong>). From the grid, typography, table, buttons, form components to colors uses this golden ratio.
                            </p>
                        </div>
                        <Link href="/docs/inception">
                            <a className="button button-primary get-started">
                                Get stated
                            </a>
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    )
}
