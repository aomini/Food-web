import * as React from 'react';
import clsx from 'clsx';

import IComponentProps from '@/types/theme/IComponentProps';

interface IBadge extends Omit<IComponentProps, 'color'> {
  children: React.ReactNode;
  className?: string;
  color: 'green' | 'red';
  capitalize?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}

const Badge: React.FC<IBadge> = ({
  children,
  color,
  className,
  capitalize = false,
  uppercase = false,
  lowercase = false
}) => {
  const classes = clsx(
    'px-3 py-2 font-semibold rounded-lg text-xs',
    {
      'bg-green-light text-green-default': color === 'green',
      'bg-red-light text-red-100': color === 'red',
      lowercase,
      capitalize,
      uppercase
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

export default Badge;
