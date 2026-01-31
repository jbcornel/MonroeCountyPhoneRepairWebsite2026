import Link from 'next/link';
import { business, formatFullAddress, telHref } from '@/lib/business';

export const metadata = {
  title: `About | ${business.name}`,
  description:
    'Learn about our values, what to expect, and why Monroe County Phone Repair is trusted for fast, reliable device repair.',
};

export default function AboutPage() {
  return (
    <main className="container py-5">
      <div className="row align-items-start g-4">
        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-7">
          <h1 className="fw-bold mb-2">About {business.name}</h1>
          <p className="text-muted mb-4">
            We help people in Monroe County and surrounding areas by offering a sustainable device repair solution.
            Our focus is simple: clear communication, quality repairs, and respectful service. A seamless and pleasant customer experience with determinate and guaranteed outcomes.
          </p>

          {/* VALUES GRID */}
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="fw-bold mb-2">Quality-first repairs</div>
                  <div className="text-muted">
                    We focus on reliable outcomes by combining clinical diagnosis with tested parts, continual client communication, and
                    thorough post-repair checks.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="fw-bold mb-2">Transparent estimates</div>
                  <div className="text-muted">
                    You’ll always get a clear explanation of repair options, outcomes, timing, and cost expectations and provided warranty
                    before any work begins.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="fw-bold mb-2">Fast turnaround</div>
                  <div className="text-muted">
                    Many common repairs can be completed the same day depending on parts availability and workload.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="fw-bold mb-2">Warranty-minded service</div>
                  <div className="text-muted">
                    We clearly explain and make sure you understand what’s covered with your repair so there are no surprises after service.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WHAT TO EXPECT */}
          <div className="card mt-4 shadow-sm">
            <div className="card-body">
              <div className="fw-bold mb-2">What to expect</div>
              <ul className="mb-0">
                <li>Tell us what’s going on with your device.</li>
                <li>We confirm the model, issue, and repair options.</li>
                <li>You receive a clear estimate and timeframe.</li>
                <li>Repair is completed and the device is checked before return.</li>
              </ul>
            </div>
          </div>

          {/* FUTURE THREE.JS SECTION */}
          {/*
          <div className="card mt-4 shadow-sm">
            <div className="card-body">
              <div className="fw-bold mb-2">Interactive model</div>
              <div style={{ height: 420 }}>
                <ThreeModelViewer />
              </div>
            </div>
          </div>
          */}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <div className="fw-bold mb-2">Visit us</div>
              <div>{formatFullAddress()}</div>

              <div className="mt-2">
                <a className="text-decoration-none" href={telHref()}>
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="text-muted mt-2">{business.hoursNote}</div>

              <div className="d-flex gap-2 mt-3 flex-wrap">
                <a className="btn btn-dark" href={business.googleMapsUrl}>
                  Get Directions
                </a>
                <Link className="btn btn-outline-dark" href="/book">
                  Book
                </Link>
                <Link className="btn btn-outline-dark" href="/quote">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <div className="fw-bold mb-2">Our mission</div>
              <p className="text-muted mb-0">
                Our goal is to provide dependable, straightforward device repair for the Monroe community.
                We aim to build relationships with our clients beyond the plane of simple satisfactory service. By treating everyone as a unique individual, with unlimited potential, and helping each other in the inter-dependent way humans are designed.
                We repair with <b style={{color:'black'}}>care, honesty, accountability, attention to detail, and the goal of a satisfied client</b> who will return and refer others in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
