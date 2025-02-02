import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import enTranslation from "./locale/en.json"
import arTranslation from "./locale/ar.json"
import CounterProvider from './context/CounterContext.jsx';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: "en",
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>,
)
