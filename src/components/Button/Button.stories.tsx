import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'gradient', 'secondary', 'ghost'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', href: '#', children: 'Solicita tu cotización' },
};

export const Gradient: Story = {
  args: { variant: 'gradient', href: '#', innerClassName: 'btn-gradient-hero', children: 'Ver Portafolio' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', href: '#', children: 'Secondary action' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', href: '#', children: 'Ghost action' },
};

export const AllVariants: Story = {
  args: { variant: 'primary', children: 'Button' },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" href="#">
        Primary
      </Button>
      <Button variant="gradient" href="#" innerClassName="btn-gradient-hero">
        Gradient
      </Button>
      <Button variant="secondary" href="#">
        Secondary
      </Button>
      <Button variant="ghost" href="#">
        Ghost
      </Button>
    </div>
  ),
};
