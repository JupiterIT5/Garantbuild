import { useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import cl from './style.module.scss'
import Steps from "../components/Steps/Steps"
import Footer from "../components/Footer/Footer"
import About from "../components/Catalog/About/About"
import Description from "../components/Catalog/Description/Description"
import Project from "../components/Catalog/Project/Project"

interface PageData {
    fon: string, 
    projects: Array<string>,
    title: string,
    subtitle: string,
    title2: string,
    description: string,
}

export default function Catalog({fon, projects, title, subtitle, title2, description}: PageData) {
    const navigate = useNavigate()

    return (
        <div className={cl.container}>
            <Header />
            <About fon={fon} title={title} subtitle={subtitle}/>
            <Description currentPage={title} title={title2} description={description}/>
            <Project projects={projects} />
            <Steps />
            <Footer />
        </div>
    )
}