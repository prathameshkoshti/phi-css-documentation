import React, { useRef, useState } from 'react';
import { motion, useCycle} from 'framer-motion';
import { useDimensions } from './useDimension';
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';

export default function index() {
    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(300px - 45px) calc(100vh - 40px))`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            },
            background: 'rgba(204, 196, 253, 0.5)',
        }),
        closed: {
            clipPath: "circle(30px at calc(300px - 55px) calc(100vh - 80px))",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 350,
                damping: 35
            },
            background: 'var(--accent)',
        }
    };

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="vertical-nav"
            style={{pointerEvents: isOpen ? 'intital' : 'none'}}
        >
            <motion.div style={{pointerEvents: isOpen ? 'intital' : 'none'}} className="background" variants={sidebar} />
            <Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
    )
}
