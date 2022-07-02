import { Meta } from '@storybook/react';

import Badge from '.';

export default {
  title: 'Badge',
  component: Badge
} as Meta;

export const PrimaryBadge = () => <Badge color="green">Badge</Badge>;

export const DangerBadge = () => <Badge color="red">15% Off</Badge>;

export const CapitalBadge = () => <Badge transform="capital">15% Off</Badge>;

export const NormalBadge = () => <Badge transform="normal">15% Off</Badge>;

export const UpperBadge = () => <Badge transform="upper">15% Off</Badge>;

export const LowerBadge = () => <Badge transform="lower">THIS IS CAPPED</Badge>;
