'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const defaultForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
  interest: 'Supply',
};

const KAF_EMAIL = 'kafgroups21@gmail.com';

export default function ContactForm() {
  const [formData, setFormData] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Example client-side hook for focus or analytics.
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Create email body with form data
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested in: ${formData.interest}

Message:
${formData.message}

---
This inquiry was sent from KAF Groups website inquiry form.`;

    const subject = `New Inquiry from ${formData.name} - ${formData.interest}`;

    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:${KAF_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitted(true);
    setFormData(defaultForm);

    // Clear success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="contact-panel" onSubmit={handleSubmit}>
      <h3>Connect with our supply team</h3>
      <p>Fill the form below and send directly from your email client.</p>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
      </div>

      <div className="form-group">
        <label htmlFor="interest">Interested in</label>
        <select id="interest" name="interest" value={formData.interest} onChange={handleChange}>
          <option value="Supply">Supply</option>
          <option value="Export">Export</option>
          <option value="Vendor">Vendor Partnership</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Share your order size or export inquiry" required />
      </div>

      <button type="submit" className="button button-primary">
        Send inquiry via Email
      </button>

      {submitted && <p className="form-success">Opening your email client with pre-filled details...</p>}
    </form>
  );
}
