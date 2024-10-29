import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './Sigine.jsx';
import Login from '../Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
    {
      path:"/signin",
      element:<SignIn></SignIn>
    },
    {
      path:"/login",
      element:<Login></Login>
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
