import React from 'react';
import Link from 'next/link';
import ctl from '@netlify/classnames-template-literals';
import clsx from 'clsx';

/** Available sizes & specific classes */
const SIZES = {
  lg: 'px-10 py-3.5 min-w-[393px]',
  md: 'px-10 py-3.5',
  sm: 'py-2.5 px-4'
} as const;

/** Available colors & specific classes */
const COLORS = {
  primary: 'bg-green-default',
  lightPrimary: 'bg-green-50 text-green-default',
  outlinePrimary:
    'text-green-default shadow-[inset_0_0_0_1px] shadow-green-default font-normal',
  outlineGray:
    'text-grey-200 shadow-[inset_0_0_0_1px] shadow-grey-200 font-normal'
} as const;

type StylingProps = {
  /** If it has icons */
  containsIcons?: boolean;

  /** Button is disabled */
  disabled?: boolean;

  /** Size */
  size?: keyof typeof SIZES;

  /** Color */
  color?: keyof typeof COLORS;
};

type ConfigProps = {
  /** If it is a link */
  isLink?: boolean;

  isDisabled?: boolean;

  /** Has loading state */
  isLoading?: boolean;

  /** Text to show during loading */
  loadingText?: React.ReactNode;
};

const Button = ({
  loadingText = null,
  size = 'md',
  color = 'primary',
  isLink,
  containsIcons,
  children,
  isDisabled = false,
  isLoading = false,
  ...rest
}: React.PropsWithChildren<
  StylingProps &
    ConfigProps &
    JSX.IntrinsicElements['button'] &
    JSX.IntrinsicElements['a']
>) => {
  const buttonClasses = ctl(
    clsx(`
    flex
    items-center
    justify-center
    rounded-lg
    max-w-xs   
    font-semibold
    text-white-default
    leading-6
    ${
      isDisabled
        ? 'cursor-not-allowed opacity-30'
        : isLoading
        ? 'cursor-progress'
        : 'cursor-auto'
    }
    ${SIZES[size]}
    ${COLORS[color]}
  `)
  );

  if (isLink) {
    return (
      <Link href={rest.href ?? ''}>
        <a className={buttonClasses} {...rest}>
          {isLoading ? loadingText || 'Loading...' : <span>{children}</span>}
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={isDisabled} {...rest}>
      {isLoading ? loadingText || 'Loading...' : <span>{children}</span>}
    </button>
  );
};
export default Button;
