import cl from "./header.module.scss";
import logo from "../../image/photo/logo.png";
import instagram from "../../image/icon/instagram.svg";
import facebook from "../../image/icon/facebook.svg";
import whatapp from "../../image/icon/whatapp.svg";
import phone from "../../image/icon/phone.svg";
import language from "../../image/icon/language.svg";
import ru from "../../image/icon/RU.svg";
import en from "../../image/icon/EN.svg";
import es from "../../image/icon/ES.svg";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [menuLanguage, setMenuLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("RU");

  const updateLanguage = (lang: string): undefined => {
    setCurrentLanguage(lang);
    setMenuLanguage(false);
  };

  const activeMenuLanguage = () => {
    if (!menuLanguage) {
      setMenuLanguage(true);
    } else {
      setMenuLanguage(false);
    }
  };

  const activeMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <nav className={cl.header__container}>
      <header className={cl.header}>
        <img src={logo} alt="logo" className={cl.logo} />
        <div className={cl.nav}>
          <a href="#">Услуги</a>
          <a href="#">О компании</a>
          <a href="#">Контакты</a>
        </div>
        <div className={cl.contact}>
          <a href="#">
            <img src={instagram} alt="instagram" className={cl.webapp} />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" className={cl.webapp} />
          </a>
          <a href="#">
            <img src={whatapp} alt="whatapp" className={cl.webapp} />
          </a>
          <a href="tel:+34 622 947 742" className={cl.phone}>
            <img src={phone} alt="phone" />
            <p>+34 622 947 742</p>
          </a>
          <div className={cl.language__container}>
            <div
              className={
                menuLanguage
                  ? [cl.language, cl.language__active].join(" ")
                  : cl.language
              }
              onClick={() => activeMenuLanguage()}
            >
              <img src={language} alt="language" />
              <p>{currentLanguage}</p>
            </div>
            <div
              className={
                menuLanguage === true
                  ? [cl.menu__language, cl.menu__language_active].join(" ")
                  : cl.menu__language
              }
            >
              <p onClick={() => updateLanguage("RU")}>
                <img src={ru} alt="RU" />
                RU
              </p>
              <p onClick={() => updateLanguage("EN")}>
                <img src={en} alt="EN" />
                EN
              </p>
              <p onClick={() => updateLanguage("ES")}>
                <img src={es} alt="ES" />
                ES
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            menu === true
              ? [cl.btn__menu, cl.btn__menu_active].join(" ")
              : cl.btn__menu
          }
          onClick={activeMenu}
        >
          <span className={cl.left}></span>
          <span className={cl.center}></span>
          <span className={cl.right}></span>
        </div>
      </header>
      <div
        className={
          menu === true ? [cl.menu, cl.menu__active].join(" ") : cl.menu
        }
      >
        <div className={cl.nav}>
          <a href="#">Наши услуги</a>
          <a href="#">О компании</a>
          <a href="#">Контакты</a>
        </div>
        <button className={cl.btn__form}>Связаться с нами</button>
        <hr />
        <a href="tel:+34 622 947 742" className={cl.phone}>
          <img src={phone} alt="phone" />
          <p>+34 622 947 742</p>
        </a>
        <div>
          <div
            className={
              menuLanguage
                ? [cl.language, cl.language__active].join(" ")
                : cl.language
            }
            onClick={() => activeMenuLanguage()}
          >
            <img src={language} alt="language" />
            <p>{currentLanguage}</p>
          </div>
          <div
            className={
              menuLanguage === true
                ? [
                    cl.menu__language_phone,
                    cl.menu__language_phone_active,
                  ].join(" ")
                : cl.menu__language_phone
            }
          >
            <p onClick={() => updateLanguage("RU")}>
              <img src={ru} alt="RU" />
              RU
            </p>
            <p onClick={() => updateLanguage("EN")}>
              <img src={en} alt="EN" />
              EN
            </p>
            <p onClick={() => updateLanguage("ES")}>
              <img src={es} alt="ES" />
              ES
            </p>
          </div>
        </div>
        <h2>Следите за нами в социальных сетях:</h2>
        <div className={cl.website}>
          <a href="#">
            <img src={instagram} alt="instagram" className={cl.webapp} />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" className={cl.webapp} />
          </a>
          <a href="#">
            <img src={whatapp} alt="whatapp" className={cl.webapp} />
          </a>
        </div>
      </div>
    </nav>
  );
}
