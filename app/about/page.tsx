import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="page-content">
          <h1>About FreshPak Supply</h1>
          <p>
            FreshPak Supply connects the freshest fruits and vegetables from trusted growers to vendors in Mumbai and
            beyond. We focus on quality, hygiene, and seamless logistics.
          </p>
          <p>
            Our team supports hotels, restaurants, supermarkets, caterers and exporters with custom packaging and
            dependable cold-chain delivery.
          </p>
          <Link href="/" className="button button-secondary">
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
