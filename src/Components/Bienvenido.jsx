import React, { useState } from 'react';
import { isAuthenticated } from '../utils/auth'; // Importa la función isAuthenticated desde tu archivo de utilidades
import { useNavigate } from "react-router-dom";
import '../styles/index.css';
import '../styles/style.css';

const Bienvenido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const openForm = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();

  const closeForm = () => {
    setIsOpen(false);
    setUsername('');
    setPassword('');
    setError('');
  };
  
  const login = async () => {
    try {
      const response = await fetch('https://node-restobar-project.onrender.com/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
  
      if (response.ok) {
        // Autenticación exitosa
        const data = await response.json();
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

  return (
    <article className="hero d-flex" id="hero">
      <div className="container g-layout g-layout--center g-md md:g-layout--1fr-1fr">
        <div className="core bg-transparent">
          <div style={{ textAlign: "center" }} className="card__body">
            <h1 style={{ marginBottom: "50px", marginTop: "-150px" }} className="card__title"> Bienvenido a <span className="c-primary">The Last Death Growl</span></h1>
            <h2 style={{ marginBottom: "50px" }} className="card__subtitle">¡DONDE DISFRUTARAS LA MEJOR COMIDA Y BEBIDA JUNTO A LAS MEJORES BANDAS DE HEAVY METAL!</h2>
            <p className="card__text md:d-block">
              Date una vuelta por nuestra carta de especialidades, bebidas y merchandising. Ponte en contacto con nosotros o visita nuestras redes sociales!
            </p>
            <p style={{ marginBottom: "50px" }} className="card__text md:d-block">
              No olvides REGISTRARTE para tener acceso a la función de DELIVERY, RESERVAS Y EVENTOS PRIVADOS.
            </p>
            <h3>¿Ya te has registrado?<span style={{ fontSize: "30px" }} className="c-primary">¡LOGUEATE!</span></h3>

            {/* Button to open the modal */}
            <button style={{ backgroundColor: '#272727', border: '2px solid red' }} className="open-button" onClick={openForm}>LOGUEATE</button>

            {/* Modal */}
            <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 style={{color:'black'}} className="modal-title">Login</h5>
                    <button type="button" className="close" onClick={closeForm}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <form id="loginForm">
                      <label style={{color:'black' , marginLeft:'40px'}} htmlFor="username">Username</label>
                      <input style={{color:'white' , marginLeft:'40px'}} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                      <br></br>
                      <label style={{color:'black' , marginLeft:'40px'}}  htmlFor="password">Password</label>
                      <input style={{color:'white' , marginLeft:'40px'}} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={login}>Login</button>
                    <button type="button" className="btn btn-secondary" onClick={closeForm}>Close</button>
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
