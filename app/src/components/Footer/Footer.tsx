import cl from "./footer.module.scss";
import LanguageData from "../interface/Language";
import logo from "../../image/photo/logo2.png";
import phone from "../../image/icon/phone2.svg";
import instagram from "../../image/icon/instagram2.svg";
import facebook from "../../image/icon/facebook2.svg";
import whatapp from "../../image/icon/whatapp2.svg";
import { useNavigate } from "react-router-dom";

export default function Footer({currentLanguage}: LanguageData) {
  const navigate = useNavigate()

  return (
    <footer className={cl.footer} id='contact'>
      <div className={cl.section__first}>
        <img src={logo} alt="logo" style={{cursor: 'pointer'}} onClick={() => navigate('/')}/>
        <div className={cl.footer__container}>
          <ul>
            <li>
              <a href="/#services">{currentLanguage() === 'RU' ? 'Наши услуги' : ''} {currentLanguage() === 'EN' ? 'Our services' : ''} {currentLanguage() === 'ES' ? 'Nuestros servicios' : ''}</a>
            </li>
            <li>
              <a href="/#company">{currentLanguage() === 'RU' ? 'О компании' : ''} {currentLanguage() === 'EN' ? 'About company' : ''} {currentLanguage() === 'ES' ? 'Acerca de la compañía' : ''}</a>
            </li>
            <li>
              <a href="#contact">{currentLanguage() === 'RU' ? 'Контакты' : ''} {currentLanguage() === 'EN' ? 'Contacts' : ''} {currentLanguage() === 'ES' ? 'Contactos' : ''}</a>
            </li>
          </ul>
          <div className={cl.contact}>
            <a href="tel:+34 622 947 742" className={cl.phone}>
              <img src={phone} alt="phone" />
              <p>+34 622 947 742</p>
            </a>
            <p>{currentLanguage() === 'RU' ? 'Следите за нами в социальных сетях:' : ''} {currentLanguage() === 'EN' ? 'Follow us on social networks:' : ''} {currentLanguage() === 'ES' ? 'Síguenos en redes sociales:' : ''}</p>
            <div className={cl.webapp}>
              <a href="https://www.instagram.com/garantbuilds"><img src={instagram} alt="instagram" /></a>
              <a href="https://www.facebook.com/garantbuild"><img src={facebook} alt="facebook" /></a>
              <a href="tel:+34622947742"><img src={whatapp} alt="whatapp" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.section__second}>
        <a href="#">{currentLanguage() === 'RU' ? 'Политика конфиденциальности' : ''} {currentLanguage() === 'EN' ? 'Privacy Policy' : ''} {currentLanguage() === 'ES' ? 'Política de privacidad' : ''}</a>
        {currentLanguage() === 'RU' ? <a href="#">Согласие на обработку<br/>персональной информации</a> : ''} {currentLanguage() === 'EN' ? <a href="#">Consent to the processing of<br/>personal information</a> : ''} {currentLanguage() === 'ES' ? <a href="#">Consentimiento al tratamiento<br/>de datos personales</a> : ''}
      </div>
    </footer>
  );
}
