import QuoteForm from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'Get a Quote',
  description: 'Request a quote for phone repair in Monroe, MI. Call or text to schedule.',
};

export default function QuotePage() {
  return (
    <section className="py-5">
      <div className="container">
        <QuoteForm />
      </div>
    </section>
  );
}
