import Link from 'next/link';

export const metadata = {
  title: 'Samsung Repair',
  description: 'Samsung repair in Monroe, MI. Screen repair, battery replacement, charging port repair, and more.',
};

export default function SamsungRepairsPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="h3 fw-bold mb-2">Samsung Repair</h1>
        <p className="text-muted">
          Common Samsung repairs include screens, batteries, charging ports, and diagnostics. Contact us to confirm pricing and timing.
        </p>
        <div className="d-flex gap-2">
          <Link className="btn btn-dark" href="/quote">Get a quote</Link>
          <Link className="btn btn-dark" href="/book">Schedule an appointment</Link>
        </div>
      </div>
    </section>
  );
}
