import React, { Component } from 'react'
import Prism from "prismjs";

export default class PrismCodeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
            code: this.props.code,
        }
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div className="code-block">
                <pre>
                    <code className={`language-${this.state.language}`}>
                        {this.state.code}
                    </code>
                </pre>
                <div className="code-block-footer">
                    {this.state.language}
                </div>
            </div>
        )
    }
}
