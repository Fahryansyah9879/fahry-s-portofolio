'use client';
import emailsjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const contactSchema = z.object({
  name: z
    .string({ error: 'Name is required' })
    .min(5, 'Name must be at least 5 character long')
    .max(35, 'Name must be at most 35 character long'),
  email: z.email('Please enter a valid email address'),
  message: z
    .string({ error: 'Message is required' })
    .min(20, 'Message must be at least 20 character long')
    .max(500, 'Message must be at most 500 character long'),
});

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [showDialog, setShowDialog] = useState(false);
  const [variant, setVariant] = useState<'success' | 'error'>('error');
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailsjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setVariant('error');
    } finally {
      setLoading(false);
      setShowDialog(true);
    }
  }

  return (
    <section
      className='custom-container flex-between relative flex-wrap py-10 max-lg:gap-6 md:pt-20 md:pb-25'
      id='contact'
    >
      <div className='max-w-114.25'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          Contact Me
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200'>
          Feel free to drop a message for any inquiries or collaborations.
        </p>
      </div>

      <Form {...form}>
        <form
          className='h-98 grow-1 space-y-4 rounded-3xl p-4 backdrop-blur-2xl md:h-108 md:space-y-6 md:rounded-2xl md:p-6 lg:max-w-120'
          style={{ background: 'rgba(255, 255, 255, 0.05)' }}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <Input placeholder='Name' {...field} disabled={loading} />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <Input placeholder='Email' {...field} disabled={loading} />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <Textarea placeholder='Message' {...field} disabled={loading} />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full' disabled={loading}>
            Send
          </Button>
        </form>
      </Form>
      {/* gradient */}
      <Image
        src='/images/contact-section.png'
        alt='contact-section'
        width={751}
        height={448}
        className='absolute -right-25 bottom-0 -z-10'
      />

      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </section>
  );
};

export default ContactForm;
