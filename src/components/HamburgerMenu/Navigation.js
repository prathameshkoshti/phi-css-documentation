import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ toggle, isOpen }) => (
  <motion.ul variants={variants} style={{pointerEvents: isOpen ? 'initial' : 'none'}}>
    {itemIds.map(i => (
      <MenuItem isOpen={isOpen} i={i} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
