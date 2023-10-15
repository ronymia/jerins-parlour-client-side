import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import axios from 'axios';
import { router } from './routes/Routes/Routes.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//TODO : change it from .env
// base url 
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

//react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
)
