import cl from "./experience.module.scss";
import house from "../../../image/photo/house.png";

export default function Experience() {
  return (
    <section className={cl.section__experience}>
      <h2 className={cl.title}>Опыт и надежность</h2>
      <div className={cl.experience__container}>
        <div className={cl.about__company}>
          <h2>
            Компания "GarantBuild" уже свыше 10 лет является надежным партнером
            в строительстве и ремонте.
          </h2>
          <p>
            Мы занимаемся строительством домов и бассейнов, выполнением
            ремонтных работ, а также электромонтажом и сантехническими услугами.
            Наши эксперты также специализируются на ландшафтных работах,
            установке потолков и оформлении фасадов. Более 50 успешно
            завершенных проектов и множество довольных клиентов подтверждают
            нашу репутацию надежного партнера, который всегда соблюдает сроки и
            обеспечивает высокое качество услуг.
          </p>
          <div className={cl.count__project}>
            <div className={cl.project}>
                <h3>5</h3>
                <p>постройка<br/>домов</p>
            </div>
            <div className={cl.project}>
                <h3>16</h3>
                <p>отремонтированных<br/>квартир</p>
            </div>
            <div className={cl.project}>
                <h3>4</h3>
                <p>реконструкций<br/>фасадов</p>
            </div>
            <div className={cl.project} style={{border: 'none'}}>
                <h3>25+</h3>
                <p>различных<br/>проектов</p>
            </div>
          </div>
        </div>
        <img src={house} alt="house" />
      </div>
    </section>
  );
}
