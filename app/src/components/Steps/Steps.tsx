import cl from './steps.module.scss'
import LanguageData from '../interface/Language'
import step1 from '../../image/photo/Steps/step1.png'
import step2 from '../../image/photo/Steps/step2.png'
import step3 from '../../image/photo/Steps/step3.png'
import step4 from '../../image/photo/Steps/step4.png'
import step5 from '../../image/photo/Steps/step5.png'
import step6 from '../../image/photo/Steps/step6.png'
import step7 from '../../image/photo/Steps/step7.png'
import step8 from '../../image/photo/Steps/step8.png'

export default function Steps({currentLanguage}: LanguageData) {
    return (
        <section className={cl.section__steps} id='contact'>
            {currentLanguage() === 'RU' ? <h2 className={cl.title}>Шаги к реализации<br/>проекта</h2> : ''} {currentLanguage() === 'EN' ? <h2 className={cl.title}>Steps to project<br/>implementation</h2> : ''} {currentLanguage() === 'ES' ? <h2 className={cl.title}>Pasos para la implementación<br/>del proyecto.</h2> : ''}
            <div className={cl.steps__container}>
                <div className={cl.steps}>
                    <img src={step1} alt="step1" />
                    <h2>{currentLanguage() === 'RU' ? 'Оставьте заявку' : ''} {currentLanguage() === 'EN' ? 'Leave a request' : ''} {currentLanguage() === 'ES' ? 'Dejar una solicitud' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Вы оставляете заявку на сайте или по телефону, для уточнения всех деталий' : ''} {currentLanguage() === 'EN' ? 'You leave a request on the website or by phone to clarify all the details.' : ''} {currentLanguage() === 'ES' ? 'Dejas una solicitud en el sitio web o por teléfono para aclarar todos los detalles.' : ''}</p>
                    <button>{currentLanguage() === 'RU' ? 'Оставьте заявку' : ''} {currentLanguage() === 'EN' ? 'Leave a request' : ''} {currentLanguage() === 'ES' ? 'Dejar una solicitud' : ''}</button>
                </div>
                <div className={cl.steps}>
                    <img src={step2} alt="step2" />
                    <h2>{currentLanguage() === 'RU' ? 'Встреча со специалистом' : ''} {currentLanguage() === 'EN' ? 'Meeting with a specialist' : ''} {currentLanguage() === 'ES' ? 'Reunión con un especialista' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Выезд специалиста на объект - абсолютно бесплатно' : ''} {currentLanguage() === 'EN' ? 'A specialist`s visit to the site is absolutely free' : ''} {currentLanguage() === 'ES' ? 'La visita de un especialista al sitio es totalmente gratuita.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <img src={step3} alt="step3" />
                    <h2>{currentLanguage() === 'RU' ? 'Согласование сметы' : ''} {currentLanguage() === 'EN' ? 'Coordination of estimates' : ''} {currentLanguage() === 'ES' ? 'Coordinación de presupuestos.' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Мы составим смету на основе поставленной задачи, и согласуем с вами' : ''} {currentLanguage() === 'EN' ? 'We will draw up an estimate based on the task and agree with you' : ''} {currentLanguage() === 'ES' ? 'Elaboraremos un presupuesto en función de la tarea y lo acordaremos con usted.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <img src={step4} alt="step4" />
                    <h2>{currentLanguage() === 'RU' ? 'Подписание договора' : ''} {currentLanguage() === 'EN' ? 'Signing the contract' : ''} {currentLanguage() === 'ES' ? 'Firmando el contrato' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Подпишем договор, в котором будут указаны весь перечень работ, сроки и суммы' : ''} {currentLanguage() === 'EN' ? 'We will sign an agreement that will indicate the entire list of works, terms and amounts' : ''} {currentLanguage() === 'ES' ? 'Firmaremos un acuerdo que indicará la lista completa de obras, plazos y montos.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <img src={step5} alt="step5" />
                    <h2>{currentLanguage() === 'RU' ? '' : ''} {currentLanguage() === 'EN' ? 'Receiving an advance' : ''} {currentLanguage() === 'ES' ? 'Recibir un anticipo' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Получаем аванс по договору на покупку материала для работ' : ''} {currentLanguage() === 'EN' ? 'We receive an advance payment under a contract for the purchase of materials for work' : ''} {currentLanguage() === 'ES' ? 'Recibimos un anticipo en virtud de un contrato para la compra de materiales para el trabajo.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <img src={step6} alt="step6" />
                    <h2>{currentLanguage() === 'RU' ? 'Выполнение работ' : ''} {currentLanguage() === 'EN' ? 'Execution of work' : ''} {currentLanguage() === 'ES' ? 'Ejecución del trabajo' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Завозим материалы на объект и приступаем к выполнению работ по договору' : ''} {currentLanguage() === 'EN' ? 'We deliver materials to the site and begin work under the contract.' : ''} {currentLanguage() === 'ES' ? 'Entregamos materiales al sitio y comenzamos a trabajar según el contrato.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <img src={step7} alt="step7" />
                    <h2>{currentLanguage() === 'RU' ? 'Уборка территории' : ''} {currentLanguage() === 'EN' ? 'Cleaning the area' : ''} {currentLanguage() === 'ES' ? 'Limpiando el área' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'По окончанию ремонтно-строительных работ, подготавливаем объект к сдаче' : ''} {currentLanguage() === 'EN' ? 'Upon completion of repair and construction work, we prepare the facility for delivery' : ''} {currentLanguage() === 'ES' ? 'Una vez finalizados los trabajos de reparación y construcción, preparamos la instalación para la entrega.' : ''}</p>
                </div>
                <div className={cl.steps}>
                    <img src={step8} alt="step8" />
                    <h2>{currentLanguage() === 'RU' ? 'Приёмка работы клиентом' : ''} {currentLanguage() === 'EN' ? 'Acceptance of work by the client' : ''} {currentLanguage() === 'ES' ? 'Aceptación del trabajo por parte del cliente.' : ''}</h2>
                    <p>{currentLanguage() === 'RU' ? 'Проверка и приемка выполненных работ, подписание акта выполненных работ' : ''} {currentLanguage() === 'EN' ? 'Inspection and acceptance of completed work, signing of the work completion certificate' : ''} {currentLanguage() === 'ES' ? 'Inspección y aceptación de obra terminada, firma del acta de finalización de obra.' : ''}</p>
                </div>
            </div>
        </section>
    )
}