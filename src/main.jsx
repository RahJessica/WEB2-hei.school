import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './App.jsx'
import HeroSection from './components/heroSection.jsx'
import AboutSection from './components/aboutSection.jsx'
import TeacherSection from './components/teacherSection.jsx'
import CarrersSection from './components/carrersSection.jsx'
import SpecialitiesSection from './components/specialitiesSection.jsx'
import AdmissionSection from './components/admissionSection.jsx'
import PedagogySection from './components/pedagogySection.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />,
    <HeroSection/>, 
    <AboutSection/>, 
    <TeacherSection/>, 
    <CarrersSection/>,
    <SpecialitiesSection/>,
    <AdmissionSection/>,
    <PedagogySection/>
  </StrictMode>,
)
