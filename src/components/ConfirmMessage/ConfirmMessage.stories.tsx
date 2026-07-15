import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmMessage } from './ConfirmMessage';

const meta = {
  title: 'Components/ConfirmMessage',
  component: ConfirmMessage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ConfirmMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
