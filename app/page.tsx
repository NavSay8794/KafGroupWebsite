import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';

const products = [
  {
    id: 1,
    name: 'Banana',
    image: '/images/Banana.png',
    description: 'Fresh, golden bananas sourced daily. Perfect for retail, hotels, and wholesale distribution.',
  },
  {
    id: 2,
    name: 'Green Chillies',
    image: '/images/GreenChillies.png',
    description: 'Vibrant green chillies with optimal freshness. Essential for kitchens and culinary businesses.',
  },
  {
    id: 3,
    name: 'Grapes',
    image: '/images/Grapes.png',
    description: 'Sweet, juicy grapes meeting international export standards.',
  },
  {
    id: 4,
    name: 'Onions',
    image: '/images/Onions.png',
    description: 'High-quality onions in bulk quantities. Consistent supply for restaurants and vendors.',
  },
  {
    id: 5,
    name: 'Husk Coconut',
    image: '/images/Husk Coconut.png',
    description: 'Fresh husk coconuts for export and domestic markets. Premium packaging available.',
  },
  {
    id: 6,
    name: 'Drumsticks',
    image: '/images/Drumsticks.jfif.jpeg',
    description: 'Fresh drumstick leaves and pods. Nutritious and in high demand across markets.',
  },
  {
    id: 7,
    name: 'Pomegranate',
    image: '/images/Pomegranate.png',
    description: 'Premium pomegranates packed with antioxidants. Premium export quality available.',
  },
  {
    id: 8,
    name: 'Tomatoes',
    image: '/images/Tomatoes.png',
    description: 'Farm-fresh tomatoes packed with flavor and perfect ripeness.',
  },
  {
    id: 9,
    name: 'Garlic & Ginger',
    image: '/images/Garlic And Ginger.png',
    description: 'Premium quality garlic and ginger sourced for culinary excellence.',
  },
  {
    id: 10,
    name: 'Rice',
    image: '/images/Rice.png',
    description: 'High-quality rice for wholesale and export distribution.',
  },
];

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
      {/* Cover Image Section */}
      <section className="hero-cover-section">
        <div className="hero-cover-wrapper">
          <Image
            src="/images/Cover.jpeg"
            alt="KAF Groups Premium Produce"
            width={1200}
            height={400}
            priority
            quality={90}
            className="cover-image"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Fresh fruits and vegetables, packaged for vendors and global markets.</h1>
            <p>
              KAF Groups delivers premium fresh produce and export-ready packaging with cold-chain logistics for hotels,
              restaurants, supermarkets and international distributors.
            </p>
            <div className="hero-actions">
              <Link href="#products" className="button button-secondary">
                Explore Products
              </Link>
            </div>
            <div className="hero-features">
              <div className="feature-pill">Fresh fruits & vegetables, daily supply</div>
              <div className="feature-pill">Export-ready packaging & cold-chain logistics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="section-inner">
          <div>
            <h2>Our Premium Products</h2>
            <p>KAF Groups offers a carefully curated selection of fresh fruits, vegetables, and specialty products sourced for quality and freshness.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    quality={85}
                    className="product-image"
                  />
                </div>
                <h3>{product.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* <section className="section">
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
      </section> */}

      {/* Contact Section */}
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
