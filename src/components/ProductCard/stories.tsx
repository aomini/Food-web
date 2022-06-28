import { Story, Meta } from '@storybook/react'
import ProductCard from '.'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

export const Default: Story = () => <ProductCard />
