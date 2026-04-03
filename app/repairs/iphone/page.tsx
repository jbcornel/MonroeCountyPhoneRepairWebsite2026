import Link from 'next/link';
import CtaSidebar from '@/components/repairs/CtaSidebar';

export const metadata = {
  title: 'iPhone Repair in Monroe, MI | Monroe County Phone Repair',
  description:
    'iPhone screen repair, battery replacement, charging port, and more in Monroe, MI. OEM, refurbished, and aftermarket screen options. Same-day repairs by appointment.',
};

const screenPricing = [
  { model: 'iPhone 17 Pro Max', oem: 505, refurb: 460, oled: 280, aftermarket: 199 },
  { model: 'iPhone 17 Pro', oem: 465, refurb: 460, oled: 280, aftermarket: 199 },
  { model: 'iPhone 17 Air', oem: 465, refurb: 450, oled: 205, aftermarket: null },
  { model: 'iPhone 17', oem: 465, refurb: 460, oled: 245, aftermarket: 165 },
  { model: 'iPhone 16 Pro Max', oem: 480, refurb: 455, oled: 270, aftermarket: 190 },
  { model: 'iPhone 16 Pro', oem: 480, refurb: 265, oled: 235, aftermarket: 199 },
  { model: 'iPhone 16 Plus', oem: 430, refurb: 365, oled: 220, aftermarket: 130 },
  { model: 'iPhone 16', oem: 380, refurb: 320, oled: 215, aftermarket: 130 },
  { model: 'iPhone 15 Pro Max', oem: 450, refurb: 315, oled: 210, aftermarket: 140 },
  { model: 'iPhone 15 Pro', oem: 400, refurb: 370, oled: 210, aftermarket: 125 },
  { model: 'iPhone 15 Plus', oem: 329, refurb: 269, oled: 205, aftermarket: 125 },
  { model: 'iPhone 15', oem: 350, refurb: 265, oled: 190, aftermarket: 120 },
  { model: 'iPhone 14 Pro Max', oem: 450, refurb: 390, oled: 210, aftermarket: 135 },
  { model: 'iPhone 14 Pro', oem: 400, refurb: 305, oled: 210, aftermarket: 135 },
  { model: 'iPhone 14 Plus', oem: 329, refurb: 240, oled: 160, aftermarket: 45 },
  { model: 'iPhone 14', oem: 350, refurb: 190, oled: 135, aftermarket: 110 },
  { model: 'iPhone 13 Pro Max', oem: 400, refurb: 285, oled: 140, aftermarket: 125 },
  { model: 'iPhone 13 Pro', oem: 350, refurb: 235, oled: 150, aftermarket: 115 },
  { model: 'iPhone 13', oem: 350, refurb: 165, oled: 135, aftermarket: 105 },
  { model: 'iPhone 13 Mini', oem: 300, refurb: 218, oled: 150, aftermarket: 115 },
  { model: 'iPhone 12 Pro Max', oem: 400, refurb: 220, oled: 142, aftermarket: 110 },
  { model: 'iPhone 12 Pro', oem: 350, refurb: 135, oled: 140, aftermarket: 105 },
  { model: 'iPhone 12', oem: 350, refurb: 135, oled: 140, aftermarket: 100 },
  { model: 'iPhone 12 Mini', oem: 300, refurb: 170, oled: null, aftermarket: 115 },
  { model: 'iPhone 11 Pro Max', oem: null, refurb: 140, oled: 110, aftermarket: 95 },
  { model: 'iPhone 11 Pro', oem: null, refurb: 135, oled: 115, aftermarket: 95 },
  { model: 'iPhone 11', oem: null, refurb: 105, oled: null, aftermarket: 85 },
  { model: 'iPhone SE (3rd gen)', oem: null, refurb: null, oled: null, aftermarket: 75 },
  { model: 'iPhone SE (2nd gen)', oem: null, refurb: null, oled: null, aftermarket: 75 },
  { model: 'iPhone XS Max', oem: null, refurb: 125, oled: 105, aftermarket: 85 },
  { model: 'iPhone XS', oem: null, refurb: 115, oled: 105, aftermarket: 85 },
  { model: 'iPhone XR', oem: null, refurb: 105, oled: null, aftermarket: 85 },
  { model: 'iPhone X', oem: null, refurb: 105, oled: 105, aftermarket: 85 },
];

function formatPrice(value: number | null) {
  if (value === null) return <span className="text-muted">N/A</span>;
  return `$${value}`;
}

export default function IphoneRepairsPage() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {/* Main content */}
          <div className="col-12 col-lg-8">
            <h1 className="h3 fw-bold mb-2">iPhone Repair in Monroe, MI</h1>
            <p className="text-muted">
              We repair all iPhone models from the latest iPhone 17 series down to the iPhone 5.
              Screen replacements are available in multiple quality tiers so you can choose
              the option that fits your budget. All repairs are done by appointment.
            </p>

            {/* Screen tier explanation */}
            <div className="mcpr-card mb-4">
              <h2 className="h5 fw-bold mb-3">Screen Repair Options</h2>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="fw-bold">Apple OEM</div>
                  <div className="text-muted small">Genuine original Apple screen through Apple.</div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="fw-bold">Refurbished Original</div>
                  <div className="text-muted small">Original Apple display, professionally refurbished. Great quality at a lower price.</div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="fw-bold">Premium Aftermarket OLED</div>
                  <div className="text-muted small">High-quality third-party OLED. Excellent display quality and durability.</div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="fw-bold">Premium Aftermarket LED</div>
                  <div className="text-muted small">Quality third-party LED screen. Excellent display quality with solid performance.</div>
                </div>
              </div>
            </div>

            {/* Pricing table */}
            <div className="mcpr-card mb-4">
              <h2 className="h5 fw-bold mb-3">iPhone Screen Repair Pricing</h2>
              <table className="table table-hover mb-0 align-middle mcpr-pricing-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>OEM</th>
                    <th>Refurb</th>
                    <th>OLED</th>
                    <th>LED</th>
                  </tr>
                </thead>
                <tbody>
                  {screenPricing.map((row) => (
                    <tr key={row.model}>
                      <td className="fw-bold">{row.model}</td>
                      <td>{formatPrice(row.oem)}</td>
                      <td>{formatPrice(row.refurb)}</td>
                      <td>{formatPrice(row.oled)}</td>
                      <td>{formatPrice(row.aftermarket)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-muted small mt-3 mb-0">
                * Prices include parts and labor. Pricing subject to change based on availability.
                Contact us to confirm pricing for your specific model.
              </p>
            </div>

            {/* Other repairs */}
            <h2 className="h5 fw-bold mb-3">Other iPhone Repairs</h2>
            <p className="text-muted mb-3">
              We also handle the following iPhone repairs. Contact us for pricing and availability.
            </p>
            <div className="row g-3 mb-4">
              {[
                { title: 'Battery Replacement', desc: 'Restore battery life on any iPhone model. Fix fast drain, swelling, or random shutdowns.' },
                { title: 'Charging Port', desc: 'Loose connection, won\u2019t charge, or only charges at certain angles.' },
                { title: 'Back Glass', desc: 'Cracked or shattered back panel replacement for iPhone 8 and newer.' },
                { title: 'Front Camera', desc: 'Fix blurry selfies, Face ID issues, or a cracked front camera lens.' },
                { title: 'Back Camera', desc: 'Blurry photos, camera not focusing, or cracked rear camera lens.' },
                { title: 'Speaker', desc: 'Low volume, muffled sound, or no audio from the earpiece or loudspeaker.' },
                { title: 'Microphone', desc: 'Callers can\u2019t hear you, or voice memos and calls sound distorted.' },
              ].map((item) => (
                <div className="col-12 col-md-6" key={item.title}>
                  <div className="mcpr-card h-100">
                    <div className="fw-bold">{item.title}</div>
                    <div className="text-muted mt-1 small">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mcpr-card">
              <h2 className="h5 fw-bold mb-2">Not Sure What You Need?</h2>
              <p className="mb-0 text-muted">
                No worries &mdash; just tell us what&rsquo;s going on with your iPhone and
                we&rsquo;ll diagnose the issue.{' '}
                <Link href="/quote" className="text-decoration-underline">Get a quote</Link> or{' '}
                <Link href="/book" className="text-decoration-underline">schedule an appointment</Link> and
                we&rsquo;ll take it from there.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <CtaSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
