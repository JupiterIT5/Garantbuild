import cl from "./quality.module.scss";

export default function Quality() {
  return (
    <section className={cl.section__quality}>
      <h2 className={cl.title}>
        Качество и сервис —<br />
        наш приоритет
      </h2>
      <div className={cl.quality__container}>
        <div className={cl.quality}>
          <h3 className={cl.number}>1</h3>
          <h2>Оказываем весь спектр услуг на высшем уровне</h2>
          <div>
            <p>Более <span>10</span> лет на рынке</p>
            <p>Чётко соблюдаем сроки</p>
            <p>Не заходим за рамки сметы</p>
          </div>
        </div>
        <div className={cl.quality}>
          <h3 className={cl.number}>2</h3>
          <div className={cl.description}>
            <h2>Без головной боли</h2>
            <p>
              Все заботы берем на себя от начала и до сдачи объекта. Вам не
              придется участвовать в решении никаких вопросов
            </p>
          </div>
        </div>
        <div className={cl.quality}>
          <h3 className={cl.number}>3</h3>
          <div className={cl.description}>
            <h2>Рабочие с узким профилем</h2>
            <p>
              Все мастера выполняют только работы соответствующие его профилю.
              Сантехник делает сантехнику, электрик - электрику
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
