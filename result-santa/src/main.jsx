import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './assets/components/Layout';
import Index from './assets/pages/Index';
import Regalo, { loader as codeLoader } from './assets/pages/Regalo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/:regalo',
        element: <Regalo />,
        loader: codeLoader, 
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
