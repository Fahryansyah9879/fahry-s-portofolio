import { StaticImageData } from 'next/image';

import Project1 from '../../public/images/project1.png';
import Project2 from '../../public/images/project2.png';
import Project3 from '../../public/images/project3.png';
import Project4 from '../../public/images/project4.png';
import Project5 from '../../public/images/project5.png';
import Project6 from '../../public/images/project6.png';

type Project = {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
};

export const projectsData: Project[] = [
  {
    imageSrc: Project1,
    title: 'Landing Page',
    description:
      "THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme 'Unity in Creativity'",
    technologies: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: Project2,
    title: 'Landing Page',
    description:
      'Private hospital in the city of Padang that provides special surgical services.',
    technologies: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: Project3,
    title: 'Landing Page',
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    technologies: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: Project4,
    title: 'Landing Page',
    description:
      'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa) of experience as an internet solution provider company',
    technologies: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: Project5,
    title: 'Landing Page',
    description: 'UKUR is a constructor and interior marketplace in Indonesia.',
    technologies: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: Project6,
    title: 'Landing Page',
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    technologies: ['React', 'HTML', 'CSS'],
  },
];
