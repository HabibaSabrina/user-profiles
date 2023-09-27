import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import UserProvider from './userProvider/userProvider.jsx';
import UserDetails from './components/Users/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:"/user/:id",
    element:<UserDetails></UserDetails>,
    loader:() => fetch(`/persons.json`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
