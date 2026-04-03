import { business, formatFullAddress } from '@/lib/business';
import MapEmbed from '@/components/common/MapEmbed';

export default function MapSection() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <p className="text-muted mb-1" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Visit us
        </p>
        <h2 className="h3 fw-bold mb-4">Monroe location</h2>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="mcpr-card h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="fw-bold mb-2">{business.name}</div>
                <div>{formatFullAddress()}</div>
                <div className="text-muted mt-2">{business.hoursNote}</div>
              </div>
              <div className="mt-3">
                <a className="btn btn-dark" href={business.googleMapsUrl}>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div style={{ borderRadius: 'var(--mcpr-radius)', overflow: 'hidden' }}>
              <MapEmbed height={360} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
