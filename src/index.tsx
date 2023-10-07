import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './modules/home/pages/Home';
import Log from './modules/log/pages/Log';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'log',
        element: <Log />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
