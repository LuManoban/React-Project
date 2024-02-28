import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth'; // Importa la función isAuthenticated desde tu archivo de utilidades
import '../styles/index.css';
import '../styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getJwtFromLocalStorage } from "../helpers/jwt";

const Header = () => {
  // Estado local para controlar la visibilidad del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Efecto para actualizar la visibilidad del menú cuando el usuario esté autenticado
  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar la página
    setMenuVisible(isAuthenticated());
  }, []);

  // Manejador para cerrar sesión y actualizar la visibilidad del menú
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem('rol');
    window.location.href = "/inicio";
    setMenuVisible(false);
  };

  // Verificar si el usuario está autenticado al hacer clic en el enlace de registro
  const handleRegister = () => {
    // Verificar si el usuario está autenticado después del registro
    if (isAuthenticated()) {
      // Si el usuario está autenticado, mostrar el menú
      setMenuVisible(true);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="header-nav flexbox">
          <div className="flexbox">
            <img className="img-header" src="/IMG/Logo Restobar.png" alt="" />
          </div>

          <a href="#headerMenu" className="icon md:d-none">
            <i className="bi bi-list"></i>
          </a>

          <div className="flexbox">
            <ul
              className="list list--header-menu flexbox flexbox--center flexbox--responsive g-md"
              id="headerMenu"
            >
              {/* Renderizar el menú solo si el usuario está autenticado */}
             
                <>
                  <li>
                    <Link className="button1" to="/inicio">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="button1" to="/registrate" onClick={handleRegister}>
                      Registrate
                    </Link>
                  </li>
                  {getJwtFromLocalStorage() && (
                  <li>
                    <Link className="button1" to="/productos">
                      Productos
                    </Link>
                  </li>
                   )}
                   {getJwtFromLocalStorage() && (
                  <li>
                    <Link className="button1" to="/contactanos">
                      Contáctanos
                    </Link>
                  </li>
                   )}
                   {getJwtFromLocalStorage() && (
                  <li>
                    <Link className="button1" to="/delivery">
                      Delivery
                    </Link>
                  </li>
                 )}
                 {getJwtFromLocalStorage()  && localStorage.getItem("rol") == 4 && (
                  <li>
                    <Link className="button1" to="/adminitrador">
                      Administrador
                    </Link>
                  </li>
                  )}
                  {getJwtFromLocalStorage() && (
                  <li>
                    <Link className="button1" to="/login" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                  )}
                </>
             
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
