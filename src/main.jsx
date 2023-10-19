import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Register from './Component/Register/Register';
import Login from './Component/LogIn/LogIn';
import AuthProvider from './Providers/AuthProvider';
// import AddProduct from './Component/AddProduct/AddProduct';
import MyCart from './Component/MyCart/MyCart';
import BrandDetails from './Component/Brands/BrandDetails';
import Brands from './Component/Brands/Brands';
import PostUser from './Component/ServerSide/PostUser';
import DisplayUserInput from './Component/ServerSide/DisplayUserInput';
import IndivisualBrandProduct from './Component/Brands/IndivisualBrandProduct';
import UpdateProduct from './Component/ServerSide/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },
      {
        path: '/brands',
        element: <Brands></Brands>,
        loader: () => fetch('/brands.json'),
        
      },
      {
        path: '/brand/:brand',
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch('/brands.json'),
        
        
      },
      {
        path: '/individualBrandProduct/:brand',
        element: <IndivisualBrandProduct></IndivisualBrandProduct>,        
        // loader: (params) => {
        //   return fetch(`http://localhost:5000/users?brand=${params.brand}`)
        //   .then((response) => response.json());
        // }
        
      },
      // {
      //   path: '/addProduct',
      //   element: <AddProduct></AddProduct>
      // },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <PostUser></PostUser>
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => {
          console.log(params);
          return fetch(`http://localhost:5000/users/${params.id}`);
        },
      },
      {
        path: '/displayUserInput',
        element: <DisplayUserInput></DisplayUserInput>,
        loader:  () => fetch(`http://localhost:5000/users`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
