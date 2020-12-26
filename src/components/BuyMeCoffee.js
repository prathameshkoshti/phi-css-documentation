import React, { Component } from 'react';
import buyMeCoffeeStyle from '../css/modules/buy-me-a-coffee.module.css';

export default class BuyMeCoffee extends Component {
    render() {
        return (
            <div className={buyMeCoffeeStyle.btnContainer} style={{zIndex: 2}}>
                <a href="https://www.buymeacoffee.com/prathameshkoshti" target="_blank" className="button button-primary">
                    <img src="/icons/coffee.svg" width="23px" />
                    <span className={buyMeCoffeeStyle.buyMeCoffeeText}>
                        Buy me a coffee
                    </span>
                </a>
            </div>
        )
    }
}
