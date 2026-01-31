import Link from 'next/link';
import { business, telHref, smsHref } from '@/lib/business';

export default function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <h1 className="display-5 fw-bold">
              Same-day phone repair in {business.city}, {business.region}
            </h1>
            <p className="lead mt-3">
              Screen repair, battery replacement, charging port repair, and more.
              Call or text to schedule at {business.phoneDisplay}.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
               <a className="mcpr-btn-primary text-decoration-none" href="tel:+17347319094">
    Call Now
  </a>

  <a className="mcpr-btn-primary text-decoration-none" href="sms:+17347319094">
    Text Us
  </a>
                <a className="mcpr-btn-primary text-decoration-none" href="/quote">
    Get a Quote
  </a>
            </div>

            <div className="text-muted mt-3">
              {business.hoursNote} — {business.addressLine1}, {business.city}.
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="mcpr-card bg-dark text-white">
              <div className="fw-bold">Most common repairs</div>
              <ul className="mb-0 mt-2">
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
