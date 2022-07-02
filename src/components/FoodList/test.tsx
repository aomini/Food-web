import { render, screen } from '@testing-library/react'

import FoodList from '.'

describe('<FoodList />', () => {
  it('should render the heading', () => {
    const { container } = render(<FoodList />)

    expect(screen.getByRole('heading', { name: /FoodList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
