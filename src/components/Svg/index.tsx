import clsx from 'clsx';
import * as React from 'react';

interface IsizeObject {
  width: number | string;
  height: number | string;
}
type TSvgSize = IsizeObject | number | string;

interface ISvg {
  size?: TSvgSize;
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
}

const defaultSVGSizes: IsizeObject = {
  width: 20,
  height: 20
};

const Svg: React.FC<ISvg> = ({
  children,
  size = defaultSVGSizes,
  className = '',
  viewBox = '0 0 20 20'
}) => {
  const svgSize = {
    width:
      (typeof size !== 'object' ? size : size?.width) || defaultSVGSizes.width,
    height:
      (typeof size !== 'object' ? size : size?.height) || defaultSVGSizes.height
  };

  const classes = clsx('inline', className);

  return (
    <svg
      className={classes}
      width={svgSize.width}
      height={svgSize.height}
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
};

export default Svg;
