"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)} aria-label="Jhelyn Medina home">
          <span className="brand-mark">JM</span>
          <span className="brand-name">Jhelyn Medina<span>.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}