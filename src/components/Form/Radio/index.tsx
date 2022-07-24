import React from 'react';

const Checkbox: React.FC<Props & JSX.IntrinsicElements['input']> = ({
  id,
  label,
  // appearance = 'primary',
  ...rest
}) => {
  const errorId = `error-${id}`;

  return (
    <label className="flex cursor-pointer items-start">
      <input
        {...rest}
        type="radio"
        id={id}
        className="radio-btn-input absolute p-0 opacity-0"
        aria-describedby={errorId}
      />
      <span className="radio-btn-control relative inline-block h-4 w-4 rounded-xl border border-solid border-x-green-default text-green-default" />
      <span className="-mt-1 pl-4">{label}</span>
    </label>
  );
};

export default Checkbox;

type Props = {
  id: string;
  label?: React.ReactNode;
  appearance?: 'primary';
};
