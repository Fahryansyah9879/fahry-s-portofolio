import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogBody,
  DialogClose,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading: boolean;
}
const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogBody>
          <Image
            src={
              variant === 'success'
                ? '/images/dialog-success.png'
                : '/images/dialog-error.png'
            }
            className='max-md:h-29.5 max-md:w-30.75'
            width={168}
            height={162}
            alt={variant === 'success' ? 'success' : 'error'}
          />

          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Message failed to send.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'An unexpected error occurred. Kindly try again in a few moments.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button className='w-full'>
              {loading ? 'Loading...' : 'Back to Home'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
