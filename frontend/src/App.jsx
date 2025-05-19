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
import ProjectAURA from "./pages/ProjectAURA"
import ShowProject from "./components/ShowProject";



//project data 
import Aura1 from "./assets/PROJECTSHOW/Aura.jpeg"
import Aura2 from "./assets/PROJECTSHOW/Aura2.png"

const App = () => {

  const projectData = [
  {
    name: "AURA – Autonomous UAV for Rapid Assistance",
    image: Aura1,
    description:
      "AURA is an AI-powered unmanned aerial vehicle designed for rapid emergency response and real-time surveillance. Built with advanced navigation, obstacle avoidance, and autonomous decision-making capabilities.",
    liveTesting: (
     <img src={Aura2} alt="" />
    ),
    details: (
      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
        <li>Developed using ROS and Python for autonomous control</li>
        <li>Equipped with LiDAR and GPS for accurate localization</li>
        <li>Use-case: Disaster zones, search & rescue, delivery</li>
        <li>Modular hardware design for rapid deployment</li>
      </ul>
    ),
  }
];


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
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/skills" element={<SkillsPage/>} />
        <Route path="/achievements" element={<Achivements/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/AURA" element={<ShowProject  name={projectData[0].name}
      image={projectData[0].image}
      description={projectData[0].description}
      liveTesting={projectData[0].liveTesting}
      details={projectData[0].details}/>} />

      </Route>

    
      </Routes> }
      
    </div>

    // <Lodar/>


  );
};

export default App;
