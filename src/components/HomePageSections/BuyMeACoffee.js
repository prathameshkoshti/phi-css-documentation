import React from 'react';
import Image from 'next/image';
import Arrow from '../Arrow';
import BuyMeCoffee from '../BuyMeCoffee';
import Link from "next/link";

export default function BuyMeACoffee() {
    return (
        <section className="buy-me-a-coffee-section">
            <article className="flex justify-content-center align-items-center">
                <div className="glass-effect flex flex-column align-items-center">
                    <div className="my-image">
                        <Image className="my-image" src="/images/prathamshkoshti.png" alt="Prathamesh Koshti" width="100px" height="100px" />
                    </div>
                    <p className="text-center">
                        Hey! I am <a href="https://prathameshkoshti.com/" className="link link-primary"><strong>Prathamesh Koshti</strong></a>. I'm the creator of this CSS framework, created this framework in my free time. I work as a full-time front end developer. If you do like <Link href="/idea"><a className="link link-primary"><strong>the idea</strong></a></Link> behind this framework, you can consider <a href="https://www.buymeacoffee.com/prathameshkoshti" target="_blank" className="link link-primary">buying me a coffee </a>, would be much helpful for me to maintain this project in future.
                    </p>
                </div>
            </article>
            <BuyMeCoffee />
            <Arrow />
        </section>
    )
}
