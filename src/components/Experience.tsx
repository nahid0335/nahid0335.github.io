import React, { useState } from 'react'
import { Briefcase, ExternalLink, MapPin, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export const Experience: React.FC = () => {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState(t.experience.items[0].id)
  const activeJob = t.experience.items.find((item) => item.id === activeId) ?? t.experience.items[0]

  return (
    <section id="experience" className="reveal-section scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="font-mono text-lg text-teal-600 dark:text-teal-300">02.</span>
          <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-300" />
          {t.experience.title}
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="relative flex gap-2 overflow-x-auto border-b border-slate-200 pb-2 dark:border-slate-800 md:col-span-4 md:flex-col md:gap-0 md:overflow-visible md:border-b-0 md:border-l-2 md:pb-0 md:pl-6 md:space-y-3">
          {t.experience.items.map((job) => {
            const isActive = job.id === activeJob.id
            return (
              <button
                key={job.id}
                type="button"
                onClick={() => setActiveId(job.id)}
                className={`relative whitespace-nowrap rounded-lg px-4 py-3 text-left font-mono text-sm transition ${
                  isActive
                    ? 'bg-teal-50/70 font-semibold text-teal-700 dark:bg-[#112240] dark:text-teal-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/40'
                }`}
              >
                <span
                  className={`hidden md:block absolute -left-[31px] top-4 h-3 w-3 rounded-full border-2 transition ${
                    isActive
                      ? 'border-teal-600 bg-teal-500 dark:border-teal-300 dark:bg-teal-300'
                      : 'border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-[#0a192f]'
                  }`}
                />
                <div>{job.company}</div>
                <div className="mt-0.5 text-[11px] opacity-75">{job.period}</div>
              </button>
            )
          })}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#112240] md:col-span-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{activeJob.role}</h3>
          <div className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-300">{activeJob.fullCompany}</div>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
            <span>{activeJob.period}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{activeJob.location}</span>
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <Users className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300" />{activeJob.teamSize}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{activeJob.overview}</p>

          {activeJob.modelLinks && activeJob.modelLinks.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {activeJob.modelLinks.map((m) => (
                <a key={m.label} href={m.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-teal-500/40 bg-teal-50/70 px-2.5 py-1 font-mono text-xs font-medium text-teal-700 transition hover:bg-teal-600 hover:text-white dark:border-teal-300/40 dark:bg-teal-950/50 dark:text-teal-300 dark:hover:bg-teal-400 dark:hover:text-slate-950">
                  {m.label}<ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}

          <div className="mt-3 flex items-start gap-2 rounded-lg bg-teal-50 p-3 text-sm font-medium text-teal-900 dark:bg-teal-950/50 dark:text-teal-200">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300" />
            <span>{activeJob.impact}</span>
          </div>

          <div className="mt-4">
            <div className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.experience.phasesLabel}</div>
            <div className="flex flex-wrap gap-1.5">
              {activeJob.phases.map((ph) => (
                <span key={ph} className="rounded-full border border-teal-600/30 bg-teal-50/50 px-2.5 py-0.5 text-[11px] font-medium text-teal-800 dark:border-teal-300/30 dark:bg-teal-950/40 dark:text-teal-200">{ph}</span>
              ))}
            </div>
          </div>

          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {activeJob.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-300" /><span>{b}</span></li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeJob.tech.map((tech) => (
              <span key={tech} className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
