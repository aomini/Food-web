import { render, screen } from '@testing-library/react'

import RateReviewCard from '.'

describe('<RateReviewCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<RateReviewCard />)

    expect(screen.getByRole('heading', { name: /RateReviewCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
