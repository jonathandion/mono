import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './table.module.css'
import { cn } from '@jdion/tailwindcss/classnames'

export const Row: FC<PropsWithChildren<HTMLAttributes<HTMLElementTagNameMap['tr']>>> = ({
  children,
  className,
  ...otherProps
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <tr className={cn('border-b border-neutral-700/50 text-left', className)} {...otherProps}>
    {children}
  </tr>
)

export const Cell: FC<PropsWithChildren<HTMLAttributes<HTMLElementTagNameMap['td']>>> = ({
  children,
  className,
  ...otherProps
}) => (
  <td
    className={cn(
      'whitespace-pre py-2 pl-6 font-mono text-sm leading-6 first:pl-0 first:font-semibold first:text-primary [&:nth-child(2)]:text-slate-400',
      className,
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </td>
)

export const Body: FC<PropsWithChildren<HTMLAttributes<HTMLElementTagNameMap['tbody']>>> = ({
  children,
  className,
  ...otherProps
}) => (
  <tbody className={cn('align-baseline text-gray-100', className)} 
  // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}>
    {children}
  </tbody>
)

export const Root: FC<PropsWithChildren<HTMLAttributes<HTMLElementTagNameMap['table']>>> = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={`-mx-6 mt-6 overflow-x-auto overscroll-x-contain px-6 ${styles.container}`}>
    <table className={cn('w-full border-collapse text-sm', className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}>
      {children}
    </table>
  </div>
)

export const HeadCell: FC<PropsWithChildren<HTMLAttributes<HTMLElementTagNameMap['th']>>> = ({
  children,
  className,
  ...otherProps
}) => (
  <th className={cn('py-2 pl-6 font-semibold first:pl-0', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}>
    {children}
  </th>
)

export const Head: FC<PropsWithChildren<HTMLAttributes<HTMLElementTagNameMap['thead']>>> = ({
  children,
  ...otherProps
  // eslint-disable-next-line react/jsx-props-no-spreading
}) => <thead {...otherProps}>{children}</thead>
