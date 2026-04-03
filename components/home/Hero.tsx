import Link from 'next/link';
import { business, telHref, smsHref } from '@/lib/business';

export default function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <p className="text-muted fw-600 mb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Monroe County Phone Repair
            </p>
            <h1 className="display-5 fw-bold" style={{ lineHeight: 1.15 }}>
              Same-day phone repair in {business.city}, {business.region}
            </h1>
            <p className="lead mt-3">
              Screen repair, battery replacement, charging port repair, and more.
              Call or text to schedule at{' '}
              <a href={telHref()} className="text-decoration-none fw-semibold" style={{ color: 'var(--mcpr-primary)' }}>
                {business.phoneDisplay}
              </a>.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <a className="mcpr-btn-primary text-decoration-none" href={telHref()}>
                Call Now
              </a>
              <a className="mcpr-btn-secondary text-decoration-none" href={smsHref()}>
                Text Us
              </a>
              <Link className="mcpr-btn-secondary text-decoration-none" href="/quote">
                Get a Quote
              </Link>
            </div>

            <div className="text-muted mt-4" style={{ fontSize: '0.875rem' }}>
              {business.hoursNote} &mdash; {business.addressLine1}, {business.city}.
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="mcpr-card" style={{ background: 'var(--mcpr-dark-bg)', color: 'white', borderColor: 'transparent' }}>
              <div className="fw-bold mb-3" style={{ color: 'white' }}>Most common repairs</div>
              <ul className="mb-0" style={{ lineHeight: 2, color: 'rgba(255,255,255,0.85)' }}>
                <li>Screen replacement</li>
                <li>Battery replacement</li>
                <li>Charging port repair</li>
                <li>Speaker / mic issues</li>
                <li>Diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
