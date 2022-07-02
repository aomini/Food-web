import { render, screen } from '@testing-library/react'

import ResturantDetailCard from '.'

describe('<ResturantDetailCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<ResturantDetailCard />)

    expect(screen.getByRole('heading', { name: /ResturantDetailCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
