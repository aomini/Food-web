import { render, screen } from '@testing-library/react';

import Badge from '.';

describe('<Badge />', () => {
  it('should render the heading', () => {
    const { container } = render(<Badge color="red">test</Badge>);

    expect(screen.getByRole('heading', { name: /Badge/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
