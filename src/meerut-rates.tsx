import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MeerutRatesPage from './pages/MeerutRatesPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MeerutRatesPage />
  </StrictMode>
);
