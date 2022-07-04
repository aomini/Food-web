import { Meta } from '@storybook/react';

import Logo from './Logo';
import Pending from './order/Pending';

export default {
  title: 'Icons',
  component: Logo
} as Meta;

export const All = () => (
  <div className="flex flex-wrap gap-3">
    <Logo />
    <Pending />
  </div>
);
