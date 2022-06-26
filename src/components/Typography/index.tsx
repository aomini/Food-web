import { ElementType, HtmlHTMLAttributes } from 'react';

/**
 * Headers / typography
 * @author Rakesh Shrestha
 */
const headers = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  body: 'text-base',
  caption: 'text-sm'
};

type TypographyTypes = {
  variant: keyof typeof headers;
  component?: ElementType;
};

/**
 * TODO variant should work as a Component if null provided
 */
const Typography: React.FC<
  TypographyTypes & HtmlHTMLAttributes<HTMLParagraphElement>
> = ({ variant, component, children }) => {
  const style = headers[variant];

  const Component = component || 'span';

  return <Component className={style}>{children}</Component>;
};
export default Typography;
