import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    rol: localStorage.getItem('rol')
  });

  const login = (token, rol) => {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rol);
    setAuth({ token: token, rol: rol });
    console.log("Autenticacion efectuada");
  };

  const logout = () => {
    setAuth({ token: null, role: null });
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    console.log("Cierre de sesion");   
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


