import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import "./style.css"
import HomePage from './pages/Home'
import MakananPage from './layout/Makanan'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"Makanan",
    element: <MakananPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
