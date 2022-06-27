import { render } from '@testing-library/react';

import Typography, { variantMapping } from '..';

describe('<Typography />', () => {
  it('should correctly render with the given variant', () => {
    const { container, getByRole } = render(
      <Typography variant="h2">Heading 2</Typography>
    );

    expect(getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a typography element with mapped variant', () => {
    const mappedVariants: Array<keyof typeof variantMapping> = [
      'body',
      'caption'
    ];

    mappedVariants.forEach((variant) => {
      const { container } = render(
        <Typography variant={variant}>Paragraph</Typography>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render a typography element with supplied variant', () => {
    const { container, getByRole } = render(
      <Typography variant="body" component="h6">
        Text rendered with heading
      </Typography>
    );

    expect(
      getByRole('heading', { name: /Text rendered with heading/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
