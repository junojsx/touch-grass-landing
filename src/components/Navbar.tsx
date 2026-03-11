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

        <a className="navLogin" href="#" aria-label="Download Touch Grass (dummy link)">
          Download
        </a>
      </nav>
    </header>
  );
}
