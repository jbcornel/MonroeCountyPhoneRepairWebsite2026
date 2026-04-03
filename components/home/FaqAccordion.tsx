const faqs = [
  { q: 'Do you offer same-day repairs?', a: 'Many repairs can be completed the same day depending on device model and parts availability. Contact us to confirm timing for your specific repair.' },
  { q: 'Do I need an appointment?', a: "Yes, appointments are required. Call or text to schedule and we\u2019ll confirm a time that works for you." },
  { q: 'Do you provide a warranty?', a: "Yes, all repairs include a limited warranty on parts and labor. We\u2019ll confirm warranty details when you schedule your repair." },
  { q: 'How do quotes work?', a: "Submit a quote request with your device model and issue. We\u2019ll respond with exact pricing and estimated turnaround time by text, call, or email." },
  { q: 'What screen quality options do you offer?', a: 'For iPhones, we offer Apple OEM, refurbished original, premium aftermarket OLED, and premium aftermarket LED screens. Each tier offers a different balance of quality and price.' },
];

export default function FaqAccordion() {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <p className="text-muted mb-1" style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Common questions
        </p>
        <h2 className="h3 fw-bold mb-4">FAQ</h2>

        <div className="row">
          <div className="col-12 col-lg-8">
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
        </div>
      </div>
    </section>
  );
}
