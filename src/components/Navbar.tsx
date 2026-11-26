import React, { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X, Globe } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { availableLanguages } from '../locales'

const SECTION_IDS = ['about', 'experience', 'projects', 'edu-research', 'certifications', 'contact']

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    let ticking = false
    const updateActive = () => {
      ticking = false
      if (window.scrollY < 100) { setActiveSection(''); return }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        setActiveSection('contact'); return
      }
      const scrollPos = window.scrollY + 120
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }
      setActiveSection(current)
    }
    const onScroll = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateActive) }
    }
    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'about', href: '#about', num: '01.', label: t.nav.about },
    { id: 'experience', href: '#experience', num: '02.', label: t.nav.experience },
    { id: 'projects', href: '#projects', num: '03.', label: t.nav.projects },
    { id: 'edu-research', href: '#edu-research', num: '04.', label: t.nav.eduResearch },
    { id: 'certifications', href: '#certifications', num: '05.', label: t.nav.certifications },
    { id: 'contact', href: '#contact', num: '06.', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0a192f]/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top" className="font-mono text-base font-bold tracking-tight text-slate-900 transition hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-300">
          <span className="text-teal-600 dark:text-teal-300">&lt;</span>{t.nav.brand}<span className="text-teal-600 dark:text-teal-300">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a key={item.href} href={item.href} className={`relative py-1 text-xs font-medium transition xl:text-sm ${isActive ? 'font-semibold text-teal-600 dark:text-teal-300' : 'text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300'}`}>
                <span className="mr-1 font-mono text-[11px] text-teal-600 dark:text-teal-300">{item.num}</span>
                {item.label}
                {isActive && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-teal-600 dark:bg-teal-300" />}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
            <span className="inline-flex items-center justify-center px-1.5 text-slate-400"><Globe className="h-3.5 w-3.5" /></span>
            {availableLanguages.map((l) => (
              <button key={l.code} type="button" onClick={() => setLang(l.code)} className={`rounded-md px-2 py-1 text-xs font-medium transition ${lang === l.code ? 'bg-teal-600 text-white dark:bg-teal-400 dark:text-slate-950' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>
                {l.label}
              </button>
            ))}
          </div>

          <button type="button" onClick={toggleTheme} aria-label="Toggle Light/Dark Theme" className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-300">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button type="button" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle Menu" className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 lg:hidden">
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-[#0d213f] lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`text-sm font-medium ${activeSection === item.id ? 'font-semibold text-teal-600 dark:text-teal-300' : 'text-slate-700 dark:text-slate-200'}`}>
                <span className="mr-2 font-mono text-xs text-teal-600 dark:text-teal-300">{item.num}</span>{item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
