import Link from 'next/link';
import { telHref, smsHref } from '@/lib/business';

export default function StickyMobileCtaBar() {
  return (
    <div className="d-lg-none">
      <div
        className="position-fixed start-0 end-0 mcpr-mobile-cta"
        style={{
          bottom: 'var(--safe-bottom)',
          zIndex: 1030,
        }}
      >
        <div className="container py-2">
          <div className="row g-2">
            <div className="col-4">
              <a className="btn btn-dark w-100" href={telHref()}>
                Call
              </a>
            </div>
            <div className="col-4">
              <a className="btn btn-dark w-100" href={smsHref()}>
                Text
              </a>
            </div>
            <div className="col-4">
              <Link className="btn btn-dark w-100" href="/quote">
                Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
