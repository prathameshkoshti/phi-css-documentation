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

export const MenuItem = ({ i, toggle, isOpen }) => {
    return (
        <Link href={navItems[i].link}>
            <a className="link link-secondary" onClick={toggle} style={{pointerEvents: isOpen ? 'initial' : 'none'}} target={navItems[i].openInNewTab ? '_blank' : ''}>
                <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="vertical-nav-item"
                    style={{
                      color: 'var(--accent-shade)',
                      pointerEvents: isOpen ? 'initial' : 'none'
                    }}
                >
                    <span className="vertical-nav-item" style={{pointerEvents: isOpen ? 'initial' : 'none'}}>{navItems[i].title}</span>
                </motion.li>
            </a>
        </Link>
    );
};
