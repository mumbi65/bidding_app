import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/homepage.jsx';
import ProductPage from './components/productpage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage/>
  },
  {
    path:'productpage',
    element:<ProductPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
