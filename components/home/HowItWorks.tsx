export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Contact', desc: 'Call, text, or request a quote online. Tell us your device and the issue.' },
    { num: '02', title: 'Confirm', desc: 'We confirm pricing, parts availability, and schedule your appointment.' },
    { num: '03', title: 'Repair', desc: 'Fast turnaround with quality parts. Your device is tested before handoff.' },
  ];

  return (
    <section className="py-5 border-top">
      <div className="container">
        <p className="text-muted mb-1" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Simple process
        </p>
        <h2 className="h3 fw-bold mb-4">How it works</h2>
        <div className="row g-4">
          {steps.map((s) => (
            <div className="col-12 col-md-4" key={s.num}>
              <div className="mcpr-card h-100">
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--mcpr-dark)',  lineHeight: 1 }}>
                  {s.num}
                </div>
                <div className="fw-bold mt-2 mb-1">{s.title}</div>
                <div style={{ color: '#000' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
