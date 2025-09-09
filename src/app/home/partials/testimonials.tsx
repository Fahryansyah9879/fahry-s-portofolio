import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials: React.FC = () => {
  return (
    <section className='py-10 md:py-20'>
      <div className='mb-8 px-6 text-center md:mb-12 md:px-0'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
          What People Say About Me
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200'>
          Hear from clients and colleagues about their experiences working with
          me.
        </p>
      </div>

      <div className='relative flex flex-col gap-3 md:gap-5'>
        <Marquee reverse>
          {testimonialsData.map((data, index) => (
            <CardTestimonial key={index} {...data} />
          ))}
        </Marquee>
        <Marquee>
          {testimonialsData.map((data, index) => (
            <CardTestimonial key={index} {...data} />
          ))}
        </Marquee>

        <div className='absolute inset-y-0 left-0 hidden w-[15%] bg-gradient-to-r from-black to-transparent md:block' />
        <div className='absolute inset-y-0 right-0 hidden w-[15%] bg-gradient-to-l from-black to-transparent md:block' />
      </div>
    </section>
  );
};

export default Testimonials;

type CardTestimonialProps = {
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};
const CardTestimonial: React.FC<CardTestimonialProps> = ({
  profileName,
  profileSrc,
  profileOccupation,
  description,
}) => {
  return (
    <div className='h-fit w-fit cursor-pointer rounded-2xl bg-gradient-to-l from-[#8746EB] to-[#DC49A6] transition-all delay-75 duration-200 ease-in hover:p-[1.15px]'>
      <div
        className='flex flex-col gap-3 rounded-2xl bg-neutral-500 p-4 md:gap-5 md:p-5'
        style={{ width: ' clamp(18.88rem, 41.39vw, 31.25rem)' }}
      >
        <div className='flex gap-2'>
          <Image
            src={profileSrc}
            alt={profileName}
            width={60}
            height={60}
            className='rounded-full max-md:h-12 max-md:w-12'
          />
          <div className='flex flex-col gap-0.75'>
            <h4 className='text-sm-bold md:text-md-bold text-neutral-100'>
              {profileName}
            </h4>
            <p className='text-sm-regular md:text-md-regular text-neutral-200'>
              {profileOccupation}
            </p>
          </div>
        </div>
        <p className='text-sm-regular md:text-md-regular text-neutral-200'>
          {description}
        </p>
      </div>
    </div>
  );
};
