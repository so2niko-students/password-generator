import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App/App';
import RegisterForm from './components/App/RegisterForm';
import LoginForm from './components/App/LoginForm';


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
        <App/>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <LoginForm />
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