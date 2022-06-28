import { render, screen } from '@testing-library/react'

import InputField from '.'

describe('<InputField />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputField />)

    expect(screen.getByRole('heading', { name: /InputField/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
