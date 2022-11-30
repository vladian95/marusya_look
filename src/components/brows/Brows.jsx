import { motion } from 'framer-motion';
import './brows.scss';

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, once: true },
  }),
};

const cardAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Brows() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="Brows"
      id="Brows"
    >
      <motion.div
        custom={1}
        variants={textAnimation}
        className="Brows-Bg"
      ></motion.div>
      <motion.h1 variants={textAnimation} className="Brows-Title">
        Брови
      </motion.h1>
      <motion.div className="Card-Wrapper">
        <motion.div
          custom={1}
          variants={cardAnimation}
          className="Brows-Card Brows-CardOne"
        >
          <div className="Face Front">
            <h3>front</h3>
          </div>
          <div className="Face Back">
            <h3>back</h3>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={cardAnimation}
          className="Brows-Card Brows-CardTwo"
        >
          <div className="Face Front">
            <h3>front</h3>
          </div>
          <div className="Face Back">
            <h3>back</h3>
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={cardAnimation}
          className="Brows-Card Brows-CardThree"
        >
          <div className="Face Front">
            <h3>front</h3>
          </div>
          <div className="Face Back">
            <h3>back</h3>
          </div>
        </motion.div>
        <motion.div
          custom={4}
          variants={cardAnimation}
          className="Brows-Card Brows-CardFour"
        >
          <div className="Face Front">
            <h3>front</h3>
          </div>
          <div className="Face Back">
            <h3>back</h3>
          </div>
        </motion.div>
      </motion.div>
      <ul className="Brows-Text">
        <motion.li custom={5} variants={cardAnimation}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          odio, sequi aut, non atque eveniet quos pariatur blanditiis omnis ab,
          officiis eius deserunt maxime. Vero non dolore aliquam atque
          similique.
        </motion.li>
        <motion.li custom={6} variants={cardAnimation}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          odio, sequi aut, non atque eveniet quos pariatur blanditiis omnis ab,
          officiis eius deserunt maxime. Vero non dolore aliquam atque
          similique.
        </motion.li>
        <motion.li custom={7} variants={cardAnimation}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          odio, sequi aut, non atque eveniet quos pariatur blanditiis omnis ab,
          officiis eius deserunt maxime. Vero non dolore aliquam atque
          similique.
        </motion.li>
      </ul>
    </motion.div>
  );
}

export default Brows;
