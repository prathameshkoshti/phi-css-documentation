import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Prism from "prismjs";

export default class PrismCodeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
            codeBlock: this.props.codeBlock,
            copyText: 'Copy',
        }

        this.onCopy = this.onCopy.bind(this);
    }

    onCopy(target) {
        // Copy text
        this.updateText('Copied');
    
        setTimeout(() => {
            this.updateText('Copy');
        }, 2000);
    }

    updateText(value) {
        this.setState({ copyText: value });
    }

    componentDidMount() {
        Prism.highlightAll();
    }


    render() {
        function createMarkup(code) {
            return {__html: code};
        }

        let className = 'code-block';
        let output = '';
        if (this.state.codeBlock.isOutputVisible) {
            className += ' with-output';
            output = "" + this.state.codeBlock.code;
        }
        return (
            <div className="code-block-contianer">
                <div className={className}>
                    <pre>
                        <code className={`language-${this.state.codeBlock.language}`}>
                            {this.state.codeBlock.code}
                        </code>
                    </pre>
                    <CopyToClipboard
                        onCopy={this.onCopy}
                        text={this.state.codeBlock.code}>
                        <div onClick={this.onCopy} className="code-block-copy">
                            {this.state.copyText}
                        </div>
                    </CopyToClipboard>
                </div>
                {
                    this.state.codeBlock.isOutputVisible ? 
                    <div className="code-output" dangerouslySetInnerHTML={createMarkup(this.state.codeBlock.code)}>
                    </div>  
                    : ''
                }
            </div>
        )
    }
}
