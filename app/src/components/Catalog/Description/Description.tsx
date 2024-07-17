import { useNavigate } from 'react-router-dom'
import cl from './description.module.scss'

interface DescriptionData {
    currentPage: string,
    title: string,
    description: string,
}

export default function Description({currentPage, title, description}: DescriptionData) {
    const navigate = useNavigate()

    return (
        <section className={cl.section__description}>
            <h2 className={cl.nav}>
                <p onClick={() => navigate('/')}>Главная /</p><span>{currentPage}</span>
            </h2>
            <h2 className={cl.title}>подробнее о нашей услуге</h2>
            <div className={cl.description}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    )
}