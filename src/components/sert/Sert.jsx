import { motion } from 'framer-motion';
import './sert.scss';

const cardAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const bgAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const sertAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Sert() {
  return (
    <motion.div
      className="Sert"
      id="Sert"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        custom={8}
        variants={bgAnimation}
        className="Sert-Bg"
      ></motion.div>
      <motion.h1 custom={1} variants={textAnimation} className="Sert-Title">
        Обучение
      </motion.h1>
      <div className="Sert-Wrapper">
        <motion.div className="Sert-Left">
          <motion.div
            custom={2}
            variants={cardAnimation}
            className="Sert-Img Sert-ImgOne"
          ></motion.div>
          <motion.div
            custom={3}
            variants={cardAnimation}
            className="Sert-Img Sert-ImgTwo"
          ></motion.div>
          <motion.div
            custom={4}
            variants={cardAnimation}
            className="Sert-Img Sert-ImgThree"
          ></motion.div>
        </motion.div>
        <div className="Sert-Right">
          <motion.ul>
            <motion.li custom={5} variants={sertAnimation}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis quod cumque quos rerum possimus rem error aut ullam
              culpa qui. Perferendis delectus dolorum sequi maxime saepe
              repudiandae dignissimos quis facilis.
            </motion.li>
            <motion.li custom={6} variants={sertAnimation}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis quod cumque quos rerum possimus rem error aut ullam
              culpa qui. Perferendis delectus dolorum sequi maxime saepe
              repudiandae dignissimos quis facilis.
            </motion.li>
            <motion.li custom={7} variants={sertAnimation}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis quod cumque quos rerum possimus rem error aut ullam
              culpa qui. Perferendis delectus dolorum sequi maxime saepe
              repudiandae dignissimos quis facilis.
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Sert;
