import { Story, Meta } from '@storybook/react'
import PagesApp from '.'

export default {
  title: 'PagesApp',
  component: PagesApp
} as Meta

export const Default: Story = () => <PagesApp />
