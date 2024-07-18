import cl from "./popup.module.scss";
import instagram from "../../image/icon/instagram.svg";
import facebook from "../../image/icon/facebook.svg";
import whatapp from "../../image/icon/whatapp.svg";
import close from '../../image/icon/close.svg'

interface PopupData {
    setMenu: Function
}

export default function Popup({setMenu}: PopupData) {
  return (
    <div className={cl.popup__container}>
      <div className={cl.popup}>
        <img src={close} alt="close" className={cl.close__img} onClick={() => setMenu(false)}/>
        <h2>Спасибо!<br/>Ваша заявка успешно отправлена</h2>
        <p>Наш менеджер свяжестся с вами в ближайшее время</p>
        <div className={cl.web}>
          <h3>Следите за нами в социальных сетях:</h3>
          <div className={cl.icon}>
            <a href="https://www.instagram.com/garantbuilds">
              <img src={instagram} alt="instagram" className={cl.webapp} />
            </a>
            <a href="https://www.facebook.com/garantbuild">
              <img src={facebook} alt="facebook" className={cl.webapp} />
            </a>
            <a href="tel:+34622947742">
              <img src={whatapp} alt="whatapp" className={cl.webapp} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
