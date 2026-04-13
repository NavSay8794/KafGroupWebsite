'use client';

import { useState } from 'react';
import Link from 'next/link';

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

        <div className="header-contact" aria-label="Contact information">
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:info@kafgroups.com">info@kafgroups.com</a>
          </div>
        </div>

        <Link href="#contact" className="button button-primary nav-cta" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
