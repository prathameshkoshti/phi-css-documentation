import React, { Component } from 'react'
import Prism from "prismjs";

export default class PrismCodeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
            code: this.props.code,
        }

        this.handleCopyButton = this.handleCopyButton.bind(this);
    }

    handleCopyButton(event) {
        const target = event.currentTarget;

        // Copy text
        navigator.clipboard.writeText(this.props.code);
        this.updateText(target, 'Copied');
        target.classList.add('copied');

        setTimeout(() => {
            this.updateText(target, 'Copy');
            target.classList.remove('copied');
        }, 2000);
    }

    updateText(target, value) {
        target.innerText = value;
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
                <div onClick={(event) => this.handleCopyButton(event)} className="code-block-copy">
                    Copy
                </div>
            </div>
        )
    }
}
