import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { MotionConfig } from 'framer-motion';
import i18n from '../i18n/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <MotionConfig reducedMotion="user">
                {children}
                <Toaster 
                  position="bottom-right"
                  toastOptions={{
                    duration: 5000,
                    style: {
                      background: '#333',
                      color: '#fff',
                    },
                  }}
                />
              </MotionConfig>
            </I18nextProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
