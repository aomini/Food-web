import { ElementType, HtmlHTMLAttributes } from 'react';

/**
 * Variants Mapping
 * @author Rakesh Shrestha
 */
export const variantMapping = {
  h1: {
    style: 'text-4xl',
    mapping: 'h1'
  },
  h2: {
    style: 'text-3xl',
    mapping: 'h2'
  },
  h3: {
    style: 'text-2xl',
    mapping: 'h3'
  },
  h4: {
    style: 'text-xl',
    mapping: 'h4'
  },
  h5: {
    style: 'text-lg',
    mapping: 'h5'
  },
  body: {
    style: 'text-base',
    mapping: 'p'
  },
  caption: {
    style: 'text-sm',
    mapping: 'span'
  }
};

type TypographyTypes = {
  variant: keyof typeof variantMapping;
  component?: ElementType;
};

const Typography: React.FC<
  TypographyTypes & HtmlHTMLAttributes<HTMLParagraphElement>
> = ({ variant, component, children }) => {
  const style = variantMapping[variant].style;

  const Component = component || variantMapping[variant].mapping || 'span';

  return <Component className={style}>{children}</Component>;
};
export default Typography;
