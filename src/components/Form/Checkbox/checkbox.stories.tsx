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

export const Default = () => <Checkbox id="default" label="default" />;

export const WithoutLabel = () => <Checkbox id="withoutLabel" />;

export const Checked = () => <Checkbox id="checked" checked />;

export const ComponentLabel = () => {
  return <Checkbox id="Test" label={<Label />} />;
};
