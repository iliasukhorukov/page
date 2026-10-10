import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  const { t, lang } = useLang()

  return (
    <section id="about" className="section">
      <h2 className="section-title">{t('about.title')}</h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">{profile.bio[lang]}</p>

      <h3 className="mt-12 text-lg font-semibold text-white">{t('about.skillsTitle')}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span key={skill} className="badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
