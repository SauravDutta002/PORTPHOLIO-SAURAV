import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ProjectPage from "./pages/Project"
import SkillsPage from "./pages/Skills"
import Achivements from "./pages/Achivements";
import Lodar from "./components/Lodar";
import Contact from "./pages/Contact";
import ShowProject from "./components/ShowProject";
import TeamAura from "./pages/TeamAura";
import Notfound from "./pages/Notfound";
import CommandPi from "./pages/CommandPi";
import Astra from "./pages/Astra";
import IDcard from "./components/AURA_Loader"
const App = () => {

const [isLoading, setisLoading] = useState(true);

 useEffect(()=>{
  const timer = setTimeout(()=>{
    setisLoading(false);
  } , 2500);
  return ()=> clearTimeout(timer);
 } , []);
 
  return (
    
    <div>
      {isLoading ? <Lodar/> : <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/achievements" element={<Achivements/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/AURA" element={<ShowProject />}/>
        <Route path="/TeamAURA" element={<TeamAura />}/>
        <Route path="/CommandPi" element={<CommandPi />}/>
        <Route path="/Astra" element={<Astra/>}/>
        {/* <Route  path="/test" element={<IDcard/>}/> */}
        <Route  path="*" element={<Notfound/>}/>

      </Route>

      </Routes> }
      
    </div>

    // <Lodar/>

  );
};

export default App;