import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="page-content">
          <h1>Products</h1>
          <p>
            For our complete product catalog and service offerings, please visit our integrated Products & Services page.
          </p>
          <Link href="/services" className="button button-primary">
            View Products & Services
          </Link>
        </div>
      </section>
    </main>
  );
}
