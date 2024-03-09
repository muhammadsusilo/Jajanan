import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import HomePage from './pages/Home'
import MakananPage from './layout/Makanan'
import MinumanPage from './pages/Minuman'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"Makanan",
    element: <MakananPage />
  },
  {
    path:"Minuman",
    element: <MinumanPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
