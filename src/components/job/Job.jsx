import './job.scss';
import Tilt from 'react-parallax-tilt';

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
          <a href="#Contact">БРОВИ</a>
        </Tilt>
        <Tilt
          className="parallax-effect-glare-scale Job-Item-MakeUp"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
          gyroscope={true}
        >
          <a href="#Contact">ВИЗАЖ</a>
        </Tilt>
        <Tilt
          className="parallax-effect-glare-scale Job-Item-Sertificate"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
          gyroscope={true}
        >
          <a href="#Contact">ОБУЧЕНИЯ</a>
        </Tilt>
      </div>
    </div>
  );
}
