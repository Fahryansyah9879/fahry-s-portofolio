import { StaticImageData } from 'next/image';

import DribbleIcon from '../../public/icons/icon-dribble.svg';
import InstagramIcon from '../../public/icons/icon-instagram.svg';
import LinkedInIcon from '../../public/icons/icon-linkedin.svg';

type Icon = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  { href: 'https://www.dribbble.com/', src: DribbleIcon, alt: 'Dribble' },
  {
    href: 'https://www.instagram.com/',
    src: InstagramIcon,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: LinkedInIcon,
    alt: 'LinkedIn',
  },
];
