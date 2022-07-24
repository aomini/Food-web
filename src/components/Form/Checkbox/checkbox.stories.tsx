import Checkbox from '.';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox
};

const Label = ({ className = '' }) => (
  <div className={className}>
    <span>test</span>
    <h1>test</h1>
  </div>
);

export const Default = () => <Checkbox id="default" label="Default" />;

export const WithoutLabel = () => <Checkbox id="withoutLabel" />;

export const Checked = () => <Checkbox id="checked" label="Checked" checked />;

export const ComponentLabel = () => {
  return <Checkbox id="component-label" label={<Label />} />;
};
