import { render, screen } from '@testing-library/react'

import FoodHeader from '.'

describe('<FoodHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<FoodHeader />)

    expect(screen.getByRole('heading', { name: /FoodHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
