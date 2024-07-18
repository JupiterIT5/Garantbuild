import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/Home/About/About";
import Experience from "../components/Home/Experience/Experience";
import Quality from "../components/Home/Quality/Quality";
import Services from "../components/Home/Services/Services";
import Steps from "../components/Steps/Steps";
import cl from "./style.module.scss";
import PopupThank from "../components/popup/PopupThank";
import PopupCount from "../components/popup/PopupCount";

interface HomeData {
  language: Function,
  setLanguage: Function,
  menuCount: boolean,
  setMenuCount: Function,
  menu: boolean,
  setMenu: Function,
}

export default function Home({language, setLanguage, menuCount, setMenuCount, menu, setMenu}: HomeData) {

  return (
    <div className={cl.container}>
      <Header setCurrentLanguage={setLanguage} currentLanguage={language} setMenuCount={setMenuCount}/>
      <About currentLanguage={language} setMenu={setMenu}/>
      <Services currentLanguage={language}/>
      <Quality currentLanguage={language}/>
      <Experience currentLanguage={language}/>
      <Steps currentLanguage={language} setMenuCount={setMenuCount}/>
      <Footer currentLanguage={language}/>
      {menu ? <PopupThank currentLanguage={language} setMenu={setMenu}/> : ''}
      {menuCount ? <PopupCount setMenuCount={setMenuCount} setMenuThank={setMenu} currentLanguage={language}/> : ''}
    </div>
  );
}
