import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-of-use', label: 'Terms of Use' },
  { to: '/data-deletion', label: 'Data Deletion' },
] as const;

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Touch Grass
        </NavLink>
        <ul className="navbar__links">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
