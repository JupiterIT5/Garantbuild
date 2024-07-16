import cl from "./footer.module.scss";
import logo from "../../image/photo/logo2.png";
import phone from "../../image/icon/phone2.svg";
import instagram from "../../image/icon/instagram2.svg";
import facebook from "../../image/icon/facebook2.svg";
import whatapp from "../../image/icon/whatapp2.svg";

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <div className={cl.section__first}>
        <img src={logo} alt="logo" />
        <div className={cl.footer__container}>
          <ul>
            <li>
              <a href="#">Наши услуги</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <div className={cl.contact}>
            <a href="tel:+34 622 947 742" className={cl.phone}>
              <img src={phone} alt="phone" />
              <p>+34 622 947 742</p>
            </a>
            <p>Следите за нами в социальных сетях:</p>
            <div className={cl.webapp}>
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={whatapp} alt="whatapp" />
            </div>
          </div>
        </div>
      </div>
      <div className={cl.section__second}>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Согласие на обработку<br/>персональной информации</a>
      </div>
    </footer>
  );
}
