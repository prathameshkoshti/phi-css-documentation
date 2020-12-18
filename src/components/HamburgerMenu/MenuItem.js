import * as React from "react";
import { motion } from "framer-motion";
import { navItems } from '../../utils/siteData';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i, toggle}) => {
    return (
        <Link href={navItems[i].link} target={navItems[i].openInNewTab ? '_blank' : ''}>
            <a className="link link-secondary" onClick={toggle}>
                <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="vertical-nav-item"
                    style={{color: 'var(--accent-shade)'}}
                >
                    <span className="vertical-nav-item">{navItems[i].title}</span>
                </motion.li>
            </a>
        </Link>
    );
};
