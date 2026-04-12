import Link from 'next/link';

export default function ExportPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="page-content">
          <h1>Export</h1>
          <p>
            For export details, comprehensive service information, and international market access, please visit our combined
            Services & Export page.
          </p>
          <Link href="/services" className="button button-primary">
            View services & export
          </Link>
        </div>
      </section>
    </main>
  );
}
