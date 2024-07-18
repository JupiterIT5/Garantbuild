import cl from "./experience.module.scss";
import house from "../../../image/photo/house.png";
import LanguageData from "../../interface/Language";

export default function Experience({currentLanguage}: LanguageData) {
  return (
    <section className={cl.section__experience} id="company">
      <h2 className={cl.title}>{currentLanguage() === 'RU' ? 'Опыт и надежность' : ''} {currentLanguage() === 'EN' ? 'Experience and reliability' : ''} {currentLanguage() === 'ES' ? 'Experiencia y confiabilidad' : ''}</h2>
      <div className={cl.experience__container}>
        <div className={cl.about__company}>
          <h2>
            {currentLanguage() === 'RU' ? 'Компания "GarantBuild" уже свыше 10 лет является надежным партнером в строительстве и ремонте.' : ''} {currentLanguage() === 'EN' ? 'The GarantBuild company has been a reliable partner in construction and renovation for over 10 years.' : ''} {currentLanguage() === 'ES' ? 'La empresa GarantBuild es desde hace más de 10 años un socio fiable en el ámbito de la construcción y la renovación.' : ''}
          </h2>
          <p>
            {currentLanguage() === 'RU' ? 'Мы занимаемся строительством домов и бассейнов, выполнением ремонтных работ, а также электромонтажом и сантехническими услугами. Наши эксперты также специализируются на ландшафтных работах, установке потолков и оформлении фасадов. Более 50 успешно завершенных проектов и множество довольных клиентов подтверждают нашу репутацию надежного партнера, который всегда соблюдает сроки и обеспечивает высокое качество услуг.' : ''} {currentLanguage() === 'EN' ? 'We provide home and pool construction, renovations, as well as electrical and plumbing services. Our experts also specialize in landscaping, ceiling installation and façade design. More than 50 successfully completed projects and many satisfied clients confirm our reputation as a reliable partner who always meets deadlines and provides high quality services.' : ''} {currentLanguage() === 'ES' ? 'Brindamos construcción y renovaciones de viviendas y piscinas, así como servicios de electricidad y plomería. Nuestros expertos también se especializan en paisajismo, instalación de techos y diseño de fachadas. Más de 50 proyectos completados con éxito y muchos clientes satisfechos confirman nuestra reputación como socio confiable que siempre cumple con los plazos y brinda servicios de alta calidad.' : ''}
          </p>
          <div className={cl.count__project}>
            <div className={cl.project}>
                <h3>5</h3>
                {currentLanguage() === 'RU' ? <p>постройка<br/>домов</p> : ''} {currentLanguage() === 'EN' ? <p>construction<br/>of houses</p> : ''} {currentLanguage() === 'ES' ? <p>construcción<br/>de casas</p> : ''}
            </div>
            <div className={cl.project}>
                <h3>16</h3>
                {currentLanguage() === 'RU' ? <p>отремонтированных<br/>квартир</p> : ''} {currentLanguage() === 'EN' ? <p>renovated<br/>apartments</p> : ''} {currentLanguage() === 'ES' ? <p>apartamentos<br/>reformados</p> : ''}
            </div>
            <div className={cl.project}>
                <h3>4</h3>
                {currentLanguage() === 'RU' ? <p>реконструкций<br/>фасадов</p> : ''} {currentLanguage() === 'EN' ? <p>facade<br/>reconstruction</p> : ''} {currentLanguage() === 'ES' ? <p>Reconstrucción<br/>de fachada</p> : ''}
            </div>
            <div className={cl.project} style={{border: 'none'}}>
                <h3>25+</h3>
                <p>{currentLanguage() === 'RU' ? <p>различных<br/>проектов</p> : ''} {currentLanguage() === 'EN' ? <p>various<br/>projects</p> : ''} {currentLanguage() === 'ES' ? <p>varios<br/>proyectos</p> : ''}</p>
            </div>
          </div>
        </div>
        <img src={house} alt="house" />
      </div>
    </section>
  );
}
