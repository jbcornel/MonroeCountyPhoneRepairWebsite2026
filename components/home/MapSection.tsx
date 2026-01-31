import { business, formatFullAddress } from '@/lib/business';
import MapEmbed from '@/components/common/MapEmbed';

export default function MapSection() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <h2 className="h3 fw-bold mb-3">Monroe location</h2>

        <div className="row g-3 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="mcpr-card h-100">
              <div className="fw-bold">{business.name}</div>
              <div className="mt-2">{formatFullAddress()}</div>
              <div className="text-muted mt-2">{business.hoursNote}</div>
              <a className="btn btn-dark mt-3" href={business.googleMapsUrl}>
                Get Directions
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <MapEmbed height={360} />
          </div>
        </div>
      </div>
    </section>
  );
}