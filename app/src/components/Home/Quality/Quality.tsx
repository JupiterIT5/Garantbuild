import cl from "./quality.module.scss";
import LanguageData from "../../interface/Language";

export default function Quality({currentLanguage}: LanguageData) {
  return (
    <section className={cl.section__quality}>
      <h2 className={cl.title}>
         {currentLanguage() === 'RU' ? 'Качество и сервис — наш приоритет' : ''} {currentLanguage() === 'EN' ? 'Quality and service are our priority' : ''} {currentLanguage() === 'ES' ? 'La calidad y el servicio son nuestra prioridad.' : ''}
      </h2>
      <div className={cl.quality__container}>
        <div className={cl.quality}>
          <h3 className={cl.number}>1</h3>
          <h2>{currentLanguage() === 'RU' ? 'Оказываем весь спектр услуг на высшем уровне' : ''} {currentLanguage() === 'EN' ? 'We provide a full range of services at the highest level' : ''} {currentLanguage() === 'ES' ? 'Ofrecemos una gama completa de servicios al más alto nivel.' : ''}</h2>
          <div>
            <p>{currentLanguage() === 'RU' ? 'Более 10 лет на рынке' : ''} {currentLanguage() === 'EN' ? 'More than 10 years on the market' : ''} {currentLanguage() === 'ES' ? 'Más de 10 años en el mercado' : ''}</p>
            <p>{currentLanguage() === 'RU' ? 'Чётко соблюдаем сроки' : ''} {currentLanguage() === 'EN' ? 'We strictly adhere to deadlines' : ''} {currentLanguage() === 'ES' ? 'Cumplimos estrictamente los plazos' : ''}</p>
            <p>{currentLanguage() === 'RU' ? 'Не заходим за рамки сметы' : ''} {currentLanguage() === 'EN' ? 'We don`t go over budget' : ''} {currentLanguage() === 'ES' ? 'No nos pasamos del presupuesto' : ''}</p>
          </div>
        </div>
        <div className={cl.quality}>
          <h3 className={cl.number}>2</h3>
          <div className={cl.description}>
            <h2>{currentLanguage() === 'RU' ? 'Без головной боли' : ''} {currentLanguage() === 'EN' ? 'No headache' : ''} {currentLanguage() === 'ES' ? 'Sin dolor de cabeza' : ''}</h2>
            <p>
              {currentLanguage() === 'RU' ? 'Все заботы берем на себя от начала и до сдачи объекта. Вам не придется участвовать в решении никаких вопросов' : ''} {currentLanguage() === 'EN' ? 'We take care of all the worries from the beginning until the delivery of the object. You don`t have to participate in resolving any issues' : ''} {currentLanguage() === 'ES' ? 'Nos ocupamos de todas las preocupaciones desde el inicio hasta la entrega del objeto. No tienes que participar en la resolución de ningún problema.' : ''}
            </p>
          </div>
        </div>
        <div className={cl.quality}>
          <h3 className={cl.number}>3</h3>
          <div className={cl.description}>
            <h2>{currentLanguage() === 'RU' ? 'Рабочие с узким профилем' : ''} {currentLanguage() === 'EN' ? 'Narrow profile workers' : ''} {currentLanguage() === 'ES' ? 'Trabajadores de perfil estrecho' : ''}</h2>
            <p>
              {currentLanguage() === 'RU' ? 'Все мастера выполняют только работы соответствующие его профилю. Сантехник делает сантехнику, электрик - электрику' : ''} {currentLanguage() === 'EN' ? 'All masters perform only work that corresponds to their profile. A plumber does plumbing, an electrician does electrical work' : ''} {currentLanguage() === 'ES' ? 'Todos los maestros realizan únicamente trabajos que corresponden a su perfil. Un fontanero hace fontanería, un electricista hace trabajos eléctricos.' : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
