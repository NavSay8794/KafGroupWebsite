'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const defaultForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
  interest: 'Supply',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Example client-side hook for focus or analytics.
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send inquiry');
      }

      setSubmitted(true);
      setFormData(defaultForm);
      console.log('Inquiry sent successfully', formData);

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Error sending inquiry:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-panel" onSubmit={handleSubmit}>
      <h3>Connect with our supply team</h3>
      <p>Send your requirements and we’ll respond within one business day.</p>

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

      <button type="submit" className="button button-primary" disabled={loading}>
        {loading ? 'Sending...' : 'Send inquiry'}
      </button>

      {submitted && <p className="form-success">Thank you! We'll be in touch shortly.</p>}
      {error && <p className="form-error">{error}</p>}
    </form>
  );
}
