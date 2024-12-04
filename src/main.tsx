import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from './providers/AppProviders';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);