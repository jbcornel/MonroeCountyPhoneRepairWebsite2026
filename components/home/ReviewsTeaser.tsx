import Link from 'next/link';

export default function ReviewsTeaser() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-8">
            <p className="text-muted mb-1" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Customer feedback
            </p>
            <h2 className="h3 fw-bold mb-2">Trusted by Monroe County</h2>
            <p className="text-muted mb-0">
              See what our customers say about their repair experience.
            </p>
          </div>
          <div className="col-12 col-lg-4 d-flex gap-2 justify-content-lg-end">
            <Link className="btn btn-dark" href="/reviews">
              View reviews
            </Link>
            <Link className="btn btn-outline-dark" href="/quote">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
