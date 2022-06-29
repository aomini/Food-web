import { Meta } from '@storybook/react';

import Badge from '.';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      options: ['red', 'green'],
      control: { type: 'radio' }
    }
  }
} as Meta;

const Template = (args: any) => {
  //👇 Your template goes here
  return <Badge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  children: '15% off',
  uppercase: true
};
