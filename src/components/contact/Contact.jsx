import { useRef } from 'react';
import './contact.scss';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Contact">
      <div className="Contact-Bg"></div>
      <div className="Contact-Wrapper">
        <div className="Contact-Left">
          <h1 className="Contact-Title">
            Давайте обсудим все, что Вас интересует.
          </h1>
          <div className="Contact-Info">
            <div className="Contact-Info-Item">
              <a
                href="tg://resolve?domain=vladian95"
                className="Contact-Info-Link"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
            <div className="Contact-Info-Item">
              <a
                href="https://instagram.com/marusya_look?igshid=YmMyMTA2M2Y="
                className="Contact-Info-Link"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="Contact-Info-Item">
              <a
                href="mailto:marinalook23@gmail.com"
                className="Contact-Info-Link"
              >
                <i class="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="Contact-Right">
          <p className="Contact-Desc">
            <b>Просто заполните форму</b> и я отвечу на все Ваши вопросы.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Имя" name="user_name" />
            <input
              type="text"
              placeholder="Предмет разговора"
              name="user_subject"
            />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea
              rows="5"
              placeholder="Сообщения"
              name="message"
            ></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
