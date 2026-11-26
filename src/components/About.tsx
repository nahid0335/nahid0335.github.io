import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="reveal-section scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="mr-2 font-mono text-lg text-teal-600 dark:text-teal-300">01.</span>
          {t.about.title}
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:col-span-6">
          {t.about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="space-y-5 lg:col-span-6">
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            {t.about.skillsTitle}
          </h3>
          {t.about.skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#112240]"
            >
              <div className="mb-2.5 text-xs font-semibold text-teal-700 dark:text-teal-300">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800/90 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
