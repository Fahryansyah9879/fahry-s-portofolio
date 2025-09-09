import { clsx } from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { careerJourneyData } from '@/constants/career-journeys-data';

const CareerJourney: React.FC = () => {
  return (
    <Section
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
    >
      <CareerJourneyCards>
        {careerJourneyData.map((data, index) => (
          <CareerJourneyCard key={index} {...data} />
        ))}
      </CareerJourneyCards>
    </Section>
  );
};

export default CareerJourney;
type CareerJourneyCardsProps = {
  children: React.ReactNode;
};

const CareerJourneyCards: React.FC<CareerJourneyCardsProps> = ({
  children,
}) => {
  return (
    <div className='grid grid-cols-[1.25rem_auto] gap-x-4 md:grid-cols-[1.5rem_auto] md:gap-x-6'>
      {children}
    </div>
  );
};

type CareerJourneyCardProps = {
  jobTitle: string;
  company: string;
  period: string;
  achievements: string[];
};
const CareerJourneyCard: React.FC<CareerJourneyCardProps> = ({
  jobTitle,
  company,
  period,
  achievements,
}) => {
  return (
    <>
      {/* left column */}
      <div
        className={clsx(
          'group relative mb-4 last:mb-0 md:mb-6 [&:nth-last-child(2)]:mb-0',
          // target child
          '[&:nth-last-child(2)>.line-decoration]:h-0'
        )}
      >
        {/* line decoration */}
        <div className='line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-1 -translate-x-1/2 bg-gradient-to-r from-[#8746EB] to-[#DC49A6] md:h-[calc(100%+1.5rem)] md:w-1.5' />

        {/* index circle */}
        <span className='flex-center bg-primary-100 absolute inset-x-0 aspect-square rounded-full'>
          <span className='h-2.5 w-2.5 rounded-full bg-gradient-to-l from-[#8746EB] to-[#DC49A6] md:h-3 md:w-3' />
        </span>
      </div>
      {/* right column */}
      <div className='mb-6 flex flex-col gap-3 rounded-3xl bg-neutral-500 p-3 text-white last:mb-0 md:gap-5 md:p-6'>
        {/* jobTitle */}
        <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
          {jobTitle}
        </h3>

        {/* info company and  period*/}
        <div className='flex-start flex-wrap gap-3'>
          <div className='flex-center gap-1.5'>
            <Image
              src='/icons/icon-company.svg'
              alt='icon-company'
              width={24}
              height={24}
              className='max-md:h-5 max-md:w-5'
            />
            <p className='md:text-md-regular text-sm-regular text-neutral-100'>
              {company}
            </p>
          </div>
          <div className='hidden h-1 w-1 rounded-full bg-neutral-100 md:block' />
          <div className='flex-center gap-1.5'>
            <Image
              src='/icons/icon-calendar.svg'
              alt='icon-company'
              width={24}
              height={24}
              className='max-md:h-5 max-md:w-5'
            />
            <p className='md:text-md-regular text-sm-regular text-neutral-100'>
              {period}
            </p>
          </div>
        </div>

        {/* achievements */}
        {achievements.map((achievement, index) => (
          <div key={index} className='flex-start gap-2'>
            <div className='h-1 w-1 shrink-0 rounded-full bg-neutral-200' />
            <p className='text-sm-regular md:text-md-regular text-neutral-200'>
              {achievement}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
