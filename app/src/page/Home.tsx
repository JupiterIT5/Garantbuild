import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/Home/About/About";
import Experience from "../components/Home/Experience/Experience";
import Quality from "../components/Home/Quality/Quality";
import Services from "../components/Home/Services/Services";
import Steps from "../components/Steps/Steps";
import cl from "./style.module.scss";

interface HomeData {
  language: Function,
  setLanguage: Function
}

export default function Home({language, setLanguage}: HomeData) {

  return (
    <div className={cl.container}>
      <Header setCurrentLanguage={setLanguage} currentLanguage={language}/>
      <About currentLanguage={language}/>
      <Services currentLanguage={language}/>
      <Quality currentLanguage={language}/>
      <Experience currentLanguage={language}/>
      <Steps currentLanguage={language}/>
      <Footer currentLanguage={language}/>
    </div>
  );
}
