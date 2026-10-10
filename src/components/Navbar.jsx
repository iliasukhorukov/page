import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'

const links = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#portfolio', key: 'nav.portfolio' },
]

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-bold tracking-tight text-white">
          &lt;dev /&gt;
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-accent"
            >
              {t(link.key)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold uppercase text-slate-300 transition-colors hover:border-accent hover:text-accent"
            aria-label="Switch language"
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-300 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800 sm:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-slate-300 hover:text-accent"
              >
                {t(link.key)}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang()
                setOpen(false)
              }}
              className="mt-2 self-start rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold uppercase text-slate-300"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
