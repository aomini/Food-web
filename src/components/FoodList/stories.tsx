import { Story, Meta } from '@storybook/react'
import FoodList from '.'

export default {
  title: 'FoodList',
  component: FoodList
} as Meta

export const Default: Story = () => <FoodList />
