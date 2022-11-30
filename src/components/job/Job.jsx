import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AnimatedShapes from '../animatedShapes/AnimatedShapes';
import './job.scss';

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

export default function Job() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="Job"
      id="Job"
    >
      <motion.h1 custom={1} variants={textAnimation} className="Job-Title">
        Виды деятельности
      </motion.h1>
      <motion.div custom={2} variants={textAnimation} className="Job-Wrapper">
        <Tilt
          className="parallax-effect-glare-scale Job-Item-Brow"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
          gyroscope={true}
        >
          <a href="#Brows">БРОВИ</a>
        </Tilt>
        <Tilt
          className="parallax-effect-glare-scale Job-Item-MakeUp"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
          gyroscope={true}
        >
          <a href="#MakeUp">ВИЗАЖ</a>
        </Tilt>
        <Tilt
          className="parallax-effect-glare-scale Job-Item-Sertificate"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
          gyroscope={true}
        >
          <a href="#Sert">ОБУЧЕНИЯ</a>
        </Tilt>
      </motion.div>
      <AnimatedShapes />
    </motion.div>
  );
}
