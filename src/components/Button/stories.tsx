import { Meta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['solid', 'outlined', 'contained', 'ghost'],
      control: { type: 'radio' }
    },
    size: {
      options: ['sm', 'md', 'xl', '2xl'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template = (args: any) => {
  //👇 Your template goes here
  return <Button {...args}>Google.com</Button>
}

export const Default = Template.bind({})
Default.args = {
  variant: 'contained',
  size: 'sm'
}
