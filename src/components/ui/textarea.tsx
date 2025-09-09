import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-sm-regular md:text-md-regular h-42 w-full rounded-2xl bg-neutral-600 p-3 text-neutral-200 outline-none placeholder:text-neutral-200 md:p-4',
        'focus:ring-[1px] focus:ring-neutral-200',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
