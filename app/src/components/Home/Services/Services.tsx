import cl from "./services.module.scss";

export default function Services() {
  return (
    <section className={cl.section__service}>
      <h2 className={cl.title}>Наши услуги</h2>
      <div className={cl.service__container}>
        <div className={cl.service}>
          <div className={[cl.service1, cl.service_img].join(" ")}></div>
          <h2>Сантехника</h2>
          <p>
            Полный комплекс сантехнических услуг: от монтажа водонагревателей до
            установки систем отопления
          </p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service2, cl.service_img].join(" ")}></div>
          <h2>Потолки</h2>
          <p>
            Профессиональная отделка потолков: натяжные конструкции,
            гипсокартон, покраска
          </p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service3, cl.service_img].join(" ")}></div>
          <h2>Строительство домов</h2>
          <p>Строительство домов любой сложности</p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service4, cl.service_img].join(" ")}></div>
          <h2>Электрик </h2>
          <p>Все виды электромонтажных работ для вашего дома и бизнеса</p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service5, cl.service_img].join(" ")}></div>
          <h2>Ремонтные работы</h2>
          <p>Профессионально выполняем весь спектр . ремонтных работ для дома и офисов</p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service6, cl.service_img].join(" ")}></div>
          <h2>Фасады</h2>
          <p>Фасадные работы: очистка, декоративная отделка, покраска, гидроизоляция.</p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service7, cl.service_img].join(" ")}></div>
          <h2>Ландшафтные работы</h2>
          <p>Преобразим ваш участок: озеленение, автоматический полив, освещение и тротуарные дорожки.</p>
        </div>
        <div className={cl.service}>
          <div className={[cl.service8, cl.service_img].join(" ")}></div>
          <h2>Строительство бассейнов</h2>
          <p>Профессиональное строительство бассейнов любого объема</p>
        </div>
      </div>
    </section>
  );
}
