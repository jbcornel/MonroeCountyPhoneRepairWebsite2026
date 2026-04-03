import Link from 'next/link';
import { business, formatFullAddress, telHref } from '@/lib/business';
import SocialLinks from '@/components/common/SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div className="fw-bold mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}>
              {business.name}
            </div>
            <div className="mt-3">{formatFullAddress()}</div>
            <div className="mt-1">
              <a href={telHref()} className="text-decoration-none">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="text-muted mt-2">{business.hoursNote}</div>
            <div className="mt-3 d-flex flex-wrap gap-2 align-items-center">
              <a className="btn btn-dark btn-sm" href={business.googleMapsUrl}>
                Get Directions
              </a>
              <SocialLinks variant="light" />
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="fw-bold mb-3" style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pages</div>
            <ul className="list-unstyled mb-0" style={{ lineHeight: 2.2 }}>
              <li><Link href="/repairs" className="text-decoration-none">Repairs</Link></li>
              <li><Link href="/services/data-recovery" className="text-decoration-none">Data Recovery</Link></li>
              <li><Link href="/services/mail-in" className="text-decoration-none">Mail-in Repair</Link></li>
              <li><Link href="/quote" className="text-decoration-none">Get a Quote</Link></li>
              <li><Link href="/book" className="text-decoration-none">Book</Link></li>
              <li><Link href="/reviews" className="text-decoration-none">Reviews</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <div className="fw-bold mb-3" style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Popular Repairs</div>
            <ul className="list-unstyled mb-0" style={{ lineHeight: 2.2 }}>
              <li><Link href="/repairs/iphone" className="text-decoration-none">iPhone Repair</Link></li>
              <li><Link href="/repairs/samsung" className="text-decoration-none">Samsung Repair</Link></li>
              <li><Link href="/repairs/android" className="text-decoration-none">Android Repair</Link></li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0 1rem' }} />

        <div className="text-muted small">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
