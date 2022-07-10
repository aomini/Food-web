import ctl from '@netlify/classnames-template-literals';
import vendorClsx from 'clsx';

export const clsx = (templateString: string): string =>
  ctl(vendorClsx(templateString));
