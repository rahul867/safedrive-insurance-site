import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MeerutPage from './pages/MeerutPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MeerutPage />
  </StrictMode>
);
