import Link from 'next/link';
import React, { useState } from 'react';
import DarkModeToggler from '../DarkModeToggler';
import { motion } from 'framer-motion';

export default function DarkModeFeature() {

  const [className, setClassName] = useState('dark');
  const [visibility, setVisibility] = useState(true);
  // const opacity = useMotionValue(0);

  const toggleDarkMode = () => {
    setVisibility(false)
    setTimeout(() => {
      setVisibility(true)
      if (className === '') {
        setClassName('dark');
      }
      else {
        setClassName('');
      }
    }, 300);
  }

  const variants = {
    invisible: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  const animationSettings = {
    transition: 'var(--transition)',
    transitionDelay: '0.3s',
  }

  const lightText = <p className="text-right">Phi supports light mode. It is the default mode. You can enable it within two steps. Check out the <Link href="/docs/dark_mode"><a className="link link-secondary">documentation</a></Link> for this. You can use partial dark mode as well, as you can view this section utilizes the dark-mode, other sections don't! Tap or Click on the icon to switch to the dark mode.</p>;

  const darkText = <p className="text-right">
  Phi also supports dark mode. You can enable it within two steps. Check out the <Link href="/docs/dark_mode"><a className="link link-secondary">documentation</a></Link> for this. You can use partial dark mode as well, as you can view this section utilizes the dark-mode, other sections don't! Tap or Click on the dark mode icon to switch to light mode.</p>;

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
        <motion.div
          style={{minHeight: '270px'}}
          initial={visibility ? 'visible' : 'invisible'}
          animate={visibility ? 'visible' : 'invisible'}
          transition={{duration: 0.3}}
          variants={variants}
        >
          <h3 className="text-right">{titleText}</h3>
          {paragraphText}
        </motion.div>
      </article>
      <article className="flex justify-content-center align-items-center">
        <DarkModeToggler toggleDarkMode={toggleDarkMode} />
      </article>
    </section>
  );
}
