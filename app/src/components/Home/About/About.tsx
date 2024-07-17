import cl from "./about.module.scss";
import array from '../../../image/icon/array2.svg'
import LanguageData from "../../interface/Language";

export default function About({currentLanguage}: LanguageData) {
  const handlePlaceholder = (currentLanguage: Function, text: Array<string>): string | undefined => {
    if (currentLanguage() === 'RU') {
      return text[0]
    } else if (currentLanguage() === 'EN') {
      return text[1]
    } else if (currentLanguage() === 'ES') {
      return text[2]
    }
  }

  return (
    <div className={cl.about__container}>
      <section className={cl.section__about}>
        <div className={cl.text}>
          <h1>{currentLanguage() === 'RU' ? 'Все услуги для вашего дома и участка в одном месте!' : ''} {currentLanguage() === 'EN' ? 'All services for your home and site in one place!' : ''} {currentLanguage() === 'ES' ? '¡Todos los servicios para tu hogar y sitio en un solo lugar!' : ''}</h1>
          <p>
            {currentLanguage() === 'RU' ? 'От сантехники и электрики до ландшафтного дизайна и кровли. Профессиональные работы для вашего комфорта и уюта.' : ''} {currentLanguage() === 'EN' ? 'From plumbing and electrical to landscaping and roofing. Professional work for your comfort and coziness.' : ''} {currentLanguage() === 'ES' ? 'Desde plomería y electricidad hasta paisajismo y techado. Trabajo profesional para su comodidad y calidez.' : ''}
          </p>
          <a href="#">
            <h2>{currentLanguage() === 'RU' ? 'Посмотреть все услуги' : ''} {currentLanguage() === 'EN' ? 'View all services' : ''} {currentLanguage() === 'ES' ? 'Ver todos los servicios' : ''}</h2>
            <img src={array} alt="array" />
          </a>
        </div>
      </section>
      <div className={cl.form}>
        <h3>{currentLanguage() === 'RU' ? 'Рассчитаем стоимость вашего проекта' : ''} {currentLanguage() === 'EN' ? 'We will calculate the cost of your project' : ''} {currentLanguage() === 'ES' ? 'Calcularemos el coste de tu proyecto.' : ''}</h3>
        <p>{currentLanguage() === 'RU' ? 'Отправьте заявку и наш менеджер свяжется с вами' : ''} {currentLanguage() === 'EN' ? 'Send a request and our manager will contact you' : ''} {currentLanguage() === 'ES' ? 'Envíe una solicitud y nuestro gerente se comunicará con usted.' : ''}</p>
        <form>
            <input type="text" name="name" className="name" placeholder={handlePlaceholder(currentLanguage, ['Ваше имя', 'Your name', 'Su nombre'])} minLength={2}/>
            <input type="text" name="phone" className="phone" placeholder={handlePlaceholder(currentLanguage, ['Номер телефона', 'Phone number', 'Número de teléfono'])} minLength={20}/>
            <textarea placeholder={handlePlaceholder(currentLanguage, ['Описание проекта', 'Project Description', 'Descripción del Proyecto'])} name="description" className="description" minLength={5}></textarea>
            <button className={cl.submit}>{currentLanguage() === 'RU' ? 'Отправить заявку' : ''} {currentLanguage() === 'EN' ? 'Send a request' : ''} {currentLanguage() === 'ES' ? 'Enviar una solicitud' : ''}</button>
        </form>
      </div>
    </div>
  );
}
