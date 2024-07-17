import cl from "./about.module.scss";
import array from '../../../image/icon/array2.svg'

export default function About() {
  return (
    <div className={cl.about__container}>
      <section className={cl.section__about}>
        <div className={cl.text}>
          <h1>Все услуги для вашего дома и участка в одном месте!</h1>
          <p>
            От сантехники и электрики до ландшафтного дизайна и кровли.
            Профессиональные работы для вашего комфорта и уюта.
          </p>
          <a href="#">
            <h2>Посмотреть все услуги</h2>
            <img src={array} alt="array" />
          </a>
        </div>
      </section>
      <div className={cl.form}>
        <h3>Рассчитаем стоимость вашего проекта</h3>
        <p>Отправьте заявку и наш менеджер свяжется с вами</p>
        <form>
            <input type="text" name="name" className="name" placeholder="Ваше имя" minLength={2}/>
            <input type="text" name="phone" className="phone" placeholder="Номер телефона" minLength={20}/>
            <textarea placeholder="Описание проекта" name="description" className="description" minLength={5}></textarea>
            <button className={cl.submit}>Отправить заявку</button>
        </form>
      </div>
    </div>
  );
}
