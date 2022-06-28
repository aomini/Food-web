import { render, screen } from '@testing-library/react'

import DealsCard from '.'

describe('<DealsCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<DealsCard />)

    expect(screen.getByRole('heading', { name: /DealsCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
