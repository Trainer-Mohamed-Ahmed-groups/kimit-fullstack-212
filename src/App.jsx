import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import SiteNav from './layout/SiteNav'
import { useTranslation } from 'react-i18next'
import UseMemo from './views/UseMemo'
import UseReducer from './views/UseReducer'

function App() {
  const { i18n } = useTranslation();



  return (
    <div className={i18n.language === 'ar' ? 'rtl' : ''}>
      <SiteNav />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/contact" Component={Contact} />
        <Route path="/use_memo" Component={UseMemo} />
        <Route path="/use_reducer" Component={UseReducer} />
      </Routes>
    </div>
  )
}

export default App
