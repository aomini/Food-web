// External Dependencies
import React from 'react';
import { Listbox, Transition } from '@headlessui/react';

// style
// import './select.css';

const Selector = () => (
  <svg
    className="h-5 w-5 text-grey-300"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const Selected = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    />
  </svg>
);

interface ISelect {
  options: any;
  selectedOption: any;
  handelChange: any;
}

const Select: React.FC<ISelect> = ({
  /* label, */
  options,
  selectedOption,
  handelChange
}) => {
  return (
    <Listbox
      as="div"
      //className={className}
      value={selectedOption}
      onChange={(event: any) => {
        console.log('enfant', event);
        handelChange(event);
      }}
    >
      {({ open }: { open: boolean }) => (
        <>
          {/*label && (
            <Listbox.Label className="mb-1 text-sm font-medium text-blue-gray-500">
              {label}
            </Listbox.Label>
          )*/}
          <div className="relative mt-1">
            <span className="inline-block w-full rounded-md shadow-sm">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-grey-100 bg-white-default py-2 pl-3 pr-10 text-left  transition duration-150 ease-in-out">
                <span className="block truncate">{selectedOption.label}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <Selector />
                </span>
              </Listbox.Button>
            </span>
            <div className="absolute z-10 mt-1 mb-11 w-full rounded-md bg-white-default shadow-lg">
              {/* bottom-0 will open the select menu up & mb-11 will put the dropup above the select option */}
              <Transition
                show={open}
                leave="transition duration-100 ease-in"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <Listbox.Options
                  static
                  className="max-h-56 overflow-auto rounded-md py-1 text-base ring-1 ring-black-100/5  focus:outline-none sm:text-sm"
                >
                  {options.map((option: any) => {
                    return (
                      <Listbox.Option
                        as={React.Fragment}
                        key={option.id}
                        value={option}
                      >
                        {({
                          active,
                          selected
                        }: {
                          active: boolean;
                          selected: any;
                        }) => {
                          return (
                            <li
                              className={`${
                                active
                                  ? 'text-white bg-indigo-600'
                                  : 'text-gray-900'
                              } relative cursor-default select-none py-2 pl-3 pr-9`}
                            >
                              <div className="flex items-center">
                                <span
                                  className={`${
                                    selected ? 'font-semibold' : 'font-normal'
                                  }  flex items-center truncate`}
                                >
                                  {option.label}
                                </span>
                                {selected && (
                                  <span
                                    className={`${
                                      active ? 'text-white' : 'text-indigo-600'
                                    } absolute inset-y-0 right-0 mr-3 flex items-center pl-1.5`}
                                  >
                                    <Selected />
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        }}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
