import React from 'react';

import Icon from '.';
import { icons } from './icons';

export default {
  title: 'Icon',
  component: Icon
};

export const Basic = () => <Icon icon="check" />;

export const Labels = () => (
  <>
    <h2 className="m-4 text-base">{Object.keys(icons).length} icons</h2>
    <ul className="m-0 flex list-none flex-wrap p-0">
      {Object.keys(icons).map((key) => (
        <li
          key={key}
          className="m-4 inline-flex items-center"
          style={{ flex: '0 0 16%' }}
        >
          <Icon icon={key as keyof typeof icons} className="mr-2" aria-hidden />
          <div className="text-xs text-grey-300">{key}</div>
        </li>
      ))}
    </ul>
  </>
);

export const NoLabels = () => (
  <>
    <h2 className="m-4 text-base">{Object.keys(icons).length} icons</h2>
    <ul className="m-0 flex list-none flex-wrap p-0">
      {Object.keys(icons).map((key) => (
        <li key={key} className="m-4 p-0">
          <Icon
            icon={key as keyof typeof icons}
            className="block"
            aria-label={key}
          />
        </li>
      ))}
    </ul>
  </>
);
