import React, { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Copy, FileDown, Github, GraduationCap, Database, Linkedin, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [cvOpen, setCvOpen] = useState(false)
  const cvRef = useRef<HTMLDivElement>(null)
  const email = 'tamzid1607005@gmail.com'
  const phoneDisplay = '+81 80-4485-5867'

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      // fallback
    }
  }

  const handlePhoneAction = async () => {
    const isMobileDialerCapable =
      typeof navigator !== 'undefined' &&
      navigator.maxTouchPoints > 0 &&
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    if (isMobileDialerCapable) {
      window.location.href = 'tel:+818044855867'
      return
    }
    try {
      await navigator.clipboard.writeText(phoneDisplay)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = phoneDisplay
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setToastMsg(t.contact.phoneCopiedToast)
    setTimeout(() => setToastMsg(''), 2800)
  }

  return (
    <section id="contact" className="reveal-section scroll-mt-20 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="font-mono text-sm text-teal-600 dark:text-teal-300">06. {t.contact.title}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {t.contact.subtitle}
      </h2>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-400">{t.contact.description}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
        >
          <Mail className="h-4 w-4" />
          {t.contact.sendEmail}
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs font-medium text-slate-700 transition hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          {copiedEmail ? <Check className="h-4 w-4 text-teal-500" /> : <Copy className="h-4 w-4" />}
          {copiedEmail ? t.contact.copied : `${t.contact.copyEmail} (${email})`}
        </button>

        <button
          type="button"
          onClick={handlePhoneAction}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-300 dark:hover:text-teal-300"
        >
          <Phone className="h-4 w-4 text-teal-600 dark:text-teal-300" />
          {t.contact.callPhone}
        </button>

        <div className="relative" ref={cvRef}>
          <button
            type="button"
            onClick={() => setCvOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-lg border border-teal-600/60 bg-teal-50/70 px-4 py-2.5 text-sm font-semibold text-teal-800 transition hover:bg-teal-600 hover:text-white dark:border-teal-300/50 dark:bg-teal-950/50 dark:text-teal-300 dark:hover:bg-teal-400 dark:hover:text-slate-950"
          >
            <FileDown className="h-4 w-4" />
            {t.nav.resume}
            <ChevronDown className="h-4 w-4" />
          </button>
          {cvOpen && (
            <div className="absolute left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg dark:border-slate-700 dark:bg-[#112240]">
              {t.nav.cvOptions.map((opt) => (
                <a
                  key={opt.href}
                  href={opt.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCvOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-teal-300"
                >
                  <FileDown className="h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300" />
                  <span>{opt.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-5">
        <a href="https://github.com/nahid0335" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Github className="h-4 w-4" /> GitHub</a>
        <a href="https://www.linkedin.com/in/tamzid-hasan-nahid-687ba21a0/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        <a href="https://scholar.google.com/citations?user=SswRyfEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><GraduationCap className="h-4 w-4" /> Google Scholar</a>
        <a href="https://www.kaggle.com/tamzidhasan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"><Database className="h-4 w-4" /> Kaggle</a>
      </div>

      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-teal-400/50 bg-slate-900/95 px-4 py-3 text-xs font-semibold text-teal-300 shadow-2xl backdrop-blur-md">
          <Check className="h-4 w-4 shrink-0 text-teal-400" />
          <span>{toastMsg}</span>
        </div>
      )}
    </section>
  )
}
