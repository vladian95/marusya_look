import './job.scss';
import Tilt from 'react-parallax-tilt';
import AnimatedShapes from '../animatedShapes/AnimatedShapes';

export default function Job() {
  return (
    <div className="Job" id="Job">
      <h1 className="Job-Title">Виды деятельности</h1>
      <div className="Job-Wrapper">
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
      </div>
      <AnimatedShapes />
    </div>
  );
}
