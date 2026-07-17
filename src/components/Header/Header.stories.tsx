import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLinks: Story = {
  args: {
    navLinks: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
};

export const ActiveSection: Story = {
  args: { activeHref: '#portafolio' },
};
