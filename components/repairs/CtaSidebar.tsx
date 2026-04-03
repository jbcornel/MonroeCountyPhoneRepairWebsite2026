import Link from 'next/link';
import { business, telHref, smsHref } from '@/lib/business';

export default function CtaSidebar({ title = 'Ready to get started?' }: { title?: string }) {
  return (
    <div className="position-lg-sticky" style={{ top: '100px' }}>
      <div className="mcpr-card mb-3">
        <div className="fw-bold mb-3">{title}</div>
        <div className="d-grid gap-2">
          <Link className="btn btn-dark" href="/quote">Get a Quote</Link>
          <Link className="btn btn-dark" href="/book">Schedule an Appointment</Link>
          <a className="btn btn-outline-dark" href={telHref()}>Call {business.phoneDisplay}</a>
          <a className="btn btn-outline-dark" href={smsHref()}>Text Us</a>
        </div>
      </div>
      <div className="mcpr-card mb-3">
        <div className="fw-bold mb-2">What to expect</div>
        <ol className="mb-0 ps-3">
          <li className="mb-1">Contact us with your device and issue</li>
          <li className="mb-1">We confirm pricing and timing</li>
          <li className="mb-1">Repair completed and device tested</li>
        </ol>
      </div>
      <div className="mcpr-card">
        <div className="fw-bold mb-2">Warranty</div>
        <p className="mb-0 text-muted">All repairs include a limited warranty on parts and labor. Ask us for details when you schedule your repair.</p>
      </div>
    </div>
  );
}
