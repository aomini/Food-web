import * as React from 'react';

import Svg from '../../Svg';

const SwipeLeft = () => {
  return (
    <Svg size="70" viewBox="0 0 70 70">
      <g filter="url(#filter0_d_58_398)">
        <circle cx="35" cy="35" r="19" fill="white" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.6652 35C44.6652 34.8232 44.595 34.6537 44.47 34.5287C44.345 34.4037 44.1755 34.3334 43.9987 34.3334H28.2769L32.4723 30.1393C32.5343 30.0774 32.5834 30.0038 32.617 29.9228C32.6505 29.8418 32.6678 29.7551 32.6678 29.6674C32.6678 29.5798 32.6505 29.493 32.617 29.412C32.5834 29.331 32.5343 29.2575 32.4723 29.1955C32.4103 29.1335 32.3367 29.0843 32.2558 29.0508C32.1748 29.0173 32.088 29 32.0004 29C31.9127 29 31.8259 29.0173 31.7449 29.0508C31.664 29.0843 31.5904 29.1335 31.5284 29.1955L26.1958 34.5281C26.1338 34.59 26.0845 34.6635 26.0509 34.7445C26.0173 34.8255 26 34.9123 26 35C26 35.0877 26.0173 35.1745 26.0509 35.2555C26.0845 35.3365 26.1338 35.41 26.1958 35.4719L31.5284 40.8045C31.5904 40.8665 31.664 40.9157 31.7449 40.9492C31.8259 40.9827 31.9127 41 32.0004 41C32.088 41 32.1748 40.9827 32.2558 40.9492C32.3367 40.9157 32.4103 40.8665 32.4723 40.8045C32.5343 40.7425 32.5834 40.669 32.617 40.588C32.6505 40.507 32.6678 40.4202 32.6678 40.3326C32.6678 40.2449 32.6505 40.1582 32.617 40.0772C32.5834 39.9962 32.5343 39.9226 32.4723 39.8607L28.2769 35.6666H43.9987C44.1755 35.6666 44.345 35.5963 44.47 35.4713C44.595 35.3463 44.6652 35.1768 44.6652 35Z"
        fill="#323232"
      />
      <defs>
        <filter
          id="filter0_d_58_398"
          x="0"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.160784 0 0 0 0 0.160784 0 0 0 0 0.164706 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_58_398"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_58_398"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default SwipeLeft;
