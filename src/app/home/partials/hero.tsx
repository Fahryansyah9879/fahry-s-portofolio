import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section
      id='home'
      className={`relative h-224.5 w-full bg-[url('/images/hero-section.png')] bg-cover bg-right-top pt-26 md:bg-left-top md:pt-55.5`}
    >
      <div className='color-gradient mx-auto w-fit rounded-full p-0.25'>
        <div className='text-xs-medium md:text-md-medium w-fit rounded-full bg-neutral-500 px-4 py-2 text-neutral-100 md:px-6'>
          👨 Alex’s Portfolio
        </div>
      </div>

      <div className='relative z-10 px-6 lg:px-0'>
        {/* heading */}
        <h1 className='text-display-xl md:text-display-3xl mx-auto mt-5 max-w-239.25 text-center font-bold text-neutral-100 md:mt-6 md:font-extrabold'>
          I am a{/*  */}
          {/* mobile (Front-) */}
          <span
            className='relative ml-1 inline-block border-2 border-solid bg-gradient-to-l from-[#8746EB] to-[#DC49A6] bg-clip-text px-2 py-0 text-transparent lg:hidden'
            style={{
              borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
            }}
          >
            <div
              className='md:h-2.2 absolute -top-1 -left-1 h-1.75 w-1.5 border-[1.5px] border-solid bg-white md:w-3'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='md:h-2.2 absolute -top-1 -right-1 h-1.75 w-1.5 border-[1.5px] border-solid bg-white md:w-3'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='md:h-2.2 absolute -bottom-1 -left-1 h-1.75 w-1.5 border-[1.5px] border-solid bg-white md:w-3'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='md:h-2.2 absolute -right-1 -bottom-1 h-1.75 w-1.5 border-[1.5px] border-solid bg-white md:w-3'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            Front-
          </span>
          {/* mobile (End Developer) */}
          <span
            className='relative mx-auto mt-1.25 mr-1 inline-block border-2 border-solid bg-gradient-to-l from-[#8746EB] to-[#DC49A6] bg-clip-text px-2 py-0 text-transparent lg:hidden'
            style={{
              borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
            }}
          >
            <div
              className='absolute -top-1 -left-1.5 h-1.5 w-2 border-[1.5px] border-solid bg-white md:h-2.5 md:w-4'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='absolute -top-1 -right-1 h-1.5 w-2 border-[1.5px] border-solid bg-white md:h-2.5 md:w-4'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='absolute -bottom-1 -left-1.5 h-1.5 w-2 border-[1.5px] border-solid bg-white md:h-2.5 md:w-4'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='absolute -right-1 -bottom-1 h-1.5 w-2 border-[1.5px] border-solid bg-white md:h-2.5 md:w-4'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            End Developer
          </span>
          {/* tablet and dekstop (Front-End Developer) */}
          <span
            className='relative mx-1 hidden border-2 border-solid bg-gradient-to-l from-[#8746EB] to-[#DC49A6] bg-clip-text px-2 pb-2 text-transparent lg:inline-block'
            style={{
              borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
            }}
          >
            <div
              className='absolute -top-1 -right-3 h-2.5 w-5 border-2 border-solid bg-white'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='absolute -bottom-1.5 -left-2.5 h-2.5 w-5 border-2 border-solid bg-white'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='absolute -top-1.5 -left-2.5 h-2.5 w-5 border-2 border-solid bg-white'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            <div
              className='absolute -right-3 -bottom-2 h-2.5 w-5 border-2 border-solid bg-white'
              style={{
                borderImage: 'linear-gradient(to left, #8746EB, #DC49A6) 1',
              }}
            />
            Front-End Developer
          </span>
          & Web Programming Instructor
        </h1>

        {/* description */}
        <p className='text-sm-regular md:text-md-regular mx-auto mt-5 max-w-239 text-center text-neutral-200 md:mt-6'>
          Hi, I’m Alex, a passionate web developer with over{' '}
          <span className='font-bold text-neutral-100 md:font-semibold'>
            3 years of experience
          </span>{' '}
          in creating responsive websites. I also teach aspiring developers to
          master modern web programming and bring their ideas to life.
        </p>

        <Button asChild className='mx-auto mt-5 md:mt-6 md:w-fit'>
          <Link href='#contact'>
            <Image
              src='/icons/icon-email.svg'
              alt='email'
              width={20}
              height={20}
            />
            Hire me
          </Link>
        </Button>
      </div>

      {/* waves */}
      <div>
        {/* mobile */}
        <div
          className={`max-xs:bottom-40 absolute bottom-45 h-28.25 w-full bg-[url('/images/water-waves-vm.png')] md:hidden`}
        />
        <div
          className={`max-xs:bottom-37 absolute bottom-42 h-28.25 w-full bg-[url('/images/shadow-waves-vm.png')] md:hidden`}
        />
      </div>

      {/* dekstop */}
      <div
        className={`absolute bottom-10 hidden h-84.5 w-full bg-[url('/images/water-waves.png')] md:block`}
      />
      <div
        className={`absolute bottom-10 hidden h-84.5 w-full bg-[url('/images/shadow-waves.png')] md:block`}
      />
    </section>
  );
};

export default Hero;
