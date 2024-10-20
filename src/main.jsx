import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GeneralInformation } from './components/GeneralInformation.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation></GeneralInformation>
    <Education></Education>
    <Experience></Experience>
  </StrictMode>,
)
