import Link from 'next/link';
import { business, formatFullAddress, telHref } from '@/lib/business';
import SocialLinks from '@/components/common/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div className="fw-bold">{business.name}</div>
            <div>{formatFullAddress()}</div>
            <div>
              <a href={telHref()} className="text-decoration-none">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="text-muted mt-2">{business.hoursNote}</div>
            <div className="mt-2">
              <a className="btn btn-dark btn-sm" href={business.googleMapsUrl}>
                Get Directions
              </a>
              <div className="mt-2">
                <SocialLinks />
                </div>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="fw-bold mb-2">Pages</div>
            <ul className="list-unstyled mb-0">
              <li><Link href="/repairs" className="text-decoration-none">Repairs</Link></li>
              <li><Link href="/quote" className="text-decoration-none">Get a Quote</Link></li>
              <li><Link href="/book" className="text-decoration-none">Book</Link></li>
              <li><Link href="/reviews" className="text-decoration-none">Reviews</Link></li>
              </ul>
          </div>

          <div className="col-6 col-lg-4">
            <div className="fw-bold mb-2">Popular Repairs</div>
            <ul className="list-unstyled mb-0">
              <li><Link href="/iphone-screen-repair-monroe-mi" className="text-decoration-none">iPhone Screen Repair</Link></li>
              <li><Link href="/samsung-screen-repair-monroe-mi" className="text-decoration-none">Samsung Screen Repair</Link></li>
              <li><Link href="/battery-replacement-monroe-mi" className="text-decoration-none">Battery Replacement</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-muted small mt-4">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
