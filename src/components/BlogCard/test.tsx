import { render, screen } from '@testing-library/react'

import BlogCard from '.'

describe('<BlogCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<BlogCard />)

    expect(screen.getByRole('heading', { name: /BlogCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
