import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constants/faq-data';

const FAQ: React.FC = () => {
  return (
    <Section
      id='faq'
      title='Frequently Asked Question'
      subtitle='Find answers to some of the frequently asked questions below.'
    >
      <Accordion type='multiple'>
        {FAQData.map((data, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{data.title}</AccordionTrigger>
            <AccordionContent>{data.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
