import Link from 'next/link';
import React, { useState } from 'react';
import DarkModeToggler from '../DarkModeToggler';

export default function DarkModeFeature() {

  const [className, setClassName] = useState('dark');

  const toggleDarkMode = () => {
    if (className === '') {
      setClassName('dark');
    }
    else {
      setClassName('');
    }
  }

  const animationSettings = {
    transition: 'var(--transition)',
    transitionDelay: '0.6s',
  }

  const codeAnimationSettings = {
    transition: 'var(--transition)',
    transitionDelay: '0.3s',
  }

  return (
    <section className={className} style={animationSettings}>
      <article className="flex flex-column justify-content-center">
        <h2>Dark mode</h2>
        <p>
          Phi also supports dark mode. It can be enabled within two steps. Checkout the <Link href="/docs/dark_mode"><a className="link link-primary">documentation</a></Link> for this. Import the CSS file and add the class <code style={codeAnimationSettings}>.dark</code> to the container the contianer will adapt to the dark mode.
        </p>
      </article>
      <article className="flex justify-content-center align-items-center">
        <DarkModeToggler toggleDarkMode={toggleDarkMode} />
      </article>
    </section>
  );
}
