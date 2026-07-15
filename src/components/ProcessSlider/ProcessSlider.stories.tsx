import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProcessSlider } from './ProcessSlider';

const meta = {
  title: 'Components/ProcessSlider',
  component: ProcessSlider,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ProcessSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StartingOnStepThree: Story = {
  args: { initialIndex: 2 },
};
