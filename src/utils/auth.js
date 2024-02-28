// utils/auth.js
export const isAuthenticated = () => {
    const access_token = localStorage.getItem('access_token');
    // Agrega cualquier otra verificación que necesites aquí
    return !!access_token; // Devuelve true si el token está presente
  };
  