"use client";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">JM</span>
          <span className="brand-name">Jhelyn Medina<span></span></span>
        </a>
        <p>Designed with intention. Built while learning.</p>
        <a href="#home" className="back-to-top">
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {currentYear} Jhelyn P. Medina. All rights reserved.</span>
        <span>MADE WITH CURIOSITY &amp; CARE</span>
      </div>
    </footer>
  );
}