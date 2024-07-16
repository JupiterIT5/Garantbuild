import cl from './steps.module.scss'
import step1 from '../../image/photo/Steps/step1.png'
import step2 from '../../image/photo/Steps/step2.png'
import step3 from '../../image/photo/Steps/step3.png'
import step4 from '../../image/photo/Steps/step4.png'
import step5 from '../../image/photo/Steps/step5.png'
import step6 from '../../image/photo/Steps/step6.png'
import step7 from '../../image/photo/Steps/step7.png'
import step8 from '../../image/photo/Steps/step8.png'

export default function Steps() {
    return (
        <section className={cl.section__steps}>
            <h2 className={cl.title}>Шаги к реализации<br/>проекта</h2>
            <div className={cl.steps__container}>
                <div className={cl.steps}>
                    <img src={step1} alt="step1" />
                    <h2>Оставьте заявку</h2>
                    <p>Вы оставляете заявку на сайте или по телефону, для уточнения всех деталий</p>
                    <button>Оставить заявку</button>
                </div>
                <div className={cl.steps}>
                    <img src={step2} alt="step2" />
                    <h2>Встреча со специалистом</h2>
                    <p>Выезд специалиста на объект - абсолютно бесплатно</p>
                </div>
                <div className={cl.steps}>
                    <img src={step3} alt="step3" />
                    <h2>Согласование сметы</h2>
                    <p>Мы составим смету на основе поставленной задачи, и согласуем с вами</p>
                </div>
                <div className={cl.steps}>
                    <img src={step4} alt="step4" />
                    <h2>Подписание договора</h2>
                    <p>Подпишем договор, в котором будут указаны весь перечень работ, сроки и суммы</p>
                </div>
                <div className={cl.steps}>
                    <img src={step5} alt="step5" />
                    <h2>Получение аванса</h2>
                    <p>Получаем аванс по договору на покупку материала для работ</p>
                </div>
                <div className={cl.steps}>
                    <img src={step6} alt="step6" />
                    <h2>Выполнение работ</h2>
                    <p>Завозим материалы на объект и приступаем к выполнению работ по договору</p>
                </div>
                <div className={cl.steps}>
                    <img src={step7} alt="step7" />
                    <h2>Уборка территории</h2>
                    <p>По окончанию ремонтно-строительных работ, подготавливаем объект к сдаче</p>
                </div>
                <div className={cl.steps}>
                    <img src={step8} alt="step8" />
                    <h2>Приёмка работы клиентом</h2>
                    <p>Проверка и приемка выполненных работ, подписание акта выполненных работ</p>
                </div>
            </div>
        </section>
    )
}