import { render, screen } from '@testing-library/react'

import ContactUsCard from '.'

describe('<ContactUsCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<ContactUsCard />)

    expect(screen.getByRole('heading', { name: /ContactUsCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
