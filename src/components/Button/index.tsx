import Link from 'next/link'
import clsx from 'clsx'

import IComponentProps from '@/types/theme/IComponentProps'

interface IButtonProps extends IComponentProps {
  className?: string
  href: string
}

const Button: React.FC<IButtonProps> = ({
  className,
  color = 'green',
  size = 'md',
  variant = 'contained',
  children,
  href = ''
}) => {
  const classes = clsx(
    'px-8 rounded-md hover:ring-2 active:ring-2 focus:ring-2 outline-none transition-colors duration-300',
    {
      'py-4 text-lg  uppercase font-semibold tracking-wider': size === 'lg',
      'py-3 text-base font-medium': size === 'md',
      'py-2 text-sm font-medium': size === 'sm'
    },
    {
      'bg-green-default text-white-100 ring-green-default/50':
        variant === 'contained' && color === 'green'
    },
    {
      'bg-none border-2 border-solid': variant === 'outlined'
    },

    className
  )

  if (href) {
    return (
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
    )
  }

  return <button className={classes}>{children}</button>
}
export default Button
