import * as React from 'react';

import Svg from '../../Svg';

const Empty = () => {
  return (
    <Svg size="24" viewBox="0 0 24 24">
      <path
        d="M4 2.5H20C20.8284 2.5 21.5 3.17157 21.5 4V20C21.5 20.8284 20.8284 21.5 20 21.5H4C3.17157 21.5 2.5 20.8284 2.5 20V4C2.5 3.17157 3.17157 2.5 4 2.5Z"
        stroke="#A2A2A2"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </Svg>
  );
};

export default Empty;
