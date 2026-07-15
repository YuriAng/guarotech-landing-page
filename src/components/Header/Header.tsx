import { useState } from 'react';
import logoUrl from '../../assets/Logo.png';

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  homeHref?: string;
  navLinks?: NavLink[];
}

const defaultNavLinks: NavLink[] = [
  { label: 'Proceso de Desarrollo', href: '#proceso' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Cotizar', href: '#contacto' },
];

export function Header({
  logoSrc = logoUrl,
  logoAlt = 'Guarotech Future Logo',
  homeHref = '#',
  navLinks = defaultNavLinks,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header-nav">
      <a href={homeHref} className="logo">
        <img src={logoSrc} width={200} alt={logoAlt} />
      </a>
      <button
        className={`menu-toggle${isOpen ? ' open' : ''}`}
        aria-label="Abrir menú"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links${isOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
