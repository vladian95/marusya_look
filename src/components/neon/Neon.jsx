import { motion } from 'framer-motion';
import NeonAnimatedShapes from '../neonAnimatedShapes/NeonAnimatedShapes';
import './neon.scss';

const cardAnimation = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.6 },
  }),
};

function Neon() {
  return (
    <motion.div
      className="Neon"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      <motion.h1
        custom={1}
        variants={cardAnimation}
        className="Neon-Title"
        data-text="&nbsp;NEON MAKE UP&nbsp;"
      >
        &nbsp;NEON MAKE UP&nbsp;
      </motion.h1>
      <motion.div custom={2} variants={cardAnimation} className="Neon-Wrapper">
        <div className="Neon-Card Neon-CardOne">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="Neon-Card Neon-CardTwo">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="Neon-Card Neon-CardThree">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="Neon-Card Neon-CardFour">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="Neon-Card Neon-CardFive">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
      <NeonAnimatedShapes />
    </motion.div>
  );
}

export default Neon;
