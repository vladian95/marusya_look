import './info.scss';

import Me from '../../img/marme.jpg';
export default function Info() {
  return (
    <div className="Info" id="Info">
      <div className="Left">
        <div className="Left-Wrapper">
          <h2 className="Info-Intro">Привет, меня зовут</h2>
          <h1 className="Info-Name">Марина Лукьяненко</h1>
          <div className="Info-Title">
            <div className="Info-Title-Wrapper">
              <div className="Info-Title-Item">Make Up Artist</div>
              <div className="Info-Title-Item">Бровист</div>
              <div className="Info-Title-Item">Преподаватель</div>
            </div>
          </div>
          <p className="Info-Desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            blanditiis distinctio esse dolore eligendi doloremque placeat odit
            nam suscipit amet totam dolor quisquam neque minus, deleniti
            dignissimos similique ad repellendus?
          </p>
        </div>
      </div>
      <div className="Right">
        <div className="Info-Bg"></div>
        <img src={Me} alt="" className="Info-Img" />
      </div>
    </div>
  );
}
