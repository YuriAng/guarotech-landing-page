import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import { ConfirmPage } from './pages/ConfirmPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfirmPage />
  </StrictMode>,
);
