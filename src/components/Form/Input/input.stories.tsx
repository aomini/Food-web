import { ComponentProps } from 'react';

import UnstyledInput from '.';

const Input: React.FC<ComponentProps<typeof UnstyledInput>> = (props) => (
  <UnstyledInput {...props} className="pt-4" />
);

export default {
  title: 'forms/input',
  component: Input
};

export const Template = (args: ComponentProps<typeof Input>) => (
  <Input {...args} />
);

Template.args = {
  id: 'basic',
  label: 'label',
  value: '',
  placeholder: 'Enter your name'
};
Template.story = { name: 'playground' };

export const All = () => {
  return (
    <form className="bg-grey-50 px-80 py-8">
      <Input
        id="Placeholder"
        placeholder="Placeholder"
        label="Input with placeholder"
      />
      <Input
        id="Foused"
        placeholder="Focused"
        label="Focused Input"
        startFocused
      />
      <Input
        id="with-value"
        placeholder="With Value"
        value="With Value"
        label="with Value"
      />
      <Input id="Disabled" placeholder="Disabled" label="Disabled" disabled />
      <Input
        id="with-icon"
        placeholder="With Icon TODO: 😅"
        label="Todo: With Icon"
        icon="location"
      />
      <Input
        id="Error"
        placeholder="Error"
        label="Error"
        error="Please enter required fields"
      />
      <Input
        id="suppress-error-msg"
        placeholder="Suppress Error Input"
        label="Suppress Error Input"
        error="Invalid"
        suppressErrorMessage
      />
    </form>
  );
};
