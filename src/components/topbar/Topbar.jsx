import './topbar.scss';

export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="Wrapper">
        <span className="Logo">MarusyaLook</span>
        <ul className="List">
          <li className="ListItem">
            <a className="ListItemLink" href="#Info">
              Info
            </a>
          </li>
          <li className="ListItem">
            <a className="ListItemLink" href="#Job">
              Job
            </a>
          </li>
          <li className="ListItem">
            <a className="ListItemLink" href="#Contact">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
