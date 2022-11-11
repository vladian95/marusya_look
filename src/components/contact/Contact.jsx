import './contact.css';

export default function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-Bg"></div>
      <div className="Contact-Wrapper">
        <div className="Contact-Left">
          <h1 className="Contact-Title">
            Давайте обсудим все, что Вас интересует.
          </h1>
          <div className="Contact-Info">
            <div className="Contact-Info_Item">
              <i class="fa-brands fa-telegram"></i>
            </div>
            <div className="Contact-Info_Item">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="Contact-Info_Item">
              <i class="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
        <div className="Contact-Right"></div>
      </div>
    </div>
  );
}
