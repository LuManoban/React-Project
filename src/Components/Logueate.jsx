import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/style.css';

const Logueate = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
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
                // Éxito en la autenticación, puedes redirigir a otra página o realizar otras acciones aquí
                console.log('Inicio de sesión exitoso');
            } else {
                // Si la solicitud no es exitosa, puedes manejar el error aquí
                console.error('Inicio de sesión fallido');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error);
        }
    };

    return (
        <article className="hero d-flex" id="hero">
            <div className="container g-layout g-layout--center ">
                <div className="core bg-transparent"></div>
                <div style={{ zIndex: 100 }} className="form-popup" id="myForm">
                    <form className="form-container" id="loginForm">
                        <h1 style={{ color: "black" }}>Login</h1>

                        <label style={{ color: "black" }} htmlFor="user"><b>Usuario</b></label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            placeholder="Ingrese Usuario"
                            id="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label style={{ color: "black" }} htmlFor="psw"><b>Password</b></label>
                        <input
                            style={{ color: "black" }}
                            type="password"
                            placeholder="Ingrese Password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="button" className="btn" onClick={handleLogin}>Login</button>
                        <button type="button" className="btn cancel" onClick={() => console.log('Cerrar')}>Close</button>
                    </form>
                </div>
            </div>
        </article>
    );
};

export default Logueate;
