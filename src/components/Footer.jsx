import { useLang } from '../i18n/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const { email, github, telegram, linkedin } = profile.contacts

  const socials = [
    { label: 'GitHub', href: github },
    { label: 'Telegram', href: telegram },
    { label: 'LinkedIn', href: linkedin },
  ]

  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="section-title">{t('footer.contactTitle')}</h2>
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-block text-lg font-medium text-accent hover:underline"
        >
          {email}
        </a>

        <div className="mt-6 flex flex-wrap gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs text-slate-600">
          &copy; {year} {profile.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
