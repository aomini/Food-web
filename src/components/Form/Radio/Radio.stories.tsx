import Radio from '.';

export default {
  title: 'Forms/Radio',
  component: Radio
};

const Label = ({ className = '' }) => (
  <div className={className}>
    <span>test</span>
    <h1>test</h1>
  </div>
);

export const Default = () => <Radio id="default" label="Default" />;

export const WithoutLabel = () => <Radio id="withoutLabel" />;

export const Selected = () => <Radio id="checked" label="Selected" checked />;

export const ComponentLabel = () => (
  <Radio id="component-label" label={<Label />} />
);
