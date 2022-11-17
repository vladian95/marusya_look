import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import './contact.scss';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_4pk5vtu',
        'template_9tzjkpt',
        formRef.current,
        '0wsWru7IKiJD08sgf'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact" id="Contact">
      <div
        style={{
          backgroundColor: darkMode && '#222',
          color: darkMode && '#000',
        }}
        className="Contact-Bg"
      ></div>
      <div className="Contact-Wrapper">
        <div className="Contact-Left">
          <h1 className="Contact-Title">
            Давайте обсудим все, что Вас интересует.
          </h1>
          <div className="Contact-Info">
            <div className="Contact-Info-Item">
              <span className="tooltip">telegram</span>
              <a
                href="tg://resolve?domain=vladian95"
                className="Contact-Info-Link"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
            <div className="Contact-Info-Item">
              <span className="tooltip">instagram</span>
              <a
                href="https://instagram.com/marusya_look?igshid=YmMyMTA2M2Y="
                className="Contact-Info-Link"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="Contact-Info-Item">
              <span className="tooltip">Gmail</span>
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
            <div className="Input-Box">
              <input
                style={{
                  backgroundColor: darkMode && '#000',
                  color: darkMode && '#fff',
                }}
                type="text"
                name="user_name"
                autoComplete="off"
                required
              />
              <label for="user_name" className="Label-Name">
                <span className="Content-Name">Ваше имя :</span>
              </label>
            </div>
            <div className="Input-Box">
              <input
                style={{
                  backgroundColor: darkMode && '#000',
                  color: darkMode && '#fff',
                }}
                type="text"
                name="user_subject"
                autoComplete="off"
                required
              />
              <label for="user_subject" className="Label-Name">
                <span className="Content-Name">Предмет разговора :</span>
              </label>
            </div>

            <div className="Input-Box">
              <input
                style={{
                  backgroundColor: darkMode && '#000',
                  color: darkMode && '#fff',
                }}
                type="text"
                name="user_email"
                autoComplete="off"
                required
              />
              <label for="user_email" className="Label-Name">
                <span className="Content-Name">Ваш Email :</span>
              </label>
            </div>
            <textarea
              style={{
                backgroundColor: darkMode && '#000',
                border: darkMode && '1px solid gray',
                color: darkMode && '#fff',
              }}
              rows="5"
              placeholder="Сообщения"
              name="message"
            ></textarea>
            <button
              className="Contact-Btn"
              style={{
                backgroundColor: darkMode && '#fff',
                color: darkMode && '#222',
              }}
            >
              Отправить
            </button>
            {done && 'Спасибо =)'}
          </form>
        </div>
      </div>

      <div
        style={{
          backgroundColor: darkMode && '#222',
        }}
        className="Developer"
      >
        Developed by \
        {
          <a href="https://www.linkedin.com/in/vlad-kvanin-06a223212/">
            Vladian95
          </a>
        }
      </div>
    </div>
  );
}
