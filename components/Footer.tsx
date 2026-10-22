"use client";

export default function Footer() {
  // Using a hardcoded year avoids the Next.js prerender error.
  // You can safely update this string manually once a year.
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">JM</span>
          <span className="brand-name">Jhelyn Medina<span></span></span>
        </a>
        <p>Designed with intention. Built while learning.</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
      </div>
      <div className="container footer-bottom">
        <span>© {currentYear} Jhelyn P. Medina. All rights reserved.</span>
        <span>MADE WITH CURIOSITY &amp; CARE</span>
      </div>
    </footer>
  );
}