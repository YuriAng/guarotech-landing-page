import type { Meta, StoryObj } from '@storybook/react-vite';
import { WhatsAppButton } from './WhatsAppButton';

const meta = {
  title: 'Components/WhatsAppButton',
  component: WhatsAppButton,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof WhatsAppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', height: '160px', background: 'var(--color-bg-1)' }}>
      <WhatsAppButton />
    </div>
  ),
};
