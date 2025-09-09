import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

const Footer: React.FC = () => {
  return (
    <footer className='w-full bg-neutral-500'>
      <div className='custom-container flex flex-col-reverse items-start gap-6 py-10 md:flex-row md:items-center md:justify-between md:gap-0'>
        <div className='flex-start gap-4'>
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={40}
            height={40}
            className='max-md:h-9 max-md:w-9'
          />
          <p className='text-sm-regular md:text-md-regular text-neutral-200'>
            © alex2024
          </p>
        </div>
        <div className='flex-center gap-4'>
          {socialMediaData.map((data, index) => (
            <Link
              key={index}
              href={data.href}
              className='flex-center size-10 rounded-full border border-neutral-400 md:size-12'
            >
              <Image src={data.src} alt={data.alt} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
