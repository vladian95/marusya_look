import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import { motion } from 'framer-motion';
import './contact.scss';

const cInputAnimation = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const cBottomAnimation = {
  hidden: {
    y: 400,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const cTitleAnimation = {
  hidden: {
    y: -400,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
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
    <motion.div
      className="Contact"
      id="Contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9, once: true }}
    >
      <motion.div
        custom={8}
        variants={cBottomAnimation}
        style={{
          backgroundColor: darkMode && '#222',
          color: darkMode && '#000',
        }}
        className="Contact-Bg"
      ></motion.div>
      <div className="Contact-Wrapper">
        <div className="Contact-Left">
          <motion.h1
            custom={5}
            variants={cTitleAnimation}
            className="Contact-Title"
          >
            Давайте обсудим все, что Вас интересует.
          </motion.h1>
          <motion.div
            custom={10}
            variants={cTitleAnimation}
            className="Contact-Info"
          >
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
          </motion.div>
        </div>
        <div className="Contact-Right">
          <motion.p
            custom={6}
            variants={cTitleAnimation}
            className="Contact-Desc"
          >
            <b>Просто заполните форму</b> и я отвечу на все Ваши вопросы.
          </motion.p>
          <motion.form ref={formRef} onSubmit={handleSubmit}>
            <motion.div
              custom={1}
              variants={cInputAnimation}
              className="Input-Box"
            >
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
            </motion.div>
            <motion.div
              custom={2}
              variants={cInputAnimation}
              className="Input-Box"
            >
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
            </motion.div>

            <motion.div
              custom={3}
              variants={cInputAnimation}
              className="Input-Box"
            >
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
            </motion.div>
            <motion.textarea
              custom={4}
              variants={cInputAnimation}
              style={{
                backgroundColor: darkMode && '#000',
                border: darkMode && '1px solid gray',
                color: darkMode && '#fff',
              }}
              rows="5"
              placeholder="Сообщения"
              name="message"
            ></motion.textarea>
            <motion.button
              custom={5}
              variants={cBottomAnimation}
              className="Contact-Btn"
              style={{
                backgroundColor: darkMode && '#fff',
                color: darkMode && '#222',
              }}
            >
              Отправить
            </motion.button>
            {done && 'Спасибо =)'}
          </motion.form>
        </div>
      </div>

      <motion.div
        custom={9}
        variants={cTitleAnimation}
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
      </motion.div>
    </motion.div>
  );
}
