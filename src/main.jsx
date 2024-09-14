import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/template/Header.jsx'
import Footer from './assets/template/Footer.jsx'
import { Button } from 'react-bootstrap'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx';
import Sobremim from './pages/Sobremim.jsx';
import Contato from './pages/Contato.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "sobremim",
    element: <Sobremim/>,
  },
  {
    path: "contato",
    element: <Contato/>,
  },  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
