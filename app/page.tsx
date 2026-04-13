import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: '🌾',
    title: 'Procuring',
    description: 'Source the finest fresh produce directly from verified farmers and growers across regions.',
    step: 1,
  },
  {
    icon: '📦',
    title: 'Packing',
    description: 'Expert packing in food-safe, hygienic containers designed to maintain freshness and quality.',
    step: 2,
  },
  {
    icon: '❄️',
    title: 'Precooling',
    description: 'Initial rapid cooling to remove field heat and prepare produce for optimal temperature retention.',
    step: 3,
  },
  {
    icon: '🌡️',
    title: 'Cooling',
    description: 'Precise temperature-controlled storage facilities maintaining ideal conditions for each product.',
    step: 4,
  },
  {
    icon: '📫',
    title: 'Container Stuffing',
    description: 'Strategic loading and securing of products into export containers with proper ventilation.',
    step: 5,
  },
  {
    icon: '🚛',
    title: 'Shipping & Logistics',
    description: 'End-to-end cold-chain logistics with real-time monitoring from warehouse to final destination.',
    step: 6,
  },
];

const products = [
  {
    id: 1,
    name: 'Banana',
    emoji: '🍌',
    description: 'Fresh, golden bananas sourced daily. Perfect for retail, hotels, and wholesale distribution.',
  },
  {
    id: 2,
    name: 'Green Chillies',
    emoji: '🌶️',
    description: 'Vibrant green chillies with optimal freshness. Essential for kitchens and culinary businesses.',
  },
  {
    id: 3,
    name: 'Pomegranate',
    emoji: '🍇',
    description: 'Premium pomegranates packed with antioxidants. Premium export quality available.',
  },
  {
    id: 4,
    name: 'Onion',
    emoji: '🧅',
    description: 'High-quality onions in bulk quantities. Consistent supply for restaurants and vendors.',
  },
  {
    id: 5,
    name: 'Husk Coconut',
    emoji: '🥥',
    description: 'Fresh husk coconuts for export and domestic markets. Premium packaging available.',
  },
  {
    id: 6,
    name: 'Drumsticks',
    emoji: '🥬',
    description: 'Fresh drumstick leaves and pods. Nutritious and in high demand across markets.',
  },
];

const exportLocations = [
  { name: 'Dubai', icon: '🇦🇪', flag: 'UAE' },
  { name: 'Iran', icon: '🇮🇷', flag: 'Iran' },
  { name: 'Iraq', icon: '🇮🇶', flag: 'Iraq' },
  { name: 'Gulf Region', icon: '🌊', flag: 'GCC' },
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
              <Link href="#contact" className="button button-primary">
                Get a Quote
              </Link>
              <Link href="#products" className="button button-secondary">
                Explore Products & Services
              </Link>
            </div>
            <div className="hero-features">
              <div className="feature-pill">Fresh fruits & vegetables, daily supply</div>
              <div className="feature-pill">Export-ready packaging & cold-chain logistics</div>
            </div>
          </div>

          <div className="hero-cover">
            <div className="cover-placeholder">
              <p>Cover Image</p>
            </div>
          </div>
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
            <h2>Our Complete Supply & Processing Workflow</h2>
            <p>From farm to export, our integrated process ensures premium quality at every stage.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} step={service.step} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="section-inner">
          <div>
            <h2>Our Premium Products</h2>
            <p>KAF Groups offers a carefully curated selection of fresh fruits, vegetables, and specialty products sourced for quality and freshness.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-icon" aria-hidden="true">
                  {product.emoji}
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link href="#contact" className="button button-secondary">
                  Inquire
                </Link>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link href="#contact" className="button button-primary">
              Order now
            </Link>
          </div>
        </div>
      </section>

      <section id="export" className="section">
        <div className="section-inner">
          <div>
            <h2>Export-ready produce and global logistics</h2>
            <p>
              We support international distributors with phytosanitary-ready packaging, cold-chain handling, and outbound
              shipment coordination. Our products reach key markets worldwide.
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

          <div className="export-locations">
            {exportLocations.map((loc) => (
              <div key={loc.name} className="location-card">
                <div className="location-icon" aria-hidden="true">
                  {loc.icon}
                </div>
                <h3>{loc.name}</h3>
                <p className="location-code">{loc.flag}</p>
              </div>
            ))}
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
