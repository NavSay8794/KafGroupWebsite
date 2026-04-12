import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-copy">
            KAF Groups • Premium fresh produce, quality packaging & reliable distribution worldwide.
          </p>
          <p className="footer-copy">123 Marine Drive, Mumbai, Maharashtra • +91 99227 86578 • kafgroups21@gmail.com</p>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://wa.me/919922786578" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
