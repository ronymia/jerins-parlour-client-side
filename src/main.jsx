import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider'; // Auth provider
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { router } from './routes/Routes/Routes.jsx'; // react router
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';

//TODO : change it from .env
// Axios defaults settings
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access-token')}`

//react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
