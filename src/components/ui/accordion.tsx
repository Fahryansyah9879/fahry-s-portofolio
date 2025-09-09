'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'mb-4 h-fit rounded-2xl bg-gradient-to-l from-[#8746EB] to-[#DC49A6] transition-all last:mb-0 data-[state=open]:p-0.5 md:mb-5',
        className
      )}
      {...props}
    >
      <div className='rounded-2xl bg-neutral-500 p-4 md:px-6'>
        {props.children}
      </div>
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'text-md group/trigger flex flex-1 cursor-pointer items-start justify-between text-left font-semibold text-neutral-100 transition-all md:text-xl',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <Image
            src='/icons/icon-arrow-bottom.svg'
            alt='arrow-bottom'
            width={16}
            height={16}
            className='group-data-[state=open]/trigger:hidden'
          />
          <Image
            src='/icons/icon-arrow-top.svg'
            alt='arrow-top'
            width={16}
            height={16}
            className='group-data-[state=closed]/trigger:hidden'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden'
      {...props}
    >
      <div
        className={cn(
          'text-sm-regular mt-3 text-neutral-200 md:mt-4',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
