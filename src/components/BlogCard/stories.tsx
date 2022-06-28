import { Story, Meta } from '@storybook/react'
import BlogCard from '.'

export default {
  title: 'BlogCard',
  component: BlogCard
} as Meta

export const Default: Story = () => <BlogCard />
