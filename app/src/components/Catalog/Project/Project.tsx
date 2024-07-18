import cl from './project.module.scss'

interface ProjectData {
    projects: Array<string>,
    currentLanguage: Function
}

export default function Project({projects, currentLanguage}: ProjectData) {
    return (
        <section className={cl.section__projects}>
            <h2 className={cl.title}>{currentLanguage() === 'RU' ? 'реализованные проекты:' : ''} {currentLanguage() === 'EN' ? 'completed projects:' : ''} {currentLanguage() === 'ES' ? 'proyectos completados:' : ''}</h2>
            <div className={cl.project__list}>
                {projects.map((image) =>
                    <img src={image} alt="number" key={image} />
                )}
            </div>
        </section>
    )
}