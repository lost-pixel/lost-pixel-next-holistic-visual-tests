import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Button from 'ui/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button kind="default">Default</Button>,
};

export const Error: Story = {
  render: () => <Button kind="error">Error</Button>,
};
