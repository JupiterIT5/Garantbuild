import cl from "./about.module.scss";
import array from "../../../image/icon/array3.svg";

interface AboutData {
  fon: string;
  title: Array<string>;
  subtitle: Array<string>;
  currentLanguage: Function,
}

export default function About({ fon, title, subtitle, currentLanguage }: AboutData) {
  return (
    <section className={cl.section__about}>
      <div className={cl.about__img}>
        <img src={fon} alt="fon" />
      </div>
      <h1 className={cl.title}>{currentLanguage() === 'RU' ? title[0] : ''} {currentLanguage() === 'EN' ? title[1] : ''} {currentLanguage() === 'ES' ? title[2] : ''}</h1>
      <p className={cl.subtitle}>{currentLanguage() === 'RU' ? subtitle[0] : ''} {currentLanguage() === 'EN' ? subtitle[1] : ''} {currentLanguage() === 'ES' ? subtitle[2] : ''}</p>
      <button className={cl.calculator}>
        <h2>{currentLanguage() === 'RU' ? 'Рассчитать стоимость' : ''} {currentLanguage() === 'EN' ? 'Calculate the cost' : ''} {currentLanguage() === 'ES' ? 'Calcular el costo' : ''}</h2>
        <img src={array} alt="array" />
      </button>
    </section>
  );
}
