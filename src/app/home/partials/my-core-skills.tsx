'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { CoreSkillsData } from '@/constants/core-skills-data';
const MyCoreSkills: React.FC = () => {
  return (
    <Section
      id='skills'
      className='relative'
      title='My Core Skill'
      subtitle='An overview of the key technologies and frameworks I specialize in'
    >
      <div className='flex flex-wrap items-center gap-6 overflow-hidden md:gap-26'>
        {/* left column */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          className='relative flex-[6.4] basis-80'
          style={{ height: 'clamp(17.5rem, 42.63vw, 32.19rem)' }}
        >
          {/*  small circles */}
          <div>
            <div
              className='absolute -bottom-[1%] left-1/2 translate-x-[200.5%] rounded-full bg-neutral-400'
              style={{
                width: 'clamp(0.55rem, 1.32vw, 1rem)',
                height: 'clamp(0.55rem, 1.32vw, 1rem)',
              }}
            />

            <div
              className='absolute top-[1%] left-1/2 translate-x-[455%] rounded-full bg-neutral-400'
              style={{
                width: 'clamp(0.55rem, 1.32vw, 1rem)',
                height: 'clamp(0.55rem, 1.32vw, 1rem)',
              }}
            />

            <div
              className='absolute top-[18.5%] right-1/2 -translate-x-[662%] rounded-full bg-neutral-400'
              style={{
                width: 'clamp(0.55rem, 1.32vw, 1rem)',
                height: 'clamp(0.55rem, 1.32vw, 1rem)',
              }}
            />

            <div
              className='absolute top-[36.4%] left-1/2 translate-x-[1081%] rounded-full bg-neutral-400'
              style={{
                width: 'clamp(0.55rem, 1.32vw, 1rem)',
                height: 'clamp(0.55rem, 1.32vw, 1rem)',
              }}
            />

            <div
              className='absolute top-[43%] right-1/2 -translate-x-[755%] rounded-full bg-neutral-400'
              style={{
                width: 'clamp(0.55rem, 1.32vw, 1rem)',
                height: 'clamp(0.55rem, 1.32vw, 1rem)',
              }}
            />
          </div>

          {/* icon */}
          <motion.div
            className='absolute top-[30%] left-1/2 -translate-x-[6%] rounded-[8px] bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-[1.5px]'
            animate={{
              rotate: -360, // Counter-rotation untuk membatalkan rotasi parent
            }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          >
            <div
              className='flex items-center justify-center rounded-[8px] bg-neutral-500'
              style={{
                width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
                height: 'clamp(2.69rem, 6.62vw, 5.00rem)',
              }}
            >
              <Image
                src='/icons/icon-redux.svg'
                alt=''
                className='max-lg:h-7 max-lg:w-7'
                width={52}
                height={52}
              />
            </div>
          </motion.div>
          <motion.div
            className='absolute top-[66%] left-1/2 translate-x-[6%] rounded-[8px] bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-[1.5px]'
            animate={{
              rotate: -360, // Counter-rotation untuk membatalkan rotasi parent
            }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          >
            <div
              className='flex items-center justify-center rounded-[8px] bg-neutral-500'
              style={{
                width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
                height: 'clamp(2.69rem, 6.62vw, 5.00rem)',
              }}
            >
              <Image
                src='/icons/icon-typescript.svg'
                alt=''
                className='max-lg:h-7 max-lg:w-7'
                width={52}
                height={52}
              />
            </div>
          </motion.div>
          <motion.div
            className='absolute top-[10%] left-1/2 translate-x-[46%] rounded-[8px] bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-[1.5px]'
            animate={{
              rotate: -360, // Counter-rotation untuk membatalkan rotasi parent
            }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          >
            <div
              className='flex items-center justify-center rounded-[8px] bg-neutral-500'
              style={{
                width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
                height: 'clamp(2.69rem, 6.62vw, 5.00rem)',
              }}
            >
              <Image
                src='/icons/icon-css.svg'
                alt=''
                className='max-lg:h-7 max-lg:w-7'
                width={52}
                height={52}
              />
            </div>
          </motion.div>
          <motion.div
            className='absolute top-[2%] right-1/2 -translate-x-[6%] rounded-[8px] bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-[1.5px]'
            animate={{
              rotate: -360, // Counter-rotation untuk membatalkan rotasi parent
            }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          >
            <div
              className='flex items-center justify-center rounded-[8px] bg-neutral-500'
              style={{
                width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
                height: 'clamp(2.69rem, 6.62vw, 5.00rem)',
              }}
            >
              <Image
                src='/icons/icon-html.svg'
                alt=''
                className='max-lg:h-7 max-lg:w-7'
                width={52}
                height={52}
              />
            </div>
          </motion.div>
          <motion.div
            className='absolute top-[33%] right-1/2 -translate-x-[86.6%] rounded-[8px] bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-[1.5px]'
            animate={{
              rotate: -360, // Counter-rotation untuk membatalkan rotasi parent
            }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          >
            <div
              className='flex items-center justify-center rounded-[8px] bg-neutral-500'
              style={{
                width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
                height: 'clamp(2.69rem, 6.62vw, 5.00rem)',
              }}
            >
              <Image
                src='/icons/icon-javascript.svg'
                alt=''
                className='max-lg:h-7 max-lg:w-7'
                width={52}
                height={52}
              />
            </div>
          </motion.div>
          <motion.div
            className='absolute top-[65%] right-1/2 -translate-x-[66.6%] rounded-[8px] bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-[1.5px]'
            animate={{
              rotate: -360, // Counter-rotation untuk membatalkan rotasi parent
            }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          >
            <div
              className='flex items-center justify-center rounded-[8px] bg-neutral-500'
              style={{
                width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
                height: 'clamp(2.69rem, 6.62vw, 5.00rem)',
              }}
            >
              <Image
                src='/icons/icon-react.svg'
                alt=''
                className='max-lg:h-7 max-lg:w-7'
                width={52}
                height={52}
              />
            </div>
          </motion.div>

          {/* lingkaran  */}
          {/*  lingkaran terluar */}
          <div
            className='absolute right-1/2 h-auto translate-x-1/2 rounded-full border-1 border-[#242424]'
            style={{
              padding: 'clamp(2.19rem, 5.38vw, 4.06rem)',
            }}
          >
            {/* lingkaran tengah */}
            <div
              className='rounded-full border-1 border-[#242424]'
              style={{
                padding: 'clamp(2.00rem, 4.97vw, 3.75rem)',
                width: 'clamp(13.13rem, 31.87vw, 24.06rem)',
                height: 'clamp(13.13rem, 31.87vw, 24.06rem)',
              }}
            >
              {/* lingkaran terdalam */}
              <div
                className='rounded-full border-1 border-[#242424]'
                style={{
                  width: 'clamp(9.06rem, 22.02vw, 16.63rem)',
                  height: 'clamp(9.06rem, 22.02vw, 16.63rem)',
                }}
              />
            </div>
          </div>
        </motion.div>
        {/* right column */}
        <div className='flex flex-[3.6] basis-80 flex-col gap-6 md:gap-5'>
          <CoreSkills>
            {CoreSkillsData.map((data, index) => (
              <CoreSkill key={index} {...data} />
            ))}
          </CoreSkills>
        </div>
      </div>
    </Section>
  );
};

export default MyCoreSkills;

type CoreSkillsProps = {
  children: React.ReactNode;
};
const CoreSkills: React.FC<CoreSkillsProps> = ({ children }) => {
  return <div className='flex flex-col gap-1.5 md:gap-3'>{children}</div>;
};
type CoreSkillProps = {
  name: string;
  percentage: number;
};

const CoreSkill: React.FC<CoreSkillProps> = ({ name, percentage }) => {
  return (
    <div className='flex flex-col gap-1.5 md:gap-3'>
      <div className='flex items-center justify-between'>
        <h4 className='text-sm-semibold md:text-md-semibold text-neutral-100'>
          {name}
        </h4>
        <h4 className='text-sm-semibold md:text-md-semibold text-neutral-100'>
          {percentage}%
        </h4>
      </div>
      <div className='h-3 w-full rounded-full bg-neutral-400'>
        <motion.div
          initial={{ width: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ type: 'spring', damping: 50, duration: 1 }}
          whileInView={{ width: `${percentage}%` }}
          className='h-full rounded-full bg-gradient-to-l from-[#8746EB] to-[#DC49A6]'
        />
      </div>
    </div>
  );
};
