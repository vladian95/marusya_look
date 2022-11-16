import NeonAnimatedShapes from '../neonAnimatedShapes/NeonAnimatedShapes';
import './neon.scss';

function Neon() {
  return (
    <div className="Neon">
      <h1 className="Neon-Title" data-text="&nbsp;NEON MAKE UP&nbsp;">
        &nbsp;NEON MAKE UP&nbsp;
      </h1>
      <div className="Neon-Wrapper">
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
      </div>
      <NeonAnimatedShapes />
    </div>
  );
}

export default Neon;
