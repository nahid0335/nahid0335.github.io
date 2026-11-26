import React, { useState } from 'react'
import { Cloud, Cpu, ExternalLink, Eye, FolderGit2, Github, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const DOMAIN_ICONS: Record<string, React.FC<{ className?: string }>> = {
  eye: Eye,
  video: Video,
  cpu: Cpu,
  cloud: Cloud,
}

export const Projects: React.FC = () => {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<string>('all')

  const visibleFeatured =
    filter === 'all'
      ? t.projects.featured
      : filter === 'university'
        ? []
        : t.projects.featured.filter((p) => p.category === filter)

  const visibleOther =
    filter === 'all'
      ? t.projects.other
      : filter === 'university'
        ? t.projects.other
        : t.projects.other.filter((o) => o.category === filter)

  return (
    <section id="projects" className="reveal-section scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-3 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="mr-2 font-mono text-lg text-teal-600 dark:text-teal-300">03.</span>
          {t.projects.title}
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">{t.projects.subtitle}</p>
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900/70">
          {t.projects.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                filter === f.id
                  ? 'bg-teal-600 text-white shadow-sm dark:bg-teal-400 dark:text-slate-950'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {visibleFeatured.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {visibleFeatured.map((proj) => {
            const Icon = DOMAIN_ICONS[proj.icon] || Eye
            return (
              <article
                key={proj.title}
                className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-500/50 dark:border-slate-800 dark:bg-[#112240] dark:hover:border-teal-300/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="font-mono text-xs text-teal-600 dark:text-teal-300">
                          {proj.context}
                        </span>
                        <h3 className="mt-0.5 text-lg font-bold text-slate-900 dark:text-slate-100">
                          {proj.title}
                        </h3>
                      </div>
                    </div>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={proj.title}
                        className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-teal-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-teal-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <div className="mt-3 inline-block rounded-md bg-teal-50 px-2.5 py-0.5 font-mono text-xs font-medium text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">
                    {proj.impact}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {proj.description}
                  </p>

                  {proj.modelLinks && proj.modelLinks.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {proj.modelLinks.map((m) => (
                        <a
                          key={m.label}
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-teal-500/40 bg-teal-50/70 px-2 py-0.5 font-mono text-[11px] font-medium text-teal-700 transition hover:bg-teal-600 hover:text-white dark:border-teal-300/40 dark:bg-teal-950/50 dark:text-teal-300"
                        >
                          {m.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {t.projects.phasesLabel}
                    </span>
                    {proj.phases.map((ph) => (
                      <span
                        key={ph}
                        className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600 dark:border-slate-700 dark:text-slate-300"
                      >
                        {ph}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      )}

      {visibleOther.length > 0 && (
        <>
          <h3 className="mb-4 mt-10 font-mono text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            {t.projects.otherTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleOther.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-teal-500/60 dark:border-slate-800 dark:bg-[#112240] dark:hover:border-teal-300/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-teal-600 dark:text-teal-300">
                      <FolderGit2 className="h-4 w-4 shrink-0" />
                      <h4 className="font-semibold text-slate-900 transition group-hover:text-teal-600 dark:text-slate-100 dark:group-hover:text-teal-300">
                        {item.title}
                      </h4>
                    </div>
                    <Github className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-teal-600 dark:group-hover:text-teal-300" />
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {item.period}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
