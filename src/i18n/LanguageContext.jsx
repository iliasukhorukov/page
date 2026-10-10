import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'ru'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  const browser = window.navigator.language?.slice(0, 2)
  return browser === 'ru' ? 'ru' : 'ru'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const t = (path) =>
      path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), translations[lang]) ?? path

    return {
      lang,
      t,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru')),
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
