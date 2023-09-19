import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@jdion/tailwindcss/classnames'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

const Label = forwardRef<
ElementRef<typeof Root>,
ComponentPropsWithoutRef<typeof Root> &
VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(labelVariants(), className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

Label.displayName = Root.displayName

export { Label }
