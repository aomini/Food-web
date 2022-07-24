import React, { MutableRefObject } from 'react';
import clsx from 'clsx';

import Icon from '../../Icon';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<
  HTMLInputElement,
  Props & JSX.IntrinsicElements['input']
>(
  (
    {
      id,
      label,
      type = 'text',
      value = '',
      className,
      error = null,
      suppressErrorMessage = false,
      icon = null,
      startFocused = false,
      ...props
    },
    ref
  ) => {
    /** Outside ref takes precedence */
    const selfRef = React.useRef(null);
    const didFocusOnStart = React.useRef(false);
    const inputRef = (ref as MutableRefObject<HTMLInputElement>) || selfRef;

    const errorID = `${id}-error`;

    React.useEffect(() => {
      if (inputRef.current && startFocused && !didFocusOnStart.current) {
        inputRef.current.focus();
        didFocusOnStart.current = true;
      }
    }, [inputRef, startFocused, didFocusOnStart]);

    const inputElStyles = clsx(`
    relative
    placeholder:text-grey-200
    appearance-none
    border-none
    block
    outline-none
    w-full
    m-0
    disabled:cursor-not-allowed
    disabled:opacity-50    
    bg-white-default
    text-black-default
    text-sm
    leading-[22px]
    px-4
    py-[14px]
    rounded-lg
    shadow-input
    focus:shadow-green-default
    focus:placeholder:text-black-default
    ${!!error && 'shadow-red-default focus:shadow-red-default'}
  `);

    const inputEl = (
      <input
        id={id}
        ref={inputRef}
        value={value}
        type={type}
        aria-describedby={errorID}
        aria-invalid={!!error}
        className={inputElStyles}
        {...props}
      />
    );

    return (
      <div className={className}>
        <label
          className="mb-3 block text-sm font-semibold leading-6 text-black-default first-letter:capitalize"
          htmlFor={id}
        >
          {label}
        </label>
        {icon && <Icon icon={icon} aria-hidden />}
        {inputEl}
        {suppressErrorMessage && (
          <small className="mt-3 text-red-default">{error}</small>
        )}
      </div>
    );
  }
);

type Props = {
  id: string;
  value?: string;
  label: string;
  className?: string;
  type?: string;
  appearance?: 'default';
  icon?: React.ComponentProps<typeof Icon>['icon'];
  error?: string;
  suppressErrorMessage?: boolean;
  startFocused?: boolean;
};

export default Input;
