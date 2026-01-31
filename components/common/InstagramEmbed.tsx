'use client';

import { useEffect } from 'react';

export default function InstagramEmbed() {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="mcpr-card d-flex justify-content-center">
      <div
        style={{ width: '100%', maxWidth: 540 }}
        dangerouslySetInnerHTML={{
          __html: `
<blockquote class="instagram-media" 
  data-instgrm-permalink="https://www.instagram.com/monroecountyphonerepair/?utm_source=ig_embed&amp;utm_campaign=loading"
  data-instgrm-version="14"
  style="width:100%; margin:0 auto;">
</blockquote>
          `,
        }}
      />
    </div>
  );
}
