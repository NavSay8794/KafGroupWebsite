import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-copy">
            KAF Groups • Premium fresh produce, quality packaging & reliable distribution worldwide.
          </p>
          <p className="footer-copy">Green Lawns , Bungalow No 21, Sarda Circle, Nashik-Poona Road, Nashik, Maharashtra, 422001 • +91 99227 86578 • kafgroups21@gmail.com</p>
        </div>

        <div className="social-links">
          <a href="https://instagram.com/kafgroups?igsh=MTRkbDFzZWgxdGt1dg==" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://facebook.com/share/1JPj48vWSS" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
