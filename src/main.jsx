import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes.jsx';
import AuthProvider from './contexts/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

//TODO : change it from .env
// base url 
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

//react query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
