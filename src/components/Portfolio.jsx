import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function Portfolio() {
  const { t, lang } = useLang()

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">{t('portfolio.title')}</h2>
      <p className="mt-2 text-slate-400">{t('portfolio.subtitle')}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <article key={project.title.en} className="card flex flex-col">
            <div className="mb-4 flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-slate-600">
              <span className="text-3xl font-bold">{project.title[lang].charAt(0)}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{project.title[lang]}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description[lang]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              <a href={project.demo} className="text-accent hover:underline">
                {t('portfolio.demo')} &rarr;
              </a>
              <a href={project.repo} className="text-slate-400 hover:text-accent">
                {t('portfolio.repo')}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
