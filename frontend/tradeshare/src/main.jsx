import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Loginpage from './pages/Loginpage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <div> Not found </div>
  },
  {
    path:"/login",
    element:<Loginpage/>,
    
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
