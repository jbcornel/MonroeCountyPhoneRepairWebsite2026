import { business, formatFullAddress } from '@/lib/business';
import { buildLocalBusinessSchema } from '@/lib/schema';

export default function BusinessSchema() {
  const jsonLd = buildLocalBusinessSchema();

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
