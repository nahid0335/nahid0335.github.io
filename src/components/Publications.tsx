import React from 'react'
import { Award, BookOpen, ExternalLink, GraduationCap, Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const LANG_CODES = ['EN', 'JP', 'BN', 'HI']

const CircleProgressBar: React.FC<{ percent: number; id: string }> = ({ percent, id }) => {
  const fillWidth = (176 * Math.max(0, Math.min(100, percent))) / 100
  const clipId = `clip-${id.replace(/[^a-zA-Z0-9]/g, '')}`
  const gradId = `grad-${id.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg viewBox="0 0 176 22" className="h-5 w-40" aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={fillWidth} height="22" />
        </clipPath>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <g className="fill-slate-200/90 dark:fill-slate-700/80">
        <rect x="12" y="8.5" width="152" height="5" rx="2.5" />
        <circle cx="12" cy="11" r="7.5" />
        <circle cx="50" cy="11" r="7.5" />
        <circle cx="88" cy="11" r="7.5" />
        <circle cx="126" cy="11" r="7.5" />
        <circle cx="164" cy="11" r="7.5" />
      </g>
      <g clipPath={`url(#${clipId})`} fill={`url(#${gradId})`}>
        <rect x="12" y="8.5" width="152" height="5" rx="2.5" />
        <circle cx="12" cy="11" r="7.5" />
        <circle cx="50" cy="11" r="7.5" />
        <circle cx="88" cy="11" r="7.5" />
        <circle cx="126" cy="11" r="7.5" />
        <circle cx="164" cy="11" r="7.5" />
      </g>
    </svg>
  )
}

export const Publications: React.FC = () => {
  const { t } = useLanguage()

  return (
    <>
      {/* 04. Education & Research (Timelines) */}
      <section id="edu-research" className="reveal-section scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            <span className="mr-2 font-mono text-lg text-teal-600 dark:text-teal-300">04.</span>
            {t.eduResearch.title}
          </h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              <GraduationCap className="h-4 w-4 text-teal-600 dark:text-teal-300" />
              {t.eduResearch.educationTitle}
            </h3>
            <div className="relative space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
              {t.eduResearch.education.map((edu) => (
                <div key={edu.degree} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-teal-600 bg-slate-50 dark:border-teal-300 dark:bg-[#0a192f]" />
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#112240]">
                    <span className="font-mono text-xs font-medium text-teal-600 dark:text-teal-300">{edu.period}</span>
                    <h4 className="mt-1 font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                    <div className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{edu.school}</div>
                    <div className="mt-2 inline-block rounded bg-teal-50 px-2 py-0.5 font-mono text-xs font-semibold text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">{edu.grade}</div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                <BookOpen className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                {t.eduResearch.researchTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                <a href="https://scholar.google.com/citations?user=SswRyfEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-teal-500/40 bg-teal-50/70 px-2.5 py-1 font-mono text-[11px] font-medium text-teal-700 transition hover:bg-teal-600 hover:text-white dark:border-teal-300/40 dark:bg-teal-950/50 dark:text-teal-300">
                  {t.eduResearch.scholarLabel}<ExternalLink className="h-3 w-3" />
                </a>
                <a href="https://www.kaggle.com/tamzidhasan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  {t.eduResearch.kaggleLabel}<ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="relative space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
              {t.eduResearch.research.map((res) => (
                <div key={res.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-teal-600 bg-slate-50 dark:border-teal-300 dark:bg-[#0a192f]" />
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#112240]">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-xs font-medium text-teal-600 dark:text-teal-300">{res.period} · {res.type}</span>
                      {res.url && (
                        <a href={res.url} target="_blank" rel="noopener noreferrer" aria-label={res.title} className="shrink-0 text-slate-400 transition hover:text-teal-600 dark:hover:text-teal-300">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <h4 className="mt-1 font-bold text-slate-900 dark:text-slate-100">
                      {res.url ? <a href={res.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-teal-300">{res.title}</a> : res.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{res.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. Certifications & Training Timeline FIRST, then Languages AFTER */}
      <section id="certifications" className="reveal-section scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            <span className="mr-2 font-mono text-lg text-teal-600 dark:text-teal-300">05.</span>
            {t.certifications.title}
          </h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="relative mb-12 space-y-4 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
          {t.certifications.items.map((cert) => (
            <div key={cert.title} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-teal-600 bg-slate-50 dark:border-teal-300 dark:bg-[#0a192f]" />
              <div className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#112240] sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300" />
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{cert.title}</h3>
                  </div>
                  <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{cert.org} — {cert.detail}</div>
                </div>
                <span className="shrink-0 font-mono text-xs font-medium text-teal-700 dark:text-teal-300">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Languages AFTER Certifications with 5-Circle Progress Bar */}
        <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
          <Languages className="h-4 w-4 text-teal-600 dark:text-teal-300" />
          {t.certifications.languagesTitle}
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[1.1fr_1.3fr_0.8fr_0.8fr]">
          {t.certifications.languages.map((langItem, idx) => (
            <div
              key={langItem.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 dark:border-slate-800 dark:bg-[#112240]/90 dark:hover:border-teal-300/40"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/15 font-mono text-xs font-bold text-teal-700 ring-1 ring-teal-500/25 dark:text-teal-300 dark:ring-teal-400/25">
                    {LANG_CODES[idx % LANG_CODES.length]}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-slate-900 dark:text-slate-100">
                      {langItem.name}
                    </div>
                    <div className="font-mono text-[11px] font-medium leading-snug text-teal-600 dark:text-teal-300">
                      {langItem.level}
                    </div>
                  </div>
                </div>
                <div className="mt-3.5">
                  <CircleProgressBar percent={langItem.percent} id={langItem.name} />
                </div>
              </div>
              <p className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] leading-relaxed text-slate-600 dark:border-slate-800/80 dark:text-slate-400">
                {langItem.note}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
