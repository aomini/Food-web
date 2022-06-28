import { render, screen } from '@testing-library/react'

import QuantityItem from '.'

describe('<QuantityItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<QuantityItem />)

    expect(screen.getByRole('heading', { name: /QuantityItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
