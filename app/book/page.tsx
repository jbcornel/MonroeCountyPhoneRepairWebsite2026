import BookingRequestForm from '@/components/forms/BookingRequestForm';

export const metadata = {
  title: 'Book',
  description: 'Request a booking for phone repair in Monroe, MI.',
};

export default function BookPage() {
  return (
    <section className="py-5">
      <div className="container">
        <BookingRequestForm />
      </div>
    </section>
  );
}
