import { render, screen } from '@testing-library/react'

import ReasonWhyCard from '.'

describe('<ReasonWhyCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<ReasonWhyCard />)

    expect(screen.getByRole('heading', { name: /ReasonWhyCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
