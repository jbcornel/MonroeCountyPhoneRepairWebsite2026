import { business } from '@/lib/business';

type Props = {
  variant?: 'light' | 'dark';
};

export default function SocialLinks({ variant = 'dark' }: Props) {
  const cls = variant === 'light' ? 'mcpr-social mcpr-social-light' : 'mcpr-social';

  return (
    <div className="d-flex flex-wrap gap-3 align-items-center">
      <a className={cls} href={business.social.facebook} target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a className={cls} href={business.social.instagram} target="_blank" rel="noreferrer">
        Instagram
      </a>
    </div>
  );
}
