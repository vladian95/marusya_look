import { motion } from 'framer-motion';
import './makeUp.scss';

const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, once: true },
  }),
};

const cardAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, once: true },
  }),
};

function MakeUp() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="MakeUp"
      id="MakeUp"
    >
      <motion.div
        custom={5}
        variants={textAnimation}
        className="MakeUp-Bg"
      ></motion.div>
      <motion.h1 custom={1} variants={textAnimation} className="MakeUp-Title">
        Make Up
      </motion.h1>
      <motion.div className="Card-Wrapper">
        <motion.div
          custom={1}
          variants={cardAnimation}
          className="MakeUp-Card MakeUp-CardOne"
        >
          <div className="MakeUp-Face MakeUp-Front">
            <h3>front</h3>
          </div>
          <div className="MakeUp-Face MakeUp-Back">
            <h3>back</h3>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={cardAnimation}
          className="MakeUp-Card MakeUp-CardTwo"
        >
          <div className="MakeUp-Face MakeUp-Front">
            <h3>front</h3>
          </div>
          <div className="MakeUp-Face MakeUp-Back">
            <h3>back</h3>
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={cardAnimation}
          className="MakeUp-Card MakeUp-CardThree"
        >
          <div className="MakeUp-Face MakeUp-Front">
            <h3>front</h3>
          </div>
          <div className="MakeUp-Face MakeUp-Back">
            <h3>back</h3>
          </div>
        </motion.div>
        <motion.div
          custom={4}
          variants={cardAnimation}
          className="MakeUp-Card MakeUp-CardFour"
        >
          <div className="MakeUp-Face MakeUp-Front">
            <h3>front</h3>
          </div>
          <div className="MakeUp-Face MakeUp-Back">
            <h3>back</h3>
          </div>
        </motion.div>
      </motion.div>
      <ul className="MakeUp-Text">
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

export default MakeUp;
