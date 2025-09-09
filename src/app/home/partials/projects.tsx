import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { projectsData } from '@/constants/projects-data';

const Projects: React.FC = () => {
  return (
    <section className='custom-container py-10 md:py-20' id='projects'>
      <div className='flex-between flex-wrap gap-3 md:gap-0'>
        <h2 className='text-display-sm md:text-display-2xl max-w-[620px] font-bold text-neutral-100 md:font-extrabold'>
          Experience in Front-End Development
        </h2>
        <p className='text-sm-regular md:text-md-regular max-w-[513px] text-neutral-200'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>
      </div>
      <CardsProject>
        {projectsData.map((data, index) => (
          <CardProject key={index} {...data} />
        ))}
      </CardsProject>
    </section>
  );
};

export default Projects;

type CardsProjectProps = {
  children: React.ReactNode;
};

const CardsProject: React.FC<CardsProjectProps> = ({ children }) => {
  return (
    <div className='mt-8 flex flex-wrap gap-8 md:mt-12 md:gap-6'>
      {children}
    </div>
  );
};

type CardProjectProps = {
  title: string;
  imageSrc: StaticImageData;
  technologies: string[];
  description: string;
};

const CardProject: React.FC<CardProjectProps> = ({
  title,
  imageSrc,
  description,
  technologies,
}) => {
  return (
    <div className='flex-1 basis-70'>
      <Image
        src={imageSrc}
        alt={title}
        className='aspect-square rounded-2xl object-cover md:rounded-4xl'
      />
      <div className='mt-3 flex flex-col gap-3 md:mt-4 md:gap-10'>
        <div className='flex flex-col gap-2 md:gap-3'>
          <h4 className='text-lg-bold md:text-xl-bold text-neutral-100'>
            {title}
          </h4>
          <div className='flex gap-3'>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className='text-sm-regular rounded-full border border-neutral-300 px-4 py-2 text-white'
              >
                {tech}
              </div>
            ))}
          </div>
          <p className='text-sm-regular md:text-md-regular h-15 overflow-hidden text-neutral-200 max-md:h-12'>
            {description}
          </p>
        </div>
        <div className='flex gap-1.5'>
          <p className='bg-gradient-to-l from-[#8746EB] to-[#DC49A6] bg-clip-text text-transparent'>
            Visit
          </p>
          <Image
            src='/icons/icon-up-right.svg'
            className='cursor-pointer'
            width={24}
            height={24}
            alt='icon-up-right'
          />
        </div>
      </div>
    </div>
  );
};
