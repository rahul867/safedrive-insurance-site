import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MeerutCarPage from './pages/MeerutCarPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MeerutCarPage />
  </StrictMode>
);
