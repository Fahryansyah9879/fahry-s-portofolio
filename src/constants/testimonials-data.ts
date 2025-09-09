import { StaticImageData } from 'next/image';

import ProfileSrc1 from '../../public/images/profile1.png';
import ProfileSrc2 from '../../public/images/profile2.png';
import ProfileSrc3 from '../../public/images/profile3.png';

type Testimonial = {
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

export const testimonialsData: Testimonial[] = [
  {
    profileSrc: ProfileSrc1,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    profileSrc: ProfileSrc2,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    profileSrc: ProfileSrc3,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
];
