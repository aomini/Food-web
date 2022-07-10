import React from 'react';
import Link from 'next/link';
import { clsx } from 'utils/withCtl';

/** Available sizes & specific classes */
const SIZES = {
  lg: 'px-10 py-3.5 min-w-[393px]',
  xl: 'px-10 py-3.5',
  md: 'px-10 py-3.5',
  xs: 'px-10 py-3.5',
  sm: 'py-2.5 px-4'
} as const;

/** Available colors & specific classes */
export const COLORS = {
  primary: 'bg-green-default text-white-default',
  lightPrimary: 'bg-green-50 text-green-default',
  outlinePrimary:
    'text-green-default shadow-[inset_0_0_0_1px] shadow-green-default font-normal',
  outlineGray:
    'text-grey-200 shadow-[inset_0_0_0_1px] shadow-grey-200 font-normal',
  ghostDanger: 'text-red-default',
  outlineDanger: 'bg-red-50 text-red-default'
} as const;

const ICON_SIZES = {
  xl: 'btn-has-icon-64',
  lg: 'btn-has-icon-56',
  md: 'btn-has-icon-48',
  sm: 'btn-has-icon-44',
  xs: 'btn-has-icon-40'
};

export type IconButtonSizesType = keyof typeof SIZES | keyof typeof ICON_SIZES;

type StylingProps = {
  /** Pill */
  pill?: boolean;

  /** If it has icons */
  containsIcon?: boolean;

  /** Button is disabled */
  disabled?: boolean;

  /** Size */
  size?: IconButtonSizesType;

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

  /** Wrapper or the component to be rendered  */
  ButtonWrapper?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

const Button = ({
  loadingText = null,
  size = 'md',
  color = 'primary',
  pill = false,
  isLink,
  containsIcon,
  children,
  isDisabled = false,
  isLoading = false,
  ButtonWrapper,
  className = '',
  ...rest
}: React.PropsWithChildren<
  StylingProps &
    ConfigProps &
    JSX.IntrinsicElements['button'] &
    JSX.IntrinsicElements['a']
>) => {
  const buttonClasses = clsx(`
    flex
    items-center
    justify-center
    ${pill ? 'rounded-full' : 'rounded-lg'}
    max-w-xs   
    font-semibold
    leading-6
    ${
      isDisabled
        ? 'cursor-not-allowed opacity-30'
        : isLoading
        ? 'cursor-progress'
        : 'cursor-auto'
    }
    ${COLORS[color]}
    ${containsIcon ? ICON_SIZES[size] : SIZES[size]}
    ${className}
  `);

  if (ButtonWrapper) {
    return (
      // @ts-ignore
      <ButtonWrapper className={buttonClasses} disabled={isDisabled} {...rest}>
        {isLoading ? (
          loadingText || 'Loading...'
        ) : (
          <span className={buttonWithIconClasses}>{children}</span>
        )}
      </ButtonWrapper>
    );
  }

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
      {isLoading ? (
        loadingText || 'Loading...'
      ) : (
        <span className={buttonWithIconClasses}>{children}</span>
      )}
    </button>
  );
};

const buttonWithIconClasses = clsx(`
  flex
  items-center
  gap-[14px]
`);

export default Button;
