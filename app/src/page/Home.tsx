import { useState } from "react";
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
  setLanguage: Function
}

export default function Home({language, setLanguage}: HomeData) {
  const [menu, setMenu] = useState(false)
  const [menuCount, setMenuCount] = useState(false)

  return (
    <div className={cl.container}>
      <Header setCurrentLanguage={setLanguage} currentLanguage={language}/>
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
