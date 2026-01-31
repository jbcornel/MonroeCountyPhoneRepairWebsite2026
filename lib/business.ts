export const business = {
  name: 'Monroe County Phone Repair',
  phoneDisplay: '734-731-9094',
  phoneE164: '+17347319094',

  addressLine1: '1017 Rambow Dr',
  city: 'Monroe',
  region: 'MI',
  postalCode: '48161',
  country: 'US',

  googleMapsUrl: 'https://maps.app.goo.gl/nDXMkVv6LFCopP487',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5937.879212362234!2d-83.431941!3d41.915657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b65cd10252c3d%3A0x4fe27fa9f06abdef!2sMonroe%20County%20Phone%20Repair!5e0!3m2!1sen!2sus!4v1769021555451!5m2!1sen!2sus',

  hoursNote: 'By appointment. Call or text to schedule.',
  serviceAreaShort: 'Monroe, MI and surrounding areas',

  // Added to fix build error: used by smsHref() as a default message body.
  smsMessageTemplate:
    "Hi! I'd like a quote or appointment. My device model is: ____. The issue is: ____.",

  social: {
    facebook: 'https://www.facebook.com/monroecountycellphonerepair',
    instagram: 'https://www.instagram.com/monroecountyphonerepair'
  }
} as const;

export function formatFullAddress() {
  return `${business.addressLine1}, ${business.city}, ${business.region} ${business.postalCode}`;
}

export function telHref() {
  return `tel:${business.phoneE164}`;
}

export function smsHref(prefill?: string) {
  const body = encodeURIComponent(prefill ?? business.smsMessageTemplate);
  // iOS supports sms:+1...&body= ; Android varies. This is generally OK.
  return `sms:${business.phoneE164}?&body=${body}`;
}
