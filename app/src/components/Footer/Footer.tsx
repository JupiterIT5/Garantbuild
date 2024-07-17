import cl from "./footer.module.scss";
import LanguageData from "../interface/Language";
import logo from "../../image/photo/logo2.png";
import phone from "../../image/icon/phone2.svg";
import instagram from "../../image/icon/instagram2.svg";
import facebook from "../../image/icon/facebook2.svg";
import whatapp from "../../image/icon/whatapp2.svg";

export default function Footer({currentLanguage}: LanguageData) {
  return (
    <footer className={cl.footer}>
      <div className={cl.section__first}>
        <img src={logo} alt="logo" />
        <div className={cl.footer__container}>
          <ul>
            <li>
              <a href="#">{currentLanguage() === 'RU' ? 'Наши услуги' : ''} {currentLanguage() === 'EN' ? 'Our services' : ''} {currentLanguage() === 'ES' ? 'Nuestros servicios' : ''}</a>
            </li>
            <li>
              <a href="#">{currentLanguage() === 'RU' ? 'О компании' : ''} {currentLanguage() === 'EN' ? 'About company' : ''} {currentLanguage() === 'ES' ? 'Acerca de la compañía' : ''}</a>
            </li>
            <li>
              <a href="#">{currentLanguage() === 'RU' ? 'Контакты' : ''} {currentLanguage() === 'EN' ? 'Contacts' : ''} {currentLanguage() === 'ES' ? 'Contactos' : ''}</a>
            </li>
          </ul>
          <div className={cl.contact}>
            <a href="tel:+34 622 947 742" className={cl.phone}>
              <img src={phone} alt="phone" />
              <p>+34 622 947 742</p>
            </a>
            <p>{currentLanguage() === 'RU' ? 'Следите за нами в социальных сетях:' : ''} {currentLanguage() === 'EN' ? 'Follow us on social networks:' : ''} {currentLanguage() === 'ES' ? 'Síguenos en redes sociales:' : ''}</p>
            <div className={cl.webapp}>
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={whatapp} alt="whatapp" />
            </div>
          </div>
        </div>
      </div>
      <div className={cl.section__second}>
        <a href="#">{currentLanguage() === 'RU' ? 'Политика конфиденциальности' : ''} {currentLanguage() === 'EN' ? 'Privacy Policy' : ''} {currentLanguage() === 'ES' ? 'Política de privacidad' : ''}</a>
        {currentLanguage() === 'RU' ? <a href="#">Согласие на обреботку<br/>персональной информации</a> : ''} {currentLanguage() === 'EN' ? <a href="#">Consent to the processing of<br/>personal information</a> : ''} {currentLanguage() === 'ES' ? <a href="#">Consentimiento al tratamiento<br/>de datos personales</a> : ''}
      </div>
    </footer>
  );
}
