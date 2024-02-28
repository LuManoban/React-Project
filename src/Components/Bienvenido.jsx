import React, { useState } from 'react';
import { isAuthenticated } from '../utils/auth'; // Importa la función isAuthenticated desde tu archivo de utilidades
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Importa Axios correctamente
import '../styles/index.css';
import '../styles/style.css';

const Bienvenido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Estado para controlar si se muestra el formulario de login o recuperación de contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setError('');
    setIsLogin(true); // Restablecer el formulario de inicio de sesión
  };
  
  const login = async () => {
    try {
      const response = await axios.post('https://node-restobar-project.onrender.com/auth/signin', {
        username: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        // Autenticación exitosa
        const data = response.data;
        const { access_token, refresh_token } = data;
      
        // Almacenar tokens en el almacenamiento local
        localStorage.setItem('access_token', data.authToken.access_token);
        localStorage.setItem('refresh_token', data.authToken.refresh_token);
        localStorage.setItem('rol', data.role_id);
        //navigate("/producto");
        navigate("/productos");
        // Cerrar el formulario del modal
        closeForm();
      } else {
        // Error de autenticación
        console.error('Error de autenticación');
        setError('Error de autenticación. Por favor, verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleForgotPassword = () => {
    // Cambiar al formulario de recuperación de contraseña
    setIsLogin(false);
  };

  const recoverPassword = async () => {
    try {
      const response = await axios.post('https://node-restobar-project.onrender.com/auth/password/reset', {
        email: email
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        // Recuperación de contraseña exitosa
        setError('Se ha enviado un correo electrónico para restablecer tu contraseña.');
      } else {
        setError('Error al enviar el correo electrónico de recuperación de contraseña.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al enviar el correo electrónico de recuperación de contraseña. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <article className="hero d-flex" id="hero">
      <div className="container g-layout g-layout--center g-md md:g-layout--1fr-1fr">
        <div className="core bg-transparent">
          <div style={{ textAlign: "center" }} className="card__body">
            {/* Resto del contenido... */}
            
            {/* Botón para abrir el modal */}
            <button style={{ backgroundColor: '#272727', border: '2px solid red' }} className="open-button" onClick={openForm}>LOGUEATE</button>

            {/* Modal */}
            <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 style={{color:'black'}} className="modal-title">{isLogin ? 'Login' : 'Recuperar Contraseña'}</h5>
                    <button type="button" className="close" onClick={closeForm}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    {isLogin ? (
                      <form id="loginForm">
                        <label style={{color:'black' , marginLeft:'40px'}} htmlFor="username">Username</label>
                        <input style={{color:'white' , marginLeft:'40px'}} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <br></br>
                        <label style={{color:'black' , marginLeft:'40px'}}  htmlFor="password">Password</label>
                        <input style={{color:'white' , marginLeft:'40px'}} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      </form>
                    ) : (
                      <form id="forgotPasswordForm">
                        <label style={{color:'black' , marginLeft:'40px'}} htmlFor="email">Correo Electrónico</label>
                        <input style={{color:'white' , marginLeft:'40px'}} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </form>
                    )}
                  </div>
                  <div className="modal-footer">
                    {isLogin ? (
                      <>
                        <button type="button" className="btn btn-primary" onClick={login}>Login</button>
                        <button type="button" className="btn btn-secondary" onClick={handleForgotPassword}>Olvidé mi contraseña</button>
                      </>
                    ) : (
                      <>
                        <button type="button" className="btn btn-primary" onClick={recoverPassword}>Recuperar Contraseña</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setIsLogin(true)}>Volver al Login</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Bienvenido;
