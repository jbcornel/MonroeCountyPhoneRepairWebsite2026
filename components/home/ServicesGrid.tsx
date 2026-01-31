import Link from 'next/link';

const services = [
  { title: 'Screen Repair', desc: 'Cracked or unresponsive screens.', href: '/quote' },
  { title: 'Battery Replacement', desc: 'Fast drain, swelling, shutdowns.', href: '/battery-replacement-monroe-mi' },
  { title: 'Charging Port', desc: 'Loose cable, won’t charge.', href: '/quote' },
  { title: 'Back Glass', desc: 'Damaged back panel replacement.', href: '/quote' },
  { title: 'Water Damage', desc: 'Diagnostics and recovery steps.', href: '/quote' },
  { title: 'Other Issues', desc: 'Speaker, mic, camera, buttons.', href: '/quote' },
];

export default function ServicesGrid() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end gap-3 mb-3">
          <div>
            <h2 className="h3 fw-bold mb-1">Repairs</h2>
            <div className="text-muted">Select a repair to get started.</div>
          </div>
          <Link className="btn btn-outline-dark" href="/repairs">
            View all repairs
          </Link>
        </div>

        <div className="row g-3">
          {services.map((s) => (
            <div className="col-12 col-md-6 col-lg-4" key={s.title}>
              <div className="mcpr-card h-100">
                <div className="fw-bold">{s.title}</div>
                <div className="text-muted mt-2">{s.desc}</div>
                <div className="mt-3">
                  <Link className="btn btn-dark" href={s.href}>
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
