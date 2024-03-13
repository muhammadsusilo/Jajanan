import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import "./style.css"
import MakananPage from './layout/Makanan'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MakananPage />,
  },
  {
    path: "Home",
    // element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
