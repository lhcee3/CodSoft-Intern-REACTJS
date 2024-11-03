import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";``

export default function Reveal({ children }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once : true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div ref={ref}>
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.25,
          },
      },
    }}
      initial="hidden"
      animate={controls}
      >
      {children}
    </motion.div>
  </div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};
