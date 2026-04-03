import Link from 'next/link';

const services = [
  { title: 'Screen Repair', desc: 'Cracked or unresponsive screens.', href: '/repairs' },
  { title: 'Battery Replacement', desc: 'Fast drain, swelling, shutdowns.', href: '/repairs' },
  { title: 'Charging Port', desc: "Loose cable, won\u2019t charge.", href: '/repairs' },
  { title: 'Back Glass', desc: 'Damaged back panel replacement.', href: '/repairs' },
  { title: 'Water Damage', desc: 'Diagnostics and recovery steps.', href: '/quote' },
  { title: 'Data Recovery', desc: 'Recover photos and data from damaged phones.', href: '/services/data-recovery' },
  { title: 'Mail-in Repair', desc: "Can\u2019t visit? Ship us your device.", href: '/services/mail-in' },
  { title: 'Other Issues', desc: 'Speaker, mic, camera, buttons.', href: '/quote' },
];

export default function ServicesGrid() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end gap-3 mb-4">
          <div>
            <p className="text-muted mb-1" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              What we offer
            </p>
            <h2 className="h3 fw-bold mb-0">Repairs &amp; Services</h2>
          </div>
          <Link className="btn btn-outline-dark" href="/repairs">
            View all
          </Link>
        </div>

        <div className="row g-3">
          {services.map((s) => (
            <div className="col-12 col-md-6 col-lg-4" key={s.title}>
              <div className="mcpr-card h-100 d-flex flex-column">
                <div className="fw-bold">{s.title}</div>
                <div className="text-muted mt-2 flex-grow-1">{s.desc}</div>
                <div className="mt-3">
                  <Link className="btn btn-dark btn-sm" href={s.href}>
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
