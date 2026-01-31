import SocialLinks from '@/components/common/SocialLinks';
import InstagramEmbed from '@/components/common/InstagramEmbed';

type Review = {
  name: string;
  text: string;
  source?: 'Google' | 'Facebook' | 'Other';
};

const reviews: Review[] = [
  {
    name: 'Jim E',
    text: 'Great service at a good price and job well done. I will definitely recommend Joe to my friends and co-workers. New screen in 30 minutes.',
    source: 'Google',
  },
  {
    name: 'Gracey S',
    text: 'He did a quick and great job, my screen and battery were fixed in less than an hour, also very respectful! Thank you!',
    source: 'Google',
  },
  {
    name: 'Andy P',
    text: 'Joe was quick to respond and had a glass repair on my iphone done in 90min. He was very professional. His rates are good too. The quality of the glass replacement was excellent, and he said he would stand by his work. Will be recommending him for friends that need mobile phone repairs',
    source: 'Google',
  },
];

export default function ReviewsPage() {
  return (
    <main className="py-5">
      <div className="container">
        <div className="mcpr-card mb-4  reviews-page">
          <h1 className="h3 fw-bold mb-2">Reviews & Social</h1>
          <p className="text-muted mb-3">
            See what customers are saying, and follow us for recent repairs and updates.
          </p>

          <SocialLinks />
        </div>

        <div className="row g-4 align-items-start">
          {/* Reviews list */}
          <div className="col-12 col-lg-12">
            <div className="mcpr-card  reviews-page">
              <div className="d-flex justify-content-between align-items-end gap-3 mb-3">
                <h2 className="h5 fw-bold m-0">Customer Reviews</h2>
                
              </div>

              <ul className="list-unstyled m-0">
                {reviews.map((r, idx) => (
                  <li key={`${r.name}-${idx}`} className="border-top pt-3 mt-3">
                    <div className="fw-bold">{r.name}</div>
                    {r.source ? <div className="text-muted small">{r.source}</div> : null}
                    <p className="mt-2 mb-0">{r.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-4 d-flex flex-wrap gap-2">
                {/* Optional: you can later replace with your real Google review link */}
                <a className="btn btn-dark" href="https://g.page/r/Ce-9avCpf-JPEAI/review">
                  Leave a Review
                </a>
                
              </div>

              
            </div>
          </div>

        
        </div>
      </div>
    </main>
  );
}
