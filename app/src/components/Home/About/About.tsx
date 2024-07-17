import cl from "./about.module.scss";
import array from '../../../image/icon/array2.svg'
import LanguageData from "../../interface/Language";
import React, { useState } from "react";
import axios from "axios";

export default function About({currentLanguage}: LanguageData) {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [errorName, setErrorName] = useState<boolean>(false)
  const [errorPhone, setErrorPhone] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const handlePlaceholder = (currentLanguage: Function, text: Array<string>): string | undefined => {
    if (currentLanguage() === 'RU') {
      return text[0]
    } else if (currentLanguage() === 'EN') {
      return text[1]
    } else if (currentLanguage() === 'ES') {
      return text[2]
    }
  }

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!name || name.length < 2) {
      setErrorName(true)
      return
    } else {
      setErrorName(false)
    }
    if (!phone) {
      setErrorPhone(true)
      return 
    } else {
      setErrorPhone(false)
    }
    if (!message || message.length < 5) {
      setErrorMessage(true)
      return
    } else {
      setErrorMessage(false)
    }
    await axios.post('https://telegram-message-firki.amvera.io/sending', {
      name: name,
      phone: phone,
      message: message,
    })
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
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" className={errorName ? cl.input__error : cl.name} placeholder={handlePlaceholder(currentLanguage, ['Ваше имя', 'Your name', 'Su nombre'])} minLength={2}/>
            <h6 className={errorName ? cl.text__error : cl.text__none}>{currentLanguage() === 'RU' ? 'Необходимо указать ваше имя' : ''} {currentLanguage() === 'EN' ? 'Your name is required' : ''} {currentLanguage() === 'ES' ? 'Tu nombre es requerido' : ''}</h6>
            <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" className={errorPhone ? cl.input__error : cl.phone} placeholder={handlePlaceholder(currentLanguage, ['Номер телефона', 'Phone number', 'Número de teléfono'])} minLength={20}/>
            <h6 className={errorPhone ? cl.text__error : cl.text__none}>{currentLanguage() === 'RU' ? 'Необходимо указать номер телефона' : ''} {currentLanguage() === 'EN' ? 'You must provide a phone number' : ''} {currentLanguage() === 'ES' ? 'Debes proporcionar un número de teléfono.' : ''}</h6>
            <textarea onChange={(e) => setMessage(e.target.value)} placeholder={handlePlaceholder(currentLanguage, ['Описание проекта', 'Project Description', 'Descripción del Proyecto'])} name="description" className={errorMessage ? cl.input__error : cl.description} minLength={5}></textarea>
            <h6 className={errorMessage ? cl.text__error : cl.text__none}>{currentLanguage() === 'RU' ? 'Необходимо указать описание проекта' : ''} {currentLanguage() === 'EN' ? 'A description of the project is required' : ''} {currentLanguage() === 'ES' ? 'Se requiere una descripción del proyecto.' : ''}</h6>
            <button onClick={(e) => sendMessage(e)} className={cl.submit}>{currentLanguage() === 'RU' ? 'Отправить заявку' : ''} {currentLanguage() === 'EN' ? 'Send a request' : ''} {currentLanguage() === 'ES' ? 'Enviar una solicitud' : ''}</button>
        </form>
      </div>
    </div>
  );
}
