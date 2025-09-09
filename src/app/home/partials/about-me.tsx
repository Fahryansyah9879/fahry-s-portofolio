'use client';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import React from 'react';

import { achievementsData } from '@/constants/achievements-data';

const AboutMe: React.FC = () => {
  return (
    <section
      className='custom-container max-xs:-mt-20 -mt-45 md:-mt-12'
      id='about'
    >
      <div
        className='flex-center relative w-full bg-gradient-to-l from-[#8746EB] to-[#DC49A6]'
        style={{
          height: 'clamp(7.88rem, 38.00vw, 28.69rem)',
          borderRadius: ' clamp(0.75rem, 1.99vw, 1.5rem)',
        }}
      >
        <Image
          className='object-contain'
          src='/images/someone-img.png'
          fill
          alt='someone'
        />

        <Image
          className='absolute max-md:h-6 max-md:w-6'
          src='/icons/icon-video.svg'
          width={70}
          height={70}
          alt='button video'
        />
      </div>
      <div className='mt-10 block gap-3 md:mt-20 lg:flex'>
        <motion.h2
          className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          initial={{ opacity: 0, x: -100 }}
        >
          Who am I?
        </motion.h2>
        <motion.p
          className='text-sm-regular md:text-md-regular mt-3 max-w-175 text-neutral-200 lg:mt-0'
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 1.2 }}
          initial={{ opacity: 0, x: 100 }}
        >
          Hi, I’m Alex, a Front-End Developer & Web Programming Instructor based
          in Jakarta. With over{' '}
          <span className='font-bold text-neutral-100'>
            3 years of experience
          </span>
          , I specialize in crafting interactive, responsive, and user-friendly
          websites that deliver exceptional digital experiences. My expertise
          spans across various industries, including e-commerce, education, and
          SaaS. I am proficient in modern front-end technologies, clean coding
          practices, and performance optimization.{' '}
        </motion.p>
      </div>

      <Achievements>
        {achievementsData.map((data, index) => (
          <Achievement
            key={index}
            title={data.title}
            description={data.description}
            order={index + 1}
          />
        ))}
      </Achievements>
    </section>
  );
};

export default AboutMe;

type AchievementsProps = {
  children: React.ReactNode;
};

const Achievements: React.FC<AchievementsProps> = ({ children }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className='max-xs:overflow-hidden my-10 grid grid-cols-2 gap-x-3 gap-y-5 md:my-20 md:grid-cols-4 md:gap-x-5 md:gap-y-0'
    >
      {children}
    </motion.div>
  );
};

type AchievementProps = {
  title: string;
  description: string;
  order: number;
};

const Achievement: React.FC<AchievementProps> = ({
  order,
  title,
  description,
}) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      {order % 2 !== 0 ? (
        <motion.div
          variants={itemVariants}
          className='h-fit w-fit rounded-full bg-gradient-to-l from-[#8746EB] to-[#DC49A6] p-0.25 transition-all hover:shadow-[0px_4px_24px_rgba(135,70,235,0.8)]'
        >
          <div
            className='flex-center flex-col gap-1.5 rounded-full bg-neutral-500 p-2 md:gap-2 md:p-5'
            style={{
              width: 'clamp(10.25rem, 22.6vw, 17.06rem)',
              height: 'clamp(10.25rem, 22.6vw, 17.06rem)',
            }}
          >
            <h3 className='text-display-sm lg:text-display-2xl font-extrabold text-neutral-100'>
              {title}
            </h3>
            <p className='text-sm-regular lg:text-md-regular text-neutral-100'>
              {description}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={itemVariants}
          className='color-gradient flex-center flex-col gap-1.5 rounded-full p-2 md:gap-2 md:p-5'
          style={{
            width: 'clamp(10.25rem, 22.6vw, 17.06rem)',
            height: 'clamp(10.25rem, 22.6vw, 17.06rem)',
          }}
        >
          <h3 className='text-display-sm lg:text-display-2xl font-extrabold text-neutral-100'>
            {title}
          </h3>
          <p className='text-sm-regular lg:text-md-regular text-neutral-100'>
            {description}
          </p>
        </motion.div>
      )}
    </>
  );
};
