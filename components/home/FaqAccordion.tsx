const faqs = [
  { q: 'Do you offer same-day repairs?', a: 'Many repairs can be completed the same day depending on device model and parts availability.' },
  { q: 'Do I need an appointment?', a: 'Appointments are required. Call or text to schedule and confirm timing.' },
  { q: 'Do you provide a warranty?', a: 'Yes, the warranty terms depend on the repair type. We’ll confirm warranty details when you schedule.' },
  { q: 'How do quotes work?', a: 'Request a quote with your device model and issue. We’ll confirm exact pricing and timing by text or call.' },
];

export default function FaqAccordion() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <h2 className="h3 fw-bold mb-3">FAQ</h2>

        <div className="accordion" id="faqAccordion">
          {faqs.map((f, i) => (
            <div className="accordion-item" key={f.q}>
              <h3 className="accordion-header" id={`faqHeading${i}`}>
                <button
                  className={`accordion-button ${i === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${i}`}
                  aria-expanded={i === 0 ? 'true' : 'false'}
                  aria-controls={`faqCollapse${i}`}
                >
                  {f.q}
                </button>
              </h3>
              <div
                id={`faqCollapse${i}`}
                className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                aria-labelledby={`faqHeading${i}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
