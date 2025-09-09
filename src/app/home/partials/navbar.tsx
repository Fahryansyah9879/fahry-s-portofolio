'use client';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 200],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 200],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='custom-container flex-between h-16 md:h-21'>
        <Image
          src='/icons/logo.svg'
          alt='logo'
          width={40}
          height={40}
          className='max-md:h-7 max-md:w-7'
        />
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-6'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-secondary-200 text-md-regular px-2 transition-all'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className='hidden lg:flex' asChild>
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
        <div className='flex items-center justify-center gap-4 lg:hidden'>
          <Link
            href='#contact'
            className='color-gradient flex-center h-10 w-10 rounded-full p-2'
          >
            <Image
              src='/icons/icon-email.svg'
              alt='email'
              width={20}
              height={20}
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className='cursor-pointer' size={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src='/icons/logo.svg'
                    alt='logo'
                    width={28}
                    height={28}
                  />
                </SheetTitle>
                <nav className='mt-5'>
                  <ul className='flex flex-col gap-6'>
                    {navigationData.map((data) => (
                      <li key={data.label}>
                        <SheetClose asChild>
                          <Link
                            href={data.href}
                            className='hover:text-secondary-200'
                          >
                            {data.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                <Button asChild className='mt-6 w-full'>
                  <SheetClose asChild>
                    <Link href='#contact'>
                      <Image
                        src='/icons/icon-email.svg'
                        alt='email'
                        width={20}
                        height={20}
                      />
                      Hire me
                    </Link>
                  </SheetClose>
                </Button>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
