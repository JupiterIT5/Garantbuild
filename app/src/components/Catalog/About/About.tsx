import cl from "./about.module.scss";
import array from "../../../image/icon/array3.svg";

interface AboutData {
  title: string;
  fon: string;
  subtitle: string;
}

export default function About({ fon, title, subtitle }: AboutData) {
  return (
    <section className={cl.section__about}>
      <div className={cl.about__img}>
        <img src={fon} alt="fon" />
      </div>
      <h1 className={cl.title}>{title}</h1>
      <p className={cl.subtitle}>{subtitle}</p>
      <button className={cl.calculator}>
        <h2>Рассчитать стоимость</h2>
        <img src={array} alt="array" />
      </button>
    </section>
  );
}
