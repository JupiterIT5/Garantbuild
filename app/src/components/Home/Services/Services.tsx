import cl from "./services.module.scss";
import { useNavigate } from "react-router-dom";
import array from '../../../image/icon/array3.svg'
import LanguageData from "../../interface/Language";

export default function Services({currentLanguage}: LanguageData) {
  const navigate = useNavigate();

  const navigateToPage = (category: string): undefined => {
    navigate(`/${category}`);
  };

  return (
    <section className={cl.section__service} id="services">
      <h2 className={cl.title}>{currentLanguage() === 'RU' ? 'Наши услуги' : ''} {currentLanguage() === 'EN' ? 'Our services' : ''} {currentLanguage() === 'ES' ? 'Nuestros servicios' : ''}</h2>
      <div className={cl.service__container}>
        <div className={cl.service} onClick={() => navigateToPage("plumbing")}>
          <div className={[cl.service1, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Сантехника' : ''} {currentLanguage() === 'EN' ? 'Plumbing' : ''} {currentLanguage() === 'ES' ? 'Plomería' : ''}</h2>
          <p>
            {currentLanguage() === 'RU' ? 'Полный комплекс сантехнических услуг: от монтажа водонагревателей до установки систем отопления' : ''} {currentLanguage() === 'EN' ? 'A full range of plumbing services: from installation of water heaters to installation of heating systems' : ''} {currentLanguage() === 'ES' ? 'Una gama completa de servicios de fontanería: desde la instalación de calentadores de agua hasta la instalación de sistemas de calefacción.' : ''}
          </p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div className={cl.service} onClick={() => navigateToPage("ceilings")}>
          <div className={[cl.service2, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Потолки' : ''} {currentLanguage() === 'EN' ? 'Ceilings' : ''} {currentLanguage() === 'ES' ? '' : 'Techos'}</h2>
          <p>
            {currentLanguage() === 'RU' ? 'Профессиональная отделка потолков: натяжные конструкции, гипсокартон, покраска' : ''} {currentLanguage() === 'EN' ? 'Professional finishing of ceilings: tension structures, plasterboard, painting' : ''} {currentLanguage() === 'ES' ? 'Acabado profesional de techos: estructuras tensadas, placas de yeso, pintura.' : ''}
          </p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div
          className={cl.service}
          onClick={() => navigateToPage("buildHouses")}
        >
          <div className={[cl.service3, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Строительство домов' : ''} {currentLanguage() === 'EN' ? 'Construction of houses' : ''} {currentLanguage() === 'ES' ? 'Construcción de casas' : ''}</h2>
          <p>{currentLanguage() === 'RU' ? 'Строительство домов любой сложности' : ''} {currentLanguage() === 'EN' ? 'Construction of houses of any complexity' : ''} {currentLanguage() === 'ES' ? 'Construcción de viviendas de cualquier complejidad.' : ''}</p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div
          className={cl.service}
          onClick={() => navigateToPage("electrician")}
        >
          <div className={[cl.service4, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Электрик' : ''} {currentLanguage() === 'EN' ? 'Electrician' : ''} {currentLanguage() === 'ES' ? 'Electricista' : ''}</h2>
          <p>{currentLanguage() === 'RU' ? 'Все виды электромонтажных работ для вашего дома и бизнеса' : ''} {currentLanguage() === 'EN' ? 'All types of electrical work for your home and business' : ''} {currentLanguage() === 'ES' ? 'Todo tipo de trabajos eléctricos para tu hogar y negocio.' : ''}</p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div
          className={cl.service}
          onClick={() => navigateToPage("renovationWork")}
        >
          <div className={[cl.service5, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Ремонтные работы' : ''} {currentLanguage() === 'EN' ? 'Repair work' : ''} {currentLanguage() === 'ES' ? 'Trabajo de reparación' : ''}</h2>
          <p>
            {currentLanguage() === 'RU' ? 'Профессионально выполняем весь спектр . ремонтных работ для дома и офисов' : ''} {currentLanguage() === 'EN' ? 'We carry out the entire range professionally. renovation work for home and offices' : ''} {currentLanguage() === 'ES' ? 'Realizamos toda la gama de forma profesional. trabajos de reformas para el hogar y oficinas' : ''}
          </p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div className={cl.service} onClick={() => navigateToPage("facades")}>
          <div className={[cl.service6, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Фасады' : ''} {currentLanguage() === 'EN' ? 'Facades' : ''} {currentLanguage() === 'ES' ? 'Fachadas' : ''}</h2>
          <p>
            {currentLanguage() === 'RU' ? 'Фасадные работы: очистка, декоративная отделка, покраска, гидроизоляция.' : ''} {currentLanguage() === 'EN' ? 'Facade work: cleaning, decorative finishing, painting, waterproofing.' : ''} {currentLanguage() === 'ES' ? 'Trabajos de fachada: limpieza, acabados decorativos, pintura, impermeabilización.' : ''}
          </p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div
          className={cl.service}
          onClick={() => navigateToPage("landscapingWorks")}
        >
          <div className={[cl.service7, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Ландшафтные работы' : ''} {currentLanguage() === 'EN' ? 'Landscaping works' : ''} {currentLanguage() === 'ES' ? 'Obras de paisajismo' : ''}</h2>
          <p>
            {currentLanguage() === 'RU' ? 'Преобразим ваш участок: озеленение, автоматический полив, освещение и тротуарные дорожки.' : ''} {currentLanguage() === 'EN' ? 'We will transform your site: landscaping, automatic watering, lighting and sidewalk paths.' : ''} {currentLanguage() === 'ES' ? 'Transformaremos su sitio: paisajismo, riego automático, iluminación y senderos para aceras.' : ''}
          </p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
        <div
          className={cl.service}
          onClick={() => navigateToPage("buildPools")}
        >
          <div className={[cl.service8, cl.service_img].join(" ")}></div>
          <h2>{currentLanguage() === 'RU' ? 'Строительство бассейнов' : ''} {currentLanguage() === 'EN' ? 'Construction of swimming pools' : ''} {currentLanguage() === 'ES' ? 'Construcción de piscinas' : ''}</h2>
          <p>{currentLanguage() === 'RU' ? 'Профессиональное строительство бассейнов любого объема' : ''} {currentLanguage() === 'EN' ? 'Professional construction of swimming pools of any size' : ''} {currentLanguage() === 'ES' ? 'Construcción profesional de piscinas de cualquier tamaño.' : ''}</p>
          <img src={array} alt="array" className={cl.array}/>
        </div>
      </div>
    </section>
  );
}
