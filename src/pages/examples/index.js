import React from 'react';
import ExampleItem from '../../components/ExampleItem';
import examples from '../../utils/examplesData';
import exampleStyles from '../../css/modules/examples.module.css';
export default function index() {
    return (
        <div className="phi-container">
            <h4>Examples</h4>
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
