import { business } from '@/lib/business';

type MapEmbedProps = {
  title?: string;
  height?: number; // px
  className?: string;
};

export default function MapEmbed({
  title = 'Monroe County Phone Repair Map',
  height = 360,
  className,
}: MapEmbedProps) {
  return (
    <div className={className}>
      <div className="border rounded overflow-hidden" style={{ minHeight: height }}>
        <iframe
          title={title}
          src={business.googleMapsEmbedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
