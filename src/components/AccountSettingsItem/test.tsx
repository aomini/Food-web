import { render, screen } from '@testing-library/react'

import AccountSettingsItem from '.'

describe('<AccountSettingsItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<AccountSettingsItem />)

    expect(screen.getByRole('heading', { name: /AccountSettingsItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
