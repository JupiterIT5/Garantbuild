import cl from "./about.module.scss";
import array from '../../../image/icon/array2.svg'
import LanguageData from "../../interface/Language";
import { sendMessage } from "../../API/telegram";
import { useState } from "react";

interface AboutData extends LanguageData {
  setMenu: Function
}

export default function About({currentLanguage, setMenu}: AboutData) {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handlePlaceholder = (currentLanguage: Function, text: Array<string>): string | undefined => {
    if (currentLanguage() === 'RU') {
      return text[0]
    } else if (currentLanguage() === 'EN') {
      return text[1]
    } else if (currentLanguage() === 'ES') {
      return text[2]
    }
  }

  const handleMessage = async (e:any): Promise<void | undefined> => {
    e.preventDefault()
    if (!name || name.length < 2) {
      setNameError(true)
      return 
    } else {
      setNameError(false)
    }
    if (!phone) {
      setPhoneError(true)
      return 
    } else {
      setPhoneError(false)
    }
    if (!message || message.length < 5) {
      setMessageError(true)
      return
    } else {
      setMessageError(false)
    }
    setMenu(true)
    const messages = `Имя пользователя: ${name}...  Телефон: ${phone}...  Сообщение: ${message}`
    await sendMessage(messages)
    setMessage('')
    setName('')
    setPhone('')
  }

  return (
    <div className={cl.about__container}>
      <section className={cl.section__about}>
        <div className={cl.text}>
          <h1>{currentLanguage() === 'RU' ? 'Все услуги для вашего дома и участка в одном месте!' : ''} {currentLanguage() === 'EN' ? 'All services for your home and site in one place!' : ''} {currentLanguage() === 'ES' ? '¡Todos los servicios para tu hogar y sitio en un solo lugar!' : ''}</h1>
          <p>
            {currentLanguage() === 'RU' ? 'От сантехники и электрики до ландшафтного дизайна и кровли. Профессиональные работы для вашего комфорта и уюта.' : ''} {currentLanguage() === 'EN' ? 'From plumbing and electrical to landscaping and roofing. Professional work for your comfort and coziness.' : ''} {currentLanguage() === 'ES' ? 'Desde plomería y electricidad hasta paisajismo y techado. Trabajo profesional para su comodidad y calidez.' : ''}
          </p>
          <a href="#services">
            <h2>{currentLanguage() === 'RU' ? 'Посмотреть все услуги' : ''} {currentLanguage() === 'EN' ? 'View all services' : ''} {currentLanguage() === 'ES' ? 'Ver todos los servicios' : ''}</h2>
            <img src={array} alt="array" />
          </a>
        </div>
      </section>
      <div className={cl.form}>
        <h3>{currentLanguage() === 'RU' ? 'Рассчитаем стоимость вашего проекта' : ''} {currentLanguage() === 'EN' ? 'We will calculate the cost of your project' : ''} {currentLanguage() === 'ES' ? 'Calcularemos el coste de tu proyecto.' : ''}</h3>
        <p>{currentLanguage() === 'RU' ? 'Отправьте заявку и наш менеджер свяжется с вами' : ''} {currentLanguage() === 'EN' ? 'Send a request and our manager will contact you' : ''} {currentLanguage() === 'ES' ? 'Envíe una solicitud y nuestro gerente se comunicará con usted.' : ''}</p>
        <form onSubmit={handleMessage}>
            <input value={name} type="text" name="name" className={nameError ? cl.input__error : cl.name} placeholder={handlePlaceholder(currentLanguage, ['Ваше имя', 'Your name', 'Su nombre'])} onChange={(e) => setName(e.target.value)} minLength={2}/>
            <h6 className={nameError ? cl.text__error : cl.text__none}>{currentLanguage() === 'RU' ? 'Необходимо указать ваше имя' : ''} {currentLanguage() === 'EN' ? 'Your name is required' : ''} {currentLanguage() === 'ES' ? 'Tu nombre es requerido' : ''}</h6>
            <input value={phone} type="text" name="phone" className={phoneError ? cl.input__error : cl.phone} placeholder={handlePlaceholder(currentLanguage, ['Номер телефона', 'Phone number', 'Número de teléfono'])} onChange={(e) => setPhone(e.target.value)} minLength={7}/>
            <h6 className={phoneError ? cl.text__error : cl.text__none}>{currentLanguage() === 'RU' ? 'Необходимо указать ваш номер телефона' : ''} {currentLanguage() === 'EN' ? 'You must provide your phone number' : ''} {currentLanguage() === 'ES' ? 'Debes proporcionar tu número de teléfono.' : ''}</h6>
            <textarea value={message} className={messageError ? cl.input__error : cl.message} placeholder={handlePlaceholder(currentLanguage, ['Описание проекта', 'Project Description', 'Descripción del Proyecto'])} name="message" onChange={(e) => setMessage(e.target.value)} minLength={5}></textarea>
            <h6 className={messageError ? cl.text__error : cl.text__none}>{currentLanguage() === 'RU' ? 'Необходимо указать описание проекта' : ''} {currentLanguage() === 'EN' ? 'A description of the project is required' : ''} {currentLanguage() === 'ES' ? 'Se requiere una descripción del proyecto.' : ''}</h6>
            <button className={cl.submit}>{currentLanguage() === 'RU' ? 'Отправить заявку' : ''} {currentLanguage() === 'EN' ? 'Send a request' : ''} {currentLanguage() === 'ES' ? 'Enviar una solicitud' : ''}</button>
        </form>
      </div>
    </div>
  );
}
