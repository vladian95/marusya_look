import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.scss';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className="Toggle">
      <img src={Sun} alt="#" className="Toggle-Icon" />
      <img src={Moon} alt="#" className="Toggle-Icon" />
      <button
        className="Toggle-Btn"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? -4 : 25 }}
      ></button>
    </div>
  );
};

export default Toggle;
