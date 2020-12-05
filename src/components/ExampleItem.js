import React, { Component } from 'react';
import Image from 'next/image';
import exampleStyles from '../css/modules/examples.module.css';

export default class ExampleItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href={this.props.example.link} target="_blank" className={exampleStyles.example}>
                <div className={exampleStyles.exampleContent}>
                    <Image className={exampleStyles.exampleImage} src={`/images/examples/${this.props.example.image}`} width="100%" height="auto" layout="responsive"/>
                    <strong className={exampleStyles.exampleTitle}>
                        {this.props.example.title}
                    </strong>
                </div>
            </a>
        )
    }
}
