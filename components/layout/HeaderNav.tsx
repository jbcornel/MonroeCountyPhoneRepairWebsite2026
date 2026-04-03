import Link from 'next/link';
import Image from 'next/image';
import { business } from '@/lib/business';

export default function HeaderNav() {
  return (
    <nav className="navbar navbar-expand-lg mcpr-navbar fixed-top">
      <div className="container-fluid px-3">
         <Image
        src="/images/logo.png"
        alt="Logo"
        width={70}
        height={70}
        className="mcpr-logo navbar-brand mcpr-brand"
      />

        <Link className="navbar-brand mcpr-brand" href="/">
          <span className="mcpr-brand-top">Monroe County</span>
          <span className="mcpr-brand-bottom">Phone Repair</span>
        </Link>
        
       
     

        {/* Hamburger */}
        <button
          className="navbar-toggler mcpr-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mcprNav"
          aria-controls="mcprNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mcprNav">
          <ul className="navbar-nav ms-auto gap-lg-2 align-items-lg-center mt-3 mt-lg-0">

            {/* Repairs dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mcpr-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Repairs
              </a>
              <ul className="dropdown-menu dropdown-menu-end mcpr-dropdown">
                <li><Link className="dropdown-item" href="/repairs">All Repairs</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/repairs/iphone">iPhone Repair</Link></li>
                <li><Link className="dropdown-item" href="/repairs/samsung">Samsung Repair</Link></li>
                <li><Link className="dropdown-item" href="/repairs/android">Android Repair</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/services/data-recovery">Data Recovery</Link></li>
                <li><Link className="dropdown-item" href="/services/mail-in">Mail-in Repair</Link></li>
              </ul>
            </li>

          
            <li className="nav-item">
              <Link className="nav-link mcpr-link" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mcpr-link" href="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mcpr-link" href="/reviews">
                Reviews
              </Link>
            </li>

            {/* Booking + Quote CTAs */}
            <li className="nav-item">
              <Link className="nav-link mcpr-link" href="/quote">
                Get Quote
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mcpr-link" href="/book">
                Schedule
              </Link>
            </li>

            {/* Optional: Directions external */}
            <li className="nav-item d-lg-none mt-2">
              <a className="nav-link mcpr-link" href={business.googleMapsUrl}>
                Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
