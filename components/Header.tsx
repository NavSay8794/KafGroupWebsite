'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Products & Services' },
  { href: '/vendors', label: 'Vendors' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={menuOpen ? 'site-header nav-open' : 'site-header'}>
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            🥗
          </span>
          KAF Groups
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="button button-primary nav-cta" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </Link>
      </div>

      <div className="mobile-nav" aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* TODO: add active link highlighting using usePathname() for current route */}
    </header>
  );
}
