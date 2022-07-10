import React from 'react';

const Checkbox: React.FC<Props & JSX.IntrinsicElements['input']> = ({
  id,
  // appearance = 'primary',
  label,
  ...rest
}) => {
  const errorId = `error-${id}`;

  return (
    <label className="flex cursor-pointer items-start">
      <input
        {...rest}
        type="checkbox"
        id={id}
        aria-describedby={errorId}
        className="radio-btn-input absolute p-0 opacity-0"
      />
      <span className="radio-btn-control relative inline-block h-4 w-4 rounded-xl border border-solid border-x-green-default text-green-default" />
      <span className="-mt-1 pl-4">{label}</span>
    </label>
  );
};
export default Checkbox;

const COLOR = {
  primary: 'bg-green-default',
  secondary: 'bg-gray-default'
};

type Props = {
  appearance?: keyof typeof COLOR;
  id: string;
  label?: React.ReactNode;
};
