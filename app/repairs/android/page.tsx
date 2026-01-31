import Link from 'next/link';

export const metadata = {
  title: 'Android Repair',
  description: 'Android repair in Monroe, MI. Screen repair, battery replacement, charging port repair, and more.',
};

export default function AndroidRepairsPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="h3 fw-bold mb-2">Android Repair</h1>
        <p className="text-muted">
          Common Android repairs include screens, batteries, charging ports, and diagnostics. Contact us to confirm pricing and timing.
        </p>
        <div className="d-flex gap-2">
          <Link className="btn btn-dark" href="/quote">Get a quote</Link>
          <Link className="btn btn-dark" href="/book">Schedule an appointment</Link>
        </div>
      </div>
    </section>
  );
}
