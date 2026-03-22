// src/main.tsx
// Adicionado no topo do arquivo para evitar o erro de TypeError no fetch
try {
  const originalFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    configurable: false,
    enumerable: true,
    get: () => originalFetch,
    set: () => { /* Ignora tentativas de sobrescrita */ }
  });
} catch (e) {
  // Se já estiver protegido ou der erro, apenas continua
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
