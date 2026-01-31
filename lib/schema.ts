import { business, formatFullAddress } from './business';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.addressLine1,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    // If you have a logo URL later, add it here.
    url: 'https://monroecountyphonerepair.com',
    areaServed: business.serviceAreaShort,
  };
}
