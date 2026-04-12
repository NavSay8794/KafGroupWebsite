import Link from 'next/link';

export default function VendorsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="page-content">
          <h1>Vendors</h1>
          <p>
            Hotels, supermarkets, and caterers can partner with FreshPak Supply for consistent, fresh produce and flexible
            delivery schedules.
          </p>
          <Link href="/contact" className="button button-primary">
            Register as a Vendor
          </Link>
        </div>
      </section>
    </main>
  );
}
