import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import { PRODUCTS_MOCK } from "./mock/products.mock";
import Pay from './views/Pay/Pay';

const router = createBrowserRouter([
  {
    path: "/",//rota inicial - padrão
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,//subindo os cards
  },

  {
    path: "/products/:productId",//para sinalizar que é uma rota dinamica (:)
    element: <Products data={PRODUCTS_MOCK} />,
  },

  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
