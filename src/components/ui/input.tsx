import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular h-12 w-full rounded-2xl bg-neutral-600 px-3 py-2 text-neutral-200 outline-none placeholder:text-neutral-200 md:px-4',
        'focus:ring-[1px] focus:ring-neutral-200',
        className
      )}
      {...props}
    />
  );
}

export { Input };
