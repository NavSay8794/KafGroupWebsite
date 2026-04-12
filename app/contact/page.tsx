import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Get in Touch</h1>
            <p>Ready to discuss your produce supply, export, or vendor needs? Reach out to our team today.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner contact-layout">
          <div className="contact-panel">
            <h2>Contact Information</h2>
            <p>Get in touch with our team for supply requests, export inquiries, or vendor partnerships.</p>
            <div style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
              <p>
                <strong>Phone:</strong> +91 99227 86578
              </p>
              <p>
                <strong>Email:</strong> kafgroups21@gmail.com
              </p>
              <p>
                <strong>Address:</strong> 123 Marine Drive, Mumbai, Maharashtra 400001
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
