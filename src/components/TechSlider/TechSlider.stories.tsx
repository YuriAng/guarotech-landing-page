import type { Meta, StoryObj } from '@storybook/react-vite';
import { TechSlider } from './TechSlider';

const meta = {
  title: 'Components/TechSlider',
  component: TechSlider,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TechSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
