import { render, screen } from '@testing-library/react'

import PagesApp from '.'

describe('<PagesApp />', () => {
  it('should render the heading', () => {
    const { container } = render(<PagesApp />)

    expect(screen.getByRole('heading', { name: /PagesApp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
