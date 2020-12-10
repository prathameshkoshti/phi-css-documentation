import React from 'react';
import ExampleItem from '../../components/ExampleItem';
import examples from '../../utils/examplesData';
import exampleStyles from '../../css/modules/examples.module.css';
export default function index() {
    return (
        <div className="phi-container-full example-content">
            <h4>Examples</h4>
            <p>
                Here are some examples which are created using this frameowrk.
            </p>
            <div className={exampleStyles.exampleGrid}>
                {
                    examples.map(example => {
                        return <ExampleItem key={example.id} example={example} />
                    })
                }
            </div>
        </div>
    )
}
