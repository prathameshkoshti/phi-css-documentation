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

  const lightText = <p className="text-right">Phi supports light mode. It is the default mode. Tap/Click on the icon to switch to the dark mode.</p>;

  const darkText = <p className="text-right">
  Phi also supports dark mode. You can enable it within two steps. Check out the <Link href="/docs/dark_mode"><a className="link link-secondary">documentation</a></Link> for this. You can use partial dark mode as well, as you can view this section utilizes the dark-mode, other sections don't! Click on the dark mode icon to switch to light mode.</p>;

  let paragraphText = '';
  let titleText = '';

  if(className === 'dark') {
    paragraphText = darkText;
    titleText = 'Dark mode';
  }
  else {
    paragraphText = lightText;
    titleText = 'Light mode';
  }

  return (

    <section className={className} style={animationSettings}>
      <article className="flex flex-column justify-content-center align-items-end">
        <div style={{minHeight: '270px'}}>
          <h3 className="text-right">{titleText}</h3>
          {paragraphText}
        </div>
      </article>
      <article className="flex justify-content-center align-items-center">
        <DarkModeToggler toggleDarkMode={toggleDarkMode} />
      </article>
    </section>
  );
}
