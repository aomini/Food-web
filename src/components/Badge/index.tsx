import * as React from 'react';
import clsx from 'clsx';

import IComponentProps from '@/types/theme/IComponentProps';

interface IBadge extends Omit<IComponentProps, 'color'> {
  children: React.ReactNode;
  className?: string;
  color?: 'green' | 'red';
  transform?: 'normal' | 'lower' | 'upper' | 'capital';
}

const Badge: React.FC<IBadge> = ({
  children,
  color = 'green',
  className,
  transform = 'capital'
}) => {
  const classes = clsx(
    'px-3 py-2 font-semibold rounded-lg text-xs',
    {
      'bg-green-light text-green-default': color === 'green',
      'bg-red-light text-red-100': color === 'red',
      lowercase: transform === 'lower',
      normalcase: transform === 'normal',
      capitalize: transform === 'capital',
      uppercase: transform === 'upper'
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

export default Badge;
