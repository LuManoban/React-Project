import React from 'react';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import App from '../App';
import Principal from '../pages/Principal';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Delivery from '../pages/Delivery';
import Solidos from '../pages/Solidos';
import Liquidos from '../pages/Liquidos';
import FAQ from '../Components/Faq';
import Merch from '../pages/Merch';
import Register from '../pages/Register';
import AdminPage from '../pages/AdminPage';
import { getJwtFromLocalStorage } from "../helpers/jwt";

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
  const access_token = localStorage.getItem('access_token');
  return !!access_token;
};
if (!getJwtFromLocalStorage()) {
    console.log("no hay");
}
// Componente de protección de ruta
const ProtectedRoute = ({ element, ...rest }) => {
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    navigate('/login');
    return null;
  }

  return React.cloneElement(element, rest);
};

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/inicio', element: <Principal /> },
  { path: '/productos', element: <Products /> },
  { path: '/contactanos', element: <Contact /> },
  { path: '/delivery', element: <Delivery /> },
  { path: '/solidos', element: <Solidos /> },
  { path: '/liquidos', element: <Liquidos /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/merch', element: <Merch /> },
  { path: '/registrate', element: <Register /> },
  { path: '/adminitrador',element: <AdminPage />  },
]);
