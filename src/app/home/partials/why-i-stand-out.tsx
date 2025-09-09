import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { skillsData } from '@/constants/skills-data';
const WhyIStandOut: React.FC = () => {
  return (
    <Section
      title='Why I Stand Out'
      subtitle='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <div className='rounded-3xl bg-neutral-500 px-2.5 py-6 md:px-6'>
        <div className="relative grid grid-cols-[minmax(11rem,auto)_repeat(2,auto)] gap-x-0 before:absolute before:top-0 before:[grid-row:1/2] before:h-full before:w-full before:rounded-full before:bg-gradient-to-r before:from-[#dc49a6] before:to-[#8746eb] before:content-['']">
          {/* row 1 (main row) */}
          <div className='z-10 py-3 text-center'>
            <p className='text-sm-semibold md:text-md-bold text-neutral-100'>
              Skill
            </p>
          </div>
          <div className='z-10 py-3 text-center'>
            <p className='text-sm-semibold md:text-md-bold text-neutral-100'>
              Me
            </p>
          </div>
          <div className='z-10 py-3 text-center'>
            <p className='text-sm-semibold md:text-md-bold text-neutral-100'>
              Other
            </p>
          </div>

          {/* another row */}
          {skillsData.map((data, index) => (
            <RowSkill key={index} skill={data} order={index + 1} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyIStandOut;
type RowSkillProps = {
  skill: string;
  order: number;
};
const RowSkill: React.FC<RowSkillProps> = ({ skill, order }) => {
  return (
    <>
      <div
        className={clsx(
          'border-neutral-400 py-6 text-center md:py-5',
          order !== 1 && 'border-t'
        )}
      >
        <p className='text-sm-semibold md:text-md-semibold text-neutral-100'>
          {skill}
        </p>
      </div>
      <div
        className={clsx(
          'flex-center border-neutral-400',
          order !== 1 && 'border-t'
        )}
      >
        <Image
          src='/icons/icon-cheklist.svg'
          alt='icon-checklist'
          width={20}
          height={20}
        />
      </div>
      <div
        className={clsx(
          'flex-center border-neutral-400',
          order !== 1 && 'border-t'
        )}
      >
        <Image src='/icons/icon-x.svg' alt='icon-x' width={20} height={20} />
      </div>
    </>
  );
};
