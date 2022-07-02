import { render, screen } from '@testing-library/react'

import ReviewItem from '.'

describe('<ReviewItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<ReviewItem />)

    expect(screen.getByRole('heading', { name: /ReviewItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
