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

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
  const access_token = localStorage.getItem('access_token');
  return !!access_token;
};

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
  { path: '/productos', element: isAuthenticated() ? <ProtectedRoute element={<Products />} /> : null },
  { path: '/contactanos', element: isAuthenticated() ? <ProtectedRoute element={<Contact />} /> : null },
  { path: '/delivery', element: isAuthenticated() ? <ProtectedRoute element={<Delivery />} /> : null },
  // { path: '/login', element: <Login /> },
  { path: '/solidos', element: isAuthenticated() ? <ProtectedRoute element={<Solidos />} /> : null },
  { path: '/liquidos', element: isAuthenticated() ? <ProtectedRoute element={<Liquidos />} /> : null },
  { path: '/faq', element: isAuthenticated() ? <ProtectedRoute element={<FAQ />} /> : null },
  { path: '/merch', element: isAuthenticated() ? <ProtectedRoute element={<Merch />} /> : null },
  { path: '/registrate', element: <Register /> },
  { path: '/adminitrador', element: isAuthenticated() ? <ProtectedRoute element={<AdminPage />} /> : null },
]);
