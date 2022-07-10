import { Meta } from '@storybook/react';
import React from 'react';

import Icon from '../Icon';

import Button, { COLORS, IconButtonSizesType } from '.';

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
    <Button color="ghostDanger">Ghost Danger</Button>
    <Button color="outlineDanger">Outline Danger</Button>
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

export const ContainsSVG = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    <Button color="primary">
      Default
      <Icon icon="chevronRight" />
    </Button>
    <Button color="primary" size="lg">
      Large
      <Icon icon="address" />
    </Button>
    <Button color="primary" size="md">
      Medium
      <Icon icon="arrowRight" />
    </Button>
    <Button color="primary" size="sm">
      Small
      <Icon icon="call" />
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

export const ContainsIcon = () => (
  <>
    <div>
      <h2 className="m-4 text-base">Sizes</h2>
      <div
        className="m-4"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'baseline'
        }}
      >
        {['xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
          <React.Fragment key={size}>
            <Button
              size={size as IconButtonSizesType}
              color="outlineGray"
              containsIcon
            >
              <Icon icon="chevronRight" aria-label="right" />
            </Button>
          </React.Fragment>
        ))}
      </div>
    </div>

    <div>
      <h2 className="m-4 text-base">Pill</h2>
      <div
        className="m-4"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'baseline'
        }}
      >
        {['xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
          <Button
            size={size as IconButtonSizesType}
            key={size}
            color="outlineGray"
            containsIcon
            pill
          >
            <Icon icon="chevronRight" aria-label="right" />
          </Button>
        ))}
      </div>
    </div>

    <div>
      <h2 className="m-4 text-base">Color Variants</h2>
      <div
        className="m-4"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'baseline'
        }}
      >
        {[
          'primary',
          'lightPrimary',
          'outlinePrimary',
          'outlineGray',
          'outlineDanger',
          'ghostDanger'
        ].map((color) => (
          <Button key={color} color={color as keyof typeof COLORS} containsIcon>
            <Icon icon="chevronRight" aria-label="right" />
          </Button>
        ))}
      </div>
    </div>

    <div>
      <h2 className="m-4 text-base">Custom Wrapper (As)</h2>
      <div
        className="m-4"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'baseline'
        }}
      >
        {['span', 'div', 'section'].map((As) => (
          <Button
            key={As}
            ButtonWrapper={As as keyof JSX.IntrinsicElements}
            containsIcon
          >
            <Icon icon="chevronRight" aria-label="right" />
          </Button>
        ))}
      </div>
    </div>
  </>
);
