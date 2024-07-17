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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/plumbing" element={<Catalog fon={plumbingFon} projects={plumbingProjects} title={plumbingTitle} subtitle={plumbingSubTitle} title2={plumbingTitle2} description={plumbingDescription}/>} />
      <Route path="/ceilings" element={<Catalog fon={ceilingFon} projects={ceilingProjects} title={ceilingTitle} subtitle={ceilingSubTitle} title2={ceilingTitle2} description={ceilingDescription}/>} />
      <Route path="/buildHouses" element={<Catalog fon={buildHouseFon} projects={buildHouseProjects} title={buildHouseTitle} subtitle={buildHouseSubTitle} title2={buildHouseTitle2} description={buildHouseDescription}/>} />
      <Route path="/electrician" element={<Catalog fon={electricianFon} projects={electricianProjects} title={electricianTitle} subtitle={electricianSubTitle} title2={electricianTitle2} description={electricianDescription}/>} />
      <Route path="/renovationWork" element={<Catalog fon={renowationWorkFon} projects={renowationWorkProjects} title={renowationWorkTitle} subtitle={renowationWorkSubTitle} title2={renowationWorkTitle2} description={renowationWorkDescription}/>} />
      <Route path="/facades" element={<Catalog fon={facadesFon} projects={facadesProjects} title={facadesTitle} subtitle={facadesSubTitle} title2={facadesTitle2} description={facadesDescription}/>} />
      <Route path="/landscapingWorks" element={<Catalog fon={labdscapingWorksFon} projects={labdscapingWorksProjects} title={labdscapingWorksTitle} subtitle={labdscapingWorksSubTitle} title2={labdscapingWorksTitle2} description={labdscapingWorksDescription}/>} />
      <Route path="/buildPools" element={<Catalog fon={buildPoolsFon} projects={buildPoolsProjects} title={buildPoolsTitle} subtitle={buildPoolsSubTitle} title2={buildPoolsTitle2} description={buildPoolsDescription}/>} />
    </Routes>
  )
}

export default App
