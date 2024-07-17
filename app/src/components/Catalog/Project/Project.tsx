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
                <img src={projects[0]} alt="project" />
                <img src={projects[1]} alt="project" />
                <img src={projects[2]} alt="project" />
            </div>
        </section>
    )
}