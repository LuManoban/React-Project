import { useState } from 'react';
import '../styles/index.css';
import '../styles/style.css';

const Bienvenido = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const login = () => {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Username:', username);
    console.log('Password:', password);
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

            {/* Button to open the popup form */}
            <button style={{ backgroundColor: '#272727', border: '2px solid red' }} className="open-button" onClick={openForm}>LOGUEATE</button>

            {/* The form */}
            {isOpen && (
              <div style={{ zIndex: 100 }} className="form-popup">
                <form className="form-container" id="loginForm">
                  <h1 style={{ color: 'black' }}>Login</h1>

                  <label style={{ color: 'black' }} htmlFor="user"><b>Username</b></label>
                  <input style={{ color: 'black' }} type="text" placeholder="Enter Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                  <label style={{ color: 'black' }} htmlFor="psw"><b>Password</b></label>
                  <input style={{ color: 'black' }} type="password" placeholder="Enter Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                  <button type="button" className="btn" onClick={login}>Login</button>
                  <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Bienvenido;