import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import SiteNav from './layout/SiteNav'
import { useTranslation } from 'react-i18next'
import { AiFillAudio } from "react-icons/ai";

function App() {
  const { i18n } = useTranslation();



  return (
    <div className={i18n.language === 'ar' ? 'rtl' : ''}>
      <SiteNav />
      <AiFillAudio />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  )
}

export default App
