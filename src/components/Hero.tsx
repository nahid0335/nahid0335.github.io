import React, { useRef, useState, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Mail, MapPin, ShieldCheck, FileDown, ChevronDown, GraduationCap, Database, Briefcase, Clock, Award, Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getJapanExperienceText } from '../utils/experience'

const STAT_ICONS = [Briefcase, Clock, Award, Languages]

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage()
  const autoExp = getJapanExperienceText(lang)
  const [cvOpen, setCvOpen] = useState(false)
  const cvRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="font-mono text-sm font-medium text-teal-600 dark:text-teal-300">{t.hero.greeting}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">{t.hero.name}</h1>
          <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-2xl">{t.hero.tagline}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{t.hero.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900/60">
              <MapPin className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300" />{t.hero.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900/60">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300" />{t.hero.visa}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300">
              {t.hero.ctaPrimary}<ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-300 dark:hover:text-teal-300">
              {t.hero.ctaContact}
            </a>

            <div className="relative" ref={cvRef}>
              <button type="button" onClick={() => setCvOpen((o) => !o)} className="inline-flex items-center gap-2 rounded-lg border border-teal-600/60 bg-teal-50/70 px-4 py-2.5 text-sm font-semibold text-teal-800 transition hover:bg-teal-600 hover:text-white dark:border-teal-300/50 dark:bg-teal-950/50 dark:text-teal-300 dark:hover:bg-teal-400 dark:hover:text-slate-950">
                <FileDown className="h-4 w-4" />{t.nav.resume}<ChevronDown className="h-4 w-4" />
              </button>
              {cvOpen && (
                <div className="absolute left-0 z-20 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-700 dark:bg-[#112240]">
                  {t.nav.cvOptions.map((opt) => (
                    <a key={opt.href} href={opt.href} download target="_blank" rel="noopener noreferrer" onClick={() => setCvOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-teal-300">
                      <FileDown className="h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300" /><span>{opt.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/nahid0335" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/tamzid-hasan-nahid-687ba21a0/en/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Linkedin className="h-5 w-5" /></a>
            <a href="https://scholar.google.com/citations?user=SswRyfEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar" className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><GraduationCap className="h-5 w-5" /></a>
            <a href="https://www.kaggle.com/tamzidhasan" target="_blank" rel="noopener noreferrer" aria-label="Kaggle" title="Kaggle" className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Database className="h-5 w-5" /></a>
            <a href="mailto:tamzid1607005@gmail.com" aria-label="Email" title="Email" className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-4 lg:justify-end">
          <div className="group relative w-56 sm:w-64">
            <div className="absolute -inset-1.5 rounded-2xl border-2 border-teal-500/40 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 dark:border-teal-300/40" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-900/10 shadow-xl dark:ring-white/15">
              <img src="/images/profile.jpg" alt="Tamzid Hasan Nahid" className="aspect-[3/4] w-full object-cover object-top brightness-[0.98] contrast-[1.02]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_24px_rgba(10,25,47,0.22)] dark:shadow-[inset_0_0_28px_rgba(10,25,47,0.45)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.map((stat, idx) => {
          const Icon = STAT_ICONS[idx % STAT_ICONS.length]
          return (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#112240]">
              <div className="mb-2.5 inline-flex rounded-lg bg-teal-50 p-2 text-teal-600 dark:bg-teal-950/60 dark:text-teal-300">
                <Icon className="h-4 w-4" />
              </div>
              <div className="text-sm font-bold text-teal-700 dark:text-teal-300 sm:text-base">
                {stat.value === '{{AUTO_EXP}}' ? autoExp : stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
