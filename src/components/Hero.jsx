import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="home" className="section flex min-h-[80vh] flex-col justify-center gap-6 pt-12">
      <p className="text-sm font-medium text-accent">{t('hero.greeting')}</p>
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-semibold text-slate-300 sm:text-2xl">
          {profile.role[lang]}
        </p>
      </div>
      <p className="max-w-2xl text-lg text-slate-400">{profile.tagline[lang]}</p>
      <div className="flex flex-wrap gap-3">
        <a href="#portfolio" className="btn-primary">
          {t('hero.viewPortfolio')}
        </a>
        <a href="#contact" className="btn-outline">
          {t('hero.contact')}
        </a>
      </div>
    </section>
  )
}
