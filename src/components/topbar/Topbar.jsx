import './topbar.scss';

export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="Wrapper">
        <span className="Logo">MarusyaLook</span>
        <ul className="List">
          <li className="ListItem">
            <a className="ListItemLink" href="">
              Info
            </a>
          </li>
          <li className="ListItem">
            <a className="ListItemLink" href="">
              Job
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
