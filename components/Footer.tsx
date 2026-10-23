"use client";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">JM</span>
          <span className="brand-name">
            Jhelyn Medina<span></span>
          </span>
        </a>
        
        {/* Icon Only Back to Top Button */}
        <a href="#home" className="back-to-top-icon" aria-label="Back to top" title="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© {currentYear} Jhelyn P. Medina. All rights reserved.</span>
        
        <div className="footer-socials">
          <a href="https://www.facebook.com/jhelyn.medinaa" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/_lalay.ishh/" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://t.me/Jhelyn_Medina" target="_blank" rel="noreferrer" aria-label="Telegram" className="footer-social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}