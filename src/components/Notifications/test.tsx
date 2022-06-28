import { render, screen } from '@testing-library/react'

import Notifications from '.'

describe('<Notifications />', () => {
  it('should render the heading', () => {
    const { container } = render(<Notifications />)

    expect(screen.getByRole('heading', { name: /Notifications/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
