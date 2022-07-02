import { render, screen } from '@testing-library/react'

import OrderCard from '.'

describe('<OrderCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<OrderCard />)

    expect(screen.getByRole('heading', { name: /OrderCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
