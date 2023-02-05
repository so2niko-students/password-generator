import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App/App';
import Test from './components/Test/Test';

import {
  createBrowserRouter,
  Link,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        'Home element'
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/test",
    element: (
      <div>
        <Test/>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);