import cl from "./popupthank.module.scss";
import instagram from "../../image/icon/instagram.svg";
import facebook from "../../image/icon/facebook.svg";
import whatapp from "../../image/icon/whatapp.svg";
import close from '../../image/icon/close.svg'

interface PopupData {
    setMenu: Function
    currentLanguage: Function,
}

export default function Popup({setMenu, currentLanguage}: PopupData) {
  return (
    <div className={cl.popup__container}>
      <div className={cl.popup}>
        <img src={close} alt="close" className={cl.close__img} onClick={() => setMenu(false)}/>
        {currentLanguage() === 'RU' ? <h2>Спасибо!<br/>Ваша заявка успешно отправлена</h2> : ''} {currentLanguage() === 'EN' ? <h2>Thank!<br/>Your application has been successfully sent</h2> : ''} {currentLanguage() === 'ES' ? <h2>¡Gracias!<br/>Su solicitud ha sido enviada exitosamente</h2> : ''}
        <p>{currentLanguage() === 'RU' ? 'Наш менеджер свяжестся с вами в ближайшее время' : ''} {currentLanguage() === 'EN' ? 'Our manager will contact you shortly' : ''} {currentLanguage() === 'ES' ? 'Nuestro gerente se comunicará con usted en breve.' : ''}</p>
        <div className={cl.web}>
          <h3>{currentLanguage() === 'RU' ? 'Следите за нами в социальных сетях:' : ''} {currentLanguage() === 'EN' ? 'Follow us on social networks:' : ''} {currentLanguage() === 'ES' ? 'Síguenos en redes sociales:' : ''}</h3>
          <div className={cl.icon}>
            <a href="https://www.instagram.com/garantbuilds">
              <img src={instagram} alt="instagram" className={cl.webapp} />
            </a>
            <a href="https://www.facebook.com/garantbuild">
              <img src={facebook} alt="facebook" className={cl.webapp} />
            </a>
            <a href="https://wa.me/+34622947742">
              <img src={whatapp} alt="whatapp" className={cl.webapp} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
