import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-inner">
          <div className="about-header">
            <p className="card-flag">Our Legacy</p>
            <h1>We Rank 1st in Supplying & Service Providing to Indian Exporters</h1>
            <p className="about-tagline">
              Seven years of excellence in sourcing, packing, and delivering premium agricultural products across India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section">
        <div className="section-inner">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              <strong>KHAN AL FAISAL</strong> is a Nashik, India-based commodity trading company with a seven-year track record of excellence. 
              We've built strong relationships with major brands and established offices in Nashik and other strategic locations across India.
            </p>
            <p>
              Our operations span across Nashik and Vashi (Navi Mumbai), where we've perfected the art of supplying and packing agricultural products. 
              We don't just trade—we own our farms and maintain direct supplier relationships with farmers across multiple states and cities, 
              enabling us to offer competitive prices without compromising on quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="section">
        <div className="section-inner">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What We Specialize In</h2>
          <div className="specialty-grid">
            <div className="specialty-card">
              <div className="specialty-icon">🧅</div>
              <h3>Onions</h3>
              <p>Premium quality onions sourced directly from our farms and trusted partners.</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">🍌</div>
              <h3>Bananas</h3>
              <p>Golden, fresh bananas with consistent quality for wholesale and export.</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">🍅</div>
              <h3>Tomatoes</h3>
              <p>Farm-fresh tomatoes packed with flavor and perfect ripeness.</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">🍇</div>
              <h3>Grapes</h3>
              <p>Sweet, juicy grapes meeting international export standards.</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">🌶️</div>
              <h3>Green Chillies</h3>
              <p>Vibrant green chillies with optimal freshness and pungency.</p>
            </div>
            <div className="specialty-card">
              <div className="specialty-icon">🍇</div>
              <h3>Pomegranates</h3>
              <p>Premium pomegranates packed with antioxidants and export quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section">
        <div className="section-inner">
          <h2>Our Commitment to Excellence</h2>
          <div className="commitment-grid">
            <div className="commitment-box">
              <h3>🏅 Quality First</h3>
              <p>All products meet industry standards and are packed according to client specifications. We provide top-quality products with on-time delivery and complete customer satisfaction.</p>
            </div>
            <div className="commitment-box">
              <h3>🚢 Global Reach</h3>
              <p>We facilitate exports through India's major ports: JNPT Mumbai, Mundra, Chennai, Tuticorin, and all major airports. Your products reach international markets efficiently.</p>
            </div>
            <div className="commitment-box">
              <h3>💰 Competitive Pricing</h3>
              <p>With our own farms and direct supplier relationships across multiple states, we ensure the best value without sacrificing quality.</p>
            </div>
            <div className="commitment-box">
              <h3>🤝 Trusted Partnership</h3>
              <p>Our exceptional reputation stems from the dedication of our team and the incomparable quality of our products and services. We strive to be your preferred agro-product partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why">
        <div className="section-inner">
          <h2>Why Choose KHAN AL FAISAL</h2>
          <div className="why-list">
            <div className="why-item">
              <span className="why-number">1</span>
              <div>
                <h4>7 Years of Excellence</h4>
                <p>Proven track record in agricultural commodity trading and export services.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-number">2</span>
              <div>
                <h4>Direct Farm Ownership</h4>
                <p>We control quality from the source through our own farms and vetted farmer networks.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-number">3</span>
              <div>
                <h4>Multi-State Operations</h4>
                <p>Supplier relationships across multiple states ensure consistent availability and quality.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-number">4</span>
              <div>
                <h4>Professional Team</h4>
                <p>Dedicated employees committed to smooth operations and customer satisfaction.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-number">5</span>
              <div>
                <h4>Industry Standard Compliance</h4>
                <p>All products meet guidelines and are safely packed to international specifications.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-number">6</span>
              <div>
                <h4>Competitive Advantage</h4>
                <p>Premium quality with best-in-class value—the KAF difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="section-inner about-cta">
          <h2>Ready to Experience the KAF Difference?</h2>
          <p>
            Whether you're sourcing for domestic distribution or planning international exports, 
            we're here to exceed your expectations with quality, reliability, and exceptional service.
          </p>
          <Link href="/#contact" className="button button-primary">
            Get in Touch With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
