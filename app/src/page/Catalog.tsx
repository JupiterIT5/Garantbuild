import Header from "../components/Header/Header"
import cl from './style.module.scss'
import Steps from "../components/Steps/Steps"
import Footer from "../components/Footer/Footer"
import About from "../components/Catalog/About/About"
import Description from "../components/Catalog/Description/Description"
import Project from "../components/Catalog/Project/Project"

interface PageData {
    language: Function,
    setLanguage: Function,
    fon: string, 
    projects: Array<string>,
    title: Array<string>,
    subtitle: Array<string>,
    title2: Array<string>,
    description: Array<string>,
}

export default function Catalog({language, setLanguage, fon, projects, title, subtitle, title2, description}: PageData) {

    return (
        <div className={cl.container}>
            <Header setCurrentLanguage={setLanguage} currentLanguage={language} />
            <About fon={fon} title={title} subtitle={subtitle} currentLanguage={language}/>
            <Description currentPage={title} title={title2} description={description} currentLanguage={language}/>
            <Project projects={projects} currentLanguage={language} />
            <Steps currentLanguage={language}/>
            <Footer currentLanguage={language}/>
        </div>
    )
}