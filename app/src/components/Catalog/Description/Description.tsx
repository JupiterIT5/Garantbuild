import { useNavigate } from 'react-router-dom'
import cl from './description.module.scss'

interface DescriptionData {
    currentPage: Array<string>,
    title: Array<string>,
    description: Array<string>,
    currentLanguage: Function
}

export default function Description({currentPage, title, description, currentLanguage}: DescriptionData) {
    const navigate = useNavigate()

    return (
        <section className={cl.section__description}>
            <h2 className={cl.nav}>
                <p onClick={() => navigate('/')}>{currentLanguage() === 'RU' ? 'Главная' : ''} {currentLanguage() === 'EN' ? 'Home' : ''} {currentLanguage() === 'ES' ? 'Hogar' : ''} /</p><span>{currentLanguage() === 'RU' ? currentPage[0] : ''} {currentLanguage() === 'EN' ? currentPage[1] : ''} {currentLanguage() === 'ES' ? currentPage[2] : ''}</span>
            </h2>
            <h2 className={cl.title}>{currentLanguage() === 'RU' ? 'подробнее о нашей услуге' : ''} {currentLanguage() === 'EN' ? 'more about our service' : ''} {currentLanguage() === 'ES' ? 'más sobre nuestro servicio' : ''}</h2>
            <div className={cl.description}>
                <h3>{currentLanguage() === 'RU' ? title[0] : ''} {currentLanguage() === 'EN' ? title[1] : ''} {currentLanguage() === 'ES' ? title[2] : ''}</h3>
                <p>{currentLanguage() === 'RU' ? description[0] : ''} {currentLanguage() === 'EN' ? description[1] : ''} {currentLanguage() === 'ES' ? description[2] : ''}</p>
            </div>
        </section>
    )
}