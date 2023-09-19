import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-separator'

import { cn } from '@jdion/tailwindcss/classnames'

const Separator = forwardRef<
ElementRef<typeof Root>,
ComponentPropsWithoutRef<typeof Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-slate-200 dark:bg-slate-800',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  ),
)

Separator.displayName = Root.displayName

export { Separator }
