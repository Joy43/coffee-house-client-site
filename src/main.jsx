import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffie from './components/Pages/AddCoffie.jsx';
import UpdateCoffie from './components/Pages/UpdateCoffie.jsx';
import RootlayOut from './components/RootLayout/RootlayOut.jsx';
import Signup from './components/Signup/Signup.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './Auth provider/AuthProvider.jsx';
import User from './components/User/User.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootlayOut></RootlayOut>,
   
    children:[
      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch('http://localhost:5000/coffee'),
      },
      {
        path:"addCoffie",
        element:<AddCoffie></AddCoffie>
      },
      {
        path:"updateCoffie/:id",
        element:<UpdateCoffie></UpdateCoffie>,
        loader:({params})=>fetch (`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"/signup",
        element:<Signup></Signup>

      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:'/users',
        element:<User></User>,
        loader:()=>fetch('http://localhost:5000/user')

      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
