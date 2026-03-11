import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/terms-of-use', label: 'Terms' },
] as const;

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const current = document.documentElement.dataset.theme;
    return current === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('tg-theme', theme);
  }, [theme]);

  const themeLabel = useMemo(
    () => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'),
    [theme]
  );

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <Link to="/" className="navBrand" aria-label="Touch Grass home">
          <span className="navBrand__mark" aria-hidden="true">
            TG
          </span>
          <span className="navBrand__text">Touch Grass</span>
        </Link>

        <ul className="navLinks" aria-label="Primary">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              {href.startsWith('/') ? (
                <Link className="navLink" to={href}>
                  {label}
                </Link>
              ) : (
                <a className="navLink" href={isHome ? href : `/${href}`}>
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="navActions" aria-label="Actions">
          <button
            type="button"
            className="navIconButton"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀︎' : '☾'}</span>
          </button>
          <a className="navLogin" href="#" aria-label="Download Touch Grass (dummy link)">
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
