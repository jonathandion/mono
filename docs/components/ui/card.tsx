import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@jdion/tailwindcss/classnames'

const Card = forwardRef<
HTMLDivElement,
HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
      className,
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

Card.displayName = 'Card'

const CardHeader = forwardRef<
HTMLDivElement,
HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
HTMLParagraphElement,
HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
HTMLParagraphElement,
HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<
HTMLDivElement,
HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<
HTMLDivElement,
HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
