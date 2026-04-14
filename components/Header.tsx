'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={menuOpen ? 'site-header nav-open' : 'site-header'}>
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <div className="brand-logo">
            <Image
              src="/images/logo.jpeg"
              alt="KAF Groups Logo"
              width={40}
              height={40}
              className="logo-image"
            />
          </div>
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
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>

        <div className="header-contact" aria-label="Contact information">
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:info@kafgroups.com">info@kafgroups.com</a>
          </div>
        </div>
      </div>

      <div className="mobile-nav" aria-hidden={!menuOpen}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <div className="mobile-contact">
          <a href="tel:+919876543210">+91 98765 43210</a>
          <a href="mailto:info@kafgroups.com">info@kafgroups.com</a>
        </div>
      </div>
    </header>
  );
}
