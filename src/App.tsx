import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { Contact } from './components/Contact'

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center font-mono text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>{t.footer.builtBy}</p>
        <p className="mt-1">{t.footer.rights}</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
