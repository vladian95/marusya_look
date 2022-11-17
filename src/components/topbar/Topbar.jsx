import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Toggle from '../toggle/Toggle';
import './topbar.scss';

export default function Topbar() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Topbar" style={{ backgroundColor: darkMode && '#000' }}>
      <div className="Wrapper">
        <span className="Logo">MarusyaLook</span>
        <ul className="List">
          <li className="ListItem">
            <a
              style={{ color: darkMode && '#fff' }}
              className="ListItemLink"
              href="#Info"
            >
              Info
            </a>
          </li>
          <li className="ListItem">
            <a
              style={{ color: darkMode && '#fff' }}
              className="ListItemLink"
              href="#Job"
            >
              Job
            </a>
          </li>
          <li className="ListItem">
            <a
              style={{ color: darkMode && '#fff' }}
              className="ListItemLink"
              href="#Contact"
            >
              Contacts
            </a>
          </li>
        </ul>
        <Toggle className="Toggle-Main" />
      </div>
    </div>
  );
}
