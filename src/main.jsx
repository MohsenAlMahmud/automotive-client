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
import ProductDetails from './Component/Brands/ProductDetails';
import PrivateRoute from './PrivateRoute';
import Page404 from './Component/Home/Page404';


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
        loader:  () => fetch(`http://localhost:5000/users`)
        
      },
      {
        path: '/individualBrandProduct/:brand',
        element: <IndivisualBrandProduct></IndivisualBrandProduct>,
        
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:  () => fetch(`http://localhost:5000/users`)
      },
      
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:  () => fetch(`http://localhost:5000/products`)
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
        element: <PrivateRoute><PostUser></PostUser></PrivateRoute>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
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
      {
        path: '/*',
        element: <Page404></Page404>        
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
