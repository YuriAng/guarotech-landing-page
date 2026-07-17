import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portfolio } from './Portfolio';

const meta = {
  title: 'Components/Portfolio',
  component: Portfolio,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Portfolio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
