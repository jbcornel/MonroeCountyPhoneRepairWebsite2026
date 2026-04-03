import Link from 'next/link';

export const metadata = {
  title: 'Repairs & Services',
  description: 'Phone repair services in Monroe, MI: iPhone, Samsung, Android. Plus data recovery and mail-in repair.',
};

export default function RepairsPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="h3 fw-bold mb-3">Repairs</h1>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="mcpr-card h-100">
              <div className="fw-bold">iPhone</div>
              <div className="text-muted mt-2">Screens, batteries, charging ports, and more.</div>
              <div className="mt-3">
                <Link className="btn btn-dark" href="/repairs/iphone">View iPhone repairs</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="mcpr-card h-100">
              <div className="fw-bold">Samsung</div>
              <div className="text-muted mt-2">Galaxy screen repair, battery, ports, diagnostics.</div>
              <div className="mt-3">
                <Link className="btn btn-dark" href="/repairs/samsung">View Samsung repairs</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="mcpr-card h-100">
              <div className="fw-bold">Android</div>
              <div className="text-muted mt-2">Other Android phones and tablets.</div>
              <div className="mt-3">
                <Link className="btn btn-dark" href="/repairs/android">View Android repairs</Link>
              </div>
            </div>
          </div>
        </div>

        <h2 className="h4 fw-bold mt-5 mb-3">Other Services</h2>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="mcpr-card h-100">
              <div className="fw-bold">Data Recovery</div>
              <div className="text-muted mt-2">Recover photos, contacts, and data from damaged or broken devices.</div>
              <div className="mt-3">
                <Link className="btn btn-dark" href="/services/data-recovery">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="mcpr-card h-100">
              <div className="fw-bold">Mail-in Repair</div>
              <div className="text-muted mt-2">Can&rsquo;t visit? Ship us your device for professional repair.</div>
              <div className="mt-3">
                <Link className="btn btn-dark" href="/services/mail-in">Learn more</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Link className="btn btn-dark" href="/quote">Get a quote</Link>
        </div>
      </div>
    </section>
  );
}
