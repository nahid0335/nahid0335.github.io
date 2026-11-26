import React, { createContext, useContext, useEffect, useState } from 'react'
import { LangCode, LocaleData, locales } from '../locales'

interface LanguageContextValue {
  lang: LangCode
  setLang: (lang: LangCode) => void
  t: LocaleData
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<LangCode>(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang') as LangCode | null
      if (saved && saved in locales) return saved
      return navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = locales[lang].meta.title
    try {
      localStorage.setItem('portfolio-lang', lang)
    } catch {
      // ignore storage errors
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: locales[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
