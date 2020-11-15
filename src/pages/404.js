import React from 'react';
import Link from 'next/link'
import styles404 from '../css/modules/404.module.css';

export default function Custom404() {
    return (
        <div className={styles404.container404}>
            <h1>4Φ4</h1>
            <div>
                Okay wait! It looks like you have lost your way.
            </div>
            <div>
                Let's go back to the <Link href="/"><a>homepage</a></Link>
            </div>
        </div>
    )
}
