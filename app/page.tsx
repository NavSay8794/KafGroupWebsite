import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import ProductCarousel from '../components/ProductCarousel';

const services = [
  {
    icon: '🥬',
    title: 'Fresh produce supply',
    description: 'Daily delivery of premium fruits and vegetables for hotels, restaurants, supermarkets and caterers.',
  },
  {
    icon: '📦',
    title: 'Custom packaging',
    description: 'Retail, hospitality, and export-ready packaging designed for freshness and shelf impact.',
  },
  {
    icon: '❄️',
    title: 'Cold-chain logistics',
    description: 'Temperature-controlled transport and on-time delivery from farm to vendor or distribution hub.',
  },
];

const testimonials = [
  {
    quote: 'KAF Groups keeps our kitchen stocked with crisp produce and on-schedule deliveries every week.',
    author: 'Rahul S., Executive Chef',
    role: 'Luxury Hotel Partner',
  },
  {
    quote: 'Their export packaging gave us confidence for global distribution and quality inspection.',
    author: 'Anika M., Export Buyer',
    role: 'International Retailer',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="card-flag">Premium produce supply & global distribution</p>
            <h1>Fresh fruits and vegetables, packaged for vendors and global markets.</h1>
            <p>
              KAF Groups delivers premium fresh produce and export-ready packaging with cold-chain logistics for hotels,
              restaurants, supermarkets and international distributors.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Get a Quote
              </Link>
              <Link href="/services" className="button button-secondary">
                Explore Products & Services
              </Link>
            </div>
            <div className="hero-features">
              <div className="feature-pill">Fresh fruits & vegetables, daily supply</div>
              <div className="feature-pill">Export-ready packaging & cold-chain logistics</div>
            </div>
          </div>

          <ProductCarousel />
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-inner">
          <div>
            <h2>Why KAF Groups?</h2>
            <p>
              We are a Mumbai-based supplier dedicated to connecting fresh growers with hospitality businesses and
              retailers. Our expertise is in consistent quality, accurate packing, and logistics that protect every shipment.
            </p>
            <p>
              Vendors count on us for dependable fruits and vegetables, reliable order fulfillment, and packaging designed
              for freshness and food-safety compliance.
            </p>
          </div>
          <div className="section-cards">
            <div className="info-card">
              <h3>Who we serve</h3>
              <p>Hotels, restaurants, supermarkets, caterers and global distributors who need dependable produce supply.</p>
            </div>
            <div className="info-card">
              <h3>How we support you</h3>
              <p>Custom scheduling, product sourcing, and verified cold-chain logistics for timely arrivals.</p>
            </div>
            <div className="info-card">
              <h3>Why we stand out</h3>
              <p>KAF Groups blends fresh sourcing, food-safe packaging, and actionable vendor support every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-inner">
          <div>
            <h2>Services for supply and packaging</h2>
            <p>Our service portfolio is built for businesses that need fresh produce and premium packaging solutions.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section id="export" className="section">
        <div className="section-inner">
          <div>
            <h2>Export-ready produce and global logistics</h2>
            <p>
              We support international distributors with phytosanitary-ready packaging, cold-chain handling, and outbound
              shipment coordination.
            </p>
            <div className="section-cards">
              <div className="info-card">
                <h3>Markets served</h3>
                <p>India, UAE, Europe, Middle East and other export destinations with reliable distribution partners.</p>
              </div>
              <div className="info-card">
                <h3>Compliance & quality</h3>
                <p>International-grade cold-chain, food-safe packing, and documentation support for smooth customs clearance.</p>
              </div>
              <div className="info-card">
                <h3>Exporter access</h3>
                <p>Connect with our export team to plan volumes, packaging, documentation, and international delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vendors" className="section">
        <div className="section-inner">
          <div>
            <h2>Partnerships for vendors</h2>
            <p>Flexible programs for hotels, supermarkets, caterers and event teams who rely on consistent fresh inventory.</p>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                🏨
              </div>
              <h3>Hotels & restaurants</h3>
              <p>Volume planning, chef-grade produce, and same-day dispatch for busy kitchens.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                🛒
              </div>
              <h3>Supermarkets & grocery chains</h3>
              <p>Retail-ready packaging, attractive presentations, and regular replenishment schedules.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                🎉
              </div>
              <h3>Caterers & event organizers</h3>
              <p>Reliable order fulfillment for events, banquets, and large-scale catering requirements.</p>
            </div>
          </div>
          <div className="section-cta">
            <Link href="/contact" className="button button-primary">
              Register as a Vendor
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div>
            <h2>Trusted by businesses that value freshness</h2>
            <p>Quality, punctuality and support are the foundation of our vendor and export relationships.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.author} className="testimonial-card">
                <p>“{item.quote}”</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{item.author.split(' ')[0].charAt(0)}</div>
                  <div>
                    <strong>{item.author}</strong>
                    <p>{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-inner contact-layout">
          <div className="contact-panel">
            <h2>Get in touch</h2>
            <p>
              Ready to start your supply request or export order? Complete the form and our team will contact you with a
              customized proposal.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
