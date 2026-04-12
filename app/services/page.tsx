import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';

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

const services = [
  {
    icon: '🥬',
    title: 'Fresh produce supply',
    description: 'Daily delivery of premium fruits and vegetables for hotels, restaurants, supermarkets and caterers.',
  },
  {
    icon: '📦',
    title: 'Packaging',
    description:
      'Custom, food-safe packaging designed for retail display, hospitality use, and international export. Our packaging maintains freshness while enhancing product appeal.',
  },
  {
    icon: '🚚',
    title: 'Shipping & Logistics',
    description:
      'Temperature-controlled transport and on-time delivery from source to destination. Cold-chain integrity ensures maximum freshness upon arrival.',
  },
];

const exportLocations = [
  { name: 'Dubai', icon: '🇦🇪', flag: 'UAE' },
  { name: 'Iran', icon: '🇮🇷', flag: 'Iran' },
  { name: 'Iraq', icon: '🇮🇶', flag: 'Iraq' },
  { name: 'Gulf Region', icon: '🌊', flag: 'GCC' },
];

export default function ProductsAndServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Products & Services</h1>
            <p>Premium fresh produce, comprehensive supply solutions, and global distribution to vendors worldwide.</p>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="section-inner">
          <div>
            <h2>Our products</h2>
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
                <Link href="/contact" className="button button-secondary">
                  Inquire
                </Link>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link href="/contact" className="button button-primary">
              Order now
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-inner">
          <div>
            <h2>Our integrated services</h2>
            <p>From farm to table and beyond borders, KAF Groups delivers end-to-end solutions for produce supply and export.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="packaging">
        <div className="section-inner">
          <div>
            <h2>Packaging solutions</h2>
            <p>
              Our packaging expertise ensures your products maintain freshness and appeal from warehouse to customer. We offer
              customization for retail, hospitality, and export markets.
            </p>
          </div>
          <div className="service-cards">
            <div className="info-card">
              <h3>Retail packaging</h3>
              <p>Eye-catching, consumer-ready packaging that increases shelf appeal and extends shelf life.</p>
            </div>
            <div className="info-card">
              <h3>Hospitality grade</h3>
              <p>Bulk packaging designed for kitchens and food-service operations with easy handling and storage.</p>
            </div>
            <div className="info-card">
              <h3>Export certified</h3>
              <p>International-grade packaging meeting phytosanitary standards and global food-safety regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="shipping">
        <div className="section-inner">
          <div>
            <h2>Shipping & cold-chain logistics</h2>
            <p>
              Temperature-controlled transportation ensures your produce arrives in pristine condition. Our logistics network
              spans domestic and international routes.
            </p>
          </div>
          <div className="service-cards">
            <div className="info-card">
              <h3>Cold-chain management</h3>
              <p>Real-time temperature monitoring from storage to final delivery destination.</p>
            </div>
            <div className="info-card">
              <h3>On-time delivery</h3>
              <p>Reliable scheduling and tracking for domestic vendor orders and export shipments.</p>
            </div>
            <div className="info-card">
              <h3>Global distribution</h3>
              <p>Access to international shipping partners for seamless multi-country logistics and clearance support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="export">
        <div className="section-inner">
          <div>
            <h2>Export markets & destinations</h2>
            <p>KAF Groups supplies fresh produce and specialty products to distributors and retailers across key markets.</p>
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

          <div className="info-card" style={{ marginTop: '2rem' }}>
            <h3>Export readiness</h3>
            <p>
              All our products are packed and documented for international compliance. We handle phytosanitary certificates,
              customs documentation, and cross-border logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner contact-layout">
          <div className="contact-panel">
            <h2>Ready to explore our products and services?</h2>
            <p>
              Whether you need domestic supply, custom packaging, or international export solutions, our team is ready to
              discuss your requirements.
            </p>
            <Link href="/contact" className="button button-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
