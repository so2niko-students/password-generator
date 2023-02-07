import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App/App';
import Test from './components/Test/Test';
import RegisterForm from './components/App/RegisterForm';


import {
  createBrowserRouter,
  Link,
  RouterProvider
} from 'react-router-dom';
import PasswordsTable from './components/App/PasswordsTable';
import PasswordGenerator from './components/App/PasswordGeneration';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Test/>
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
        <PasswordsTable/>
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <RegisterForm/>
      </div>
  ),
  },
  {
    path: "/newpassword",
    element: (
      <div>
        <PasswordGenerator/>
      </div>
  ),  
  },
  {
    path: "/passwords-table",
    element: (
      <div>
        <PasswordsTable/>
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