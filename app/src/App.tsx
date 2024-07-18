import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Catalog from "./page/Catalog"
import { buildHouseFon, buildHouseProjects, buildHouseSubTitle, buildHouseDescription, buildHouseTitle, buildHouseTitle2 } from "./image/photo/Catalog/buildHouses/buildHouse.ts"
import { buildPoolsDescription, buildPoolsFon, buildPoolsProjects, buildPoolsSubTitle, buildPoolsTitle, buildPoolsTitle2 } from "./image/photo/Catalog/buildPools/buildPool.ts"
import { ceilingDescription, ceilingFon, ceilingProjects, ceilingSubTitle, ceilingTitle, ceilingTitle2 } from "./image/photo/Catalog/ceilings/ceiling.ts"
import { electricianDescription, electricianFon, electricianProjects, electricianSubTitle, electricianTitle, electricianTitle2 } from "./image/photo/Catalog/electrician/electrician.ts"
import { facadesDescription, facadesFon, facadesProjects, facadesSubTitle, facadesTitle, facadesTitle2 } from "./image/photo/Catalog/facades/facades.ts"
import { labdscapingWorksDescription, labdscapingWorksFon, labdscapingWorksProjects, labdscapingWorksSubTitle, labdscapingWorksTitle, labdscapingWorksTitle2 } from "./image/photo/Catalog/landscapingWorks/labdscapingWorks.ts"
import { plumbingDescription, plumbingFon, plumbingProjects, plumbingSubTitle, plumbingTitle, plumbingTitle2 } from "./image/photo/Catalog/plumbing/plumbing.ts"
import { renowationWorkDescription, renowationWorkFon, renowationWorkProjects, renowationWorkSubTitle, renowationWorkTitle, renowationWorkTitle2 } from "./image/photo/Catalog/renovationWork/renowationWork.ts"
import { useEffect, useState } from "react"

function App() {
  useEffect(() => {
    if (!localStorage.getItem('Language')) {
      localStorage.setItem('Language', 'EN')
      location.reload()
    }
  }, [])

  const setCurrentLanguage = (lang: string) => {
    localStorage.setItem('Language', lang)
    location.reload()
  }

  const Language = () => {
    return localStorage.getItem('Language')
  }
  
  const [menu, setMenu] = useState(false)
  const [menuCount, setMenuCount] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Home menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage}/>}/>
      <Route path="/plumbing" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={plumbingFon} projects={plumbingProjects} title={plumbingTitle} subtitle={plumbingSubTitle} title2={plumbingTitle2} description={plumbingDescription}/>} />
      <Route path="/ceilings" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={ceilingFon} projects={ceilingProjects} title={ceilingTitle} subtitle={ceilingSubTitle} title2={ceilingTitle2} description={ceilingDescription}/>} />
      <Route path="/buildHouses" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={buildHouseFon} projects={buildHouseProjects} title={buildHouseTitle} subtitle={buildHouseSubTitle} title2={buildHouseTitle2} description={buildHouseDescription}/>} />
      <Route path="/electrician" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={electricianFon} projects={electricianProjects} title={electricianTitle} subtitle={electricianSubTitle} title2={electricianTitle2} description={electricianDescription}/>} />
      <Route path="/renovationWork" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={renowationWorkFon} projects={renowationWorkProjects} title={renowationWorkTitle} subtitle={renowationWorkSubTitle} title2={renowationWorkTitle2} description={renowationWorkDescription}/>} />
      <Route path="/facades" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={facadesFon} projects={facadesProjects} title={facadesTitle} subtitle={facadesSubTitle} title2={facadesTitle2} description={facadesDescription}/>} />
      <Route path="/landscapingWorks" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={labdscapingWorksFon} projects={labdscapingWorksProjects} title={labdscapingWorksTitle} subtitle={labdscapingWorksSubTitle} title2={labdscapingWorksTitle2} description={labdscapingWorksDescription}/>} />
      <Route path="/buildPools" element={<Catalog menu={menu} menuCount={menuCount} setMenu={setMenu} setMenuCount={setMenuCount} language={Language} setLanguage={setCurrentLanguage} fon={buildPoolsFon} projects={buildPoolsProjects} title={buildPoolsTitle} subtitle={buildPoolsSubTitle} title2={buildPoolsTitle2} description={buildPoolsDescription}/>} />
    </Routes>
  )
}

export default App
