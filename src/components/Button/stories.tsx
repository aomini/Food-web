import { Meta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Basic = () => <Button>Primary</Button>;

export const All = () => (
  <div className="flex flex-wrap gap-3">
    <Button color="primary">Primary</Button>
    <Button color="lightPrimary">Light Primary</Button>
    <Button color="outlinePrimary">Outline Primary</Button>
    <Button color="outlineGray">Outline Tertiary</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    <Button color="primary">Default</Button>
    <Button color="primary" size="lg">
      Large
    </Button>
    <Button color="primary" size="md">
      Medium
    </Button>
    <Button color="primary" size="sm">
      Small
    </Button>
  </div>
);

export const Loading = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    <Button color="primary" isLoading>
      Loading
    </Button>
    <Button color="outlinePrimary" isLoading>
      Loading
    </Button>
    <Button color="outlineGray" loadingText="Custom..." isLoading>
      Loading
    </Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    <Button color="primary" isDisabled>
      Disbled Primary
    </Button>
    <Button color="outlinePrimary" isDisabled>
      Disabled Outline
    </Button>
    <Button color="outlineGray" isDisabled>
      Disabled Gray
    </Button>
  </div>
);
