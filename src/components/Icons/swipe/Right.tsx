import * as React from 'react';

import Svg from '../../Svg';

const SwipeRight = () => {
  return (
    <Svg size="70" viewBox="0 0 70 70">
      <g filter="url(#filter0_d_58_412)">
        <circle cx="35" cy="35" r="19" fill="white" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.9998 35C25.9998 35.1768 26.07 35.3463 26.195 35.4713C26.32 35.5963 26.4896 35.6666 26.6664 35.6666H42.3882L38.1928 39.8607C38.1308 39.9226 38.0816 39.9962 38.0481 40.0772C38.0145 40.1582 37.9973 40.2449 37.9973 40.3326C37.9973 40.4202 38.0145 40.507 38.0481 40.588C38.0816 40.669 38.1308 40.7425 38.1928 40.8045C38.2547 40.8665 38.3283 40.9157 38.4093 40.9492C38.4903 40.9827 38.577 41 38.6647 41C38.7523 41 38.8391 40.9827 38.9201 40.9492C39.0011 40.9157 39.0746 40.8665 39.1366 40.8045L44.4692 35.4719C44.5313 35.41 44.5805 35.3365 44.6141 35.2555C44.6477 35.1745 44.665 35.0877 44.665 35C44.665 34.9123 44.6477 34.8255 44.6141 34.7445C44.5805 34.6635 44.5313 34.59 44.4692 34.5281L39.1366 29.1955C39.0746 29.1335 39.0011 29.0843 38.9201 29.0508C38.8391 29.0173 38.7523 29 38.6647 29C38.577 29 38.4903 29.0173 38.4093 29.0508C38.3283 29.0843 38.2547 29.1335 38.1928 29.1955C38.1308 29.2575 38.0816 29.331 38.0481 29.412C38.0145 29.493 37.9973 29.5798 37.9973 29.6674C37.9973 29.7551 38.0145 29.8418 38.0481 29.9228C38.0816 30.0038 38.1308 30.0774 38.1928 30.1393L42.3882 34.3334H26.6664C26.4896 34.3334 26.32 34.4037 26.195 34.5287C26.07 34.6537 25.9998 34.8232 25.9998 35Z"
        fill="#323232"
      />
      <defs>
        <filter
          id="filter0_d_58_412"
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
            result="effect1_dropShadow_58_412"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_58_412"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default SwipeRight;
