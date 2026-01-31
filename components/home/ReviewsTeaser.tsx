import Link from 'next/link';

export default function ReviewsTeaser() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-8">
            <h2 className="h3 fw-bold mb-2">Trusted local repair</h2>
            <div className="text-muted">
              See customer feedback and get directions to our Monroe location.
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex gap-2 justify-content-lg-end">
            <Link className="btn btn-dark" href="/reviews">
              View reviews
            </Link>
            <Link className="btn btn-dark" href="/quote">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
